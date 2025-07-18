import { useAppContext } from "../contexts/AppContext";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Star,
  Users,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Index() {
  const { state, setLoading } = useAppContext();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [setLoading]);

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description:
        "Built with modern React and optimized for blazing performance",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Scale",
      description: "Deployed worldwide with CDN for optimal performance",
    },
  ];

  const stats = [
    {
      label: "Happy Users",
      value: "10K+",
      icon: <Users className="h-6 w-6" />,
    },
    {
      label: "Success Rate",
      value: "99.9%",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    { label: "Rating", value: "5.0", icon: <Star className="h-6 w-6" /> },
  ];

  if (state.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center morphing-bg">
        <div className="glass rounded-3xl p-8 glow">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white/30 border-t-white mx-auto"></div>
          <p className="text-white text-xl font-semibold mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen morphing-bg relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center fade-in relative z-10">
            <Badge
              variant="secondary"
              className="mb-6 glass text-white border-white/30 text-lg px-6 py-2 glow"
            >
              ✨ Welcome to the Future ✨
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
              <span className="block text-shimmer drop-shadow-2xl">
                Beautiful
              </span>
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent text-glow">
                Single Page
              </span>
              <span className="block text-white drop-shadow-2xl">
                Application
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light backdrop-blur-sm">
              Experience 🌊 seamless navigation, ✨ smooth transitions, and 🎨
              stunning design in this React-powered SPA. Built with cutting-edge
              technologies for exceptional performance and user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link to="/about">
                <Button
                  size="lg"
                  className="group glass text-white border-white/30 hover:bg-white/20 transition-all duration-300 text-lg px-8 py-4 glow-pink hover:scale-105"
                >
                  🚀 Explore Features
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="glass text-white border-white/50 hover:bg-white/20 transition-all duration-300 text-lg px-8 py-4 glow-blue hover:scale-105"
                >
                  💬 Get in Touch
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center glass rounded-2xl p-6 glow hover:scale-105 transition-all duration-300 ${index === 0 ? "fade-in" : index === 1 ? "fade-in-delayed" : "fade-in-delayed"}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="text-pink-400 mr-3 text-2xl">
                      {stat.icon}
                    </div>
                    <span className="text-3xl font-black text-white text-glow">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-lg text-white/80 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/30 to-purple-600/30 rounded-full blur-3xl float"></div>
          <div className="absolute top-40 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl float-delayed"></div>
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl float-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl float"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 text-shimmer">
              🎆 Why Choose Our SPA?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Built with cutting-edge technologies and revolutionary practices
              to deliver an extraordinary user experience and unmatched
              performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`border-0 glass glow hover:glow-pink hover:scale-105 transition-all duration-500 rounded-3xl overflow-hidden group ${index === 0 ? "fade-in" : index === 1 ? "fade-in-delayed" : "fade-in-delayed"}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <CardHeader className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 glow-pink group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 text-lg leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 gradient-aurora relative overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-3xl rotate-45 float"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-white/10 rounded-full float-delayed"></div>
          <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-white/5 rounded-full float-slow"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 bg-white/10 rounded-2xl rotate-12 float"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="glass rounded-3xl p-12 glow">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 text-glow">
              🚀 Ready to Get Started?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              🌍 Explore our About page to discover the technology stack, or 💬
              contact us to bring your amazing project ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/about">
                <Button
                  size="lg"
                  className="glass text-white border-white/30 hover:bg-white/20 transition-all duration-300 text-xl px-10 py-6 glow-blue hover:scale-110"
                >
                  📚 Learn More
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="glass border-2 border-white/50 text-white hover:bg-white hover:text-purple-900 transition-all duration-300 text-xl px-10 py-6 glow-pink hover:scale-110"
                >
                  ✨ Start Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
