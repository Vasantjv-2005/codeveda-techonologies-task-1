import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useCallback,
} from "react";

// Define the app state interface
interface AppState {
  user: {
    name: string;
    email: string;
  } | null;
  theme: "light" | "dark";
  navigationHistory: string[];
  isLoading: boolean;
}

// Define action types
type AppAction =
  | { type: "SET_USER"; payload: { name: string; email: string } }
  | { type: "CLEAR_USER" }
  | { type: "TOGGLE_THEME" }
  | { type: "ADD_TO_HISTORY"; payload: string }
  | { type: "SET_LOADING"; payload: boolean };

// Initial state
const initialState: AppState = {
  user: null,
  theme: "light",
  navigationHistory: ["/"],
  isLoading: false,
};

// Reducer function
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "CLEAR_USER":
      return {
        ...state,
        user: null,
      };
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case "ADD_TO_HISTORY":
      return {
        ...state,
        navigationHistory: [...state.navigationHistory, action.payload].slice(
          -10,
        ), // Keep last 10
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

// Context type
interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  setUser: (name: string, email: string) => void;
  clearUser: () => void;
  toggleTheme: () => void;
  addToHistory: (path: string) => void;
  setLoading: (loading: boolean) => void;
}

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Helper functions - memoized to prevent infinite re-renders
  const setUser = useCallback((name: string, email: string) => {
    dispatch({ type: "SET_USER", payload: { name, email } });
  }, []);

  const clearUser = useCallback(() => {
    dispatch({ type: "CLEAR_USER" });
  }, []);

  const toggleTheme = useCallback(() => {
    dispatch({ type: "TOGGLE_THEME" });
  }, []);

  const addToHistory = useCallback((path: string) => {
    dispatch({ type: "ADD_TO_HISTORY", payload: path });
  }, []);

  const setLoading = useCallback((loading: boolean) => {
    dispatch({ type: "SET_LOADING", payload: loading });
  }, []);

  const value: AppContextType = {
    state,
    dispatch,
    setUser,
    clearUser,
    toggleTheme,
    addToHistory,
    setLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
