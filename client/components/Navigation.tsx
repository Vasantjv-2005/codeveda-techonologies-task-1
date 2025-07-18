import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import { Button } from "./ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const { state, toggleTheme, addToHistory } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track navigation history
  useEffect(() => {
    addToHistory(location.pathname);
  }, [location.pathname, addToHistory]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="glass border-0 border-b border-white/20 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 font-bold text-xl text-primary hover:text-primary/80 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg glow group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">✨</span>
            </div>
            <span className="text-shimmer text-2xl font-extrabold">
              SPA Demo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-3 text-sm font-semibold transition-all duration-300 hover:text-primary group rounded-xl ${
                  isActivePage(item.path)
                    ? "text-primary bg-white/20 backdrop-blur-sm shadow-lg"
                    : "text-gray-700 hover:text-gray-900 hover:bg-white/10"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full transition-all duration-300 ${
                    isActivePage(item.path)
                      ? "scale-100 glow"
                      : "scale-0 group-hover:scale-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 glow-blue hover:scale-110"
            >
              {state.theme === "light" ? (
                <Moon className="h-5 w-5 text-purple-600" />
              ) : (
                <Sun className="h-5 w-5 text-yellow-500" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-red-500" />
              ) : (
                <Menu className="h-5 w-5 text-purple-600" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1 glass rounded-b-2xl">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                    isActivePage(item.path)
                      ? "text-primary bg-white/30 backdrop-blur-sm glow"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/20"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
