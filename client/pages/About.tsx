import { useAppContext } from "../contexts/AppContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import {
  Code2,
  Palette,
  Zap,
  Globe,
  Users,
  Heart,
  CheckCircle,
  ArrowRight,
  Github,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function About() {
  const { state, setLoading } = useAppContext();
  const [skillProgress, setSkillProgress] = useState(0);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setSkillProgress(100);
    }, 500);
    return () => clearTimeout(timer);
  }, [setLoading]);

  const technologies = [
    { name: "React 18", progress: 95, color: "bg-blue-500" },
    { name: "TypeScript", progress: 90, color: "bg-blue-600" },
    { name: "React Router", progress: 88, color: "bg-purple-500" },
    { name: "Tailwind CSS", progress: 92, color: "bg-cyan-500" },
    { name: "Context API", progress: 85, color: "bg-green-500" },
    { name: "Framer Motion", progress: 80, color: "bg-pink-500" },
  ];

  const features = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Modern Architecture",
      description:
        "Built with React 18, TypeScript, and modern development practices",
      details: [
        "Component-based architecture",
        "Type-safe development",
        "Modern ES6+ features",
      ],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimized",
      description: "Lightning-fast navigation with client-side routing",
      details: ["Virtual DOM optimization", "Code splitting", "Lazy loading"],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Beautiful Design",
      description: "Responsive design with smooth animations and modern UI",
      details: [
        "Mobile-first approach",
        "Smooth transitions",
        "Accessible components",
      ],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "State Management",
      description: "Centralized state management with React Context",
      details: ["Global state", "Type-safe actions", "Persistent data"],
    },
  ];

  const team = [
    {
      name: "Frontend Team",
      role: "UI/UX Development",
      avatar: "👨‍💻",
      skills: ["React", "TypeScript", "Design Systems"],
    },
    {
      name: "Backend Team",
      role: "API Development",
      avatar: "👩‍💻",
      skills: ["Node.js", "Express", "Database Design"],
    },
    {
      name: "DevOps Team",
      role: "Infrastructure",
      avatar: "🔧",
      skills: ["Docker", "CI/CD", "Cloud Deployment"],
    },
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
    <div className="min-h-screen gradient-mesh fade-in relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center relative z-10">
            <Badge
              variant="secondary"
              className="mb-6 glass text-white border-white/30 text-lg px-6 py-2 glow"
            >
              💡 About Our Technology
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Built with{" "}
              <span className="text-shimmer drop-shadow-2xl">Modern Stack</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              This Single Page Application showcases the power of modern web
              technologies with React Router for seamless navigation, Context
              API for state management, and beautiful animations for enhanced
              user experience.
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl float"></div>
          <div className="absolute top-40 right-10 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl float-delayed"></div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="py-32 bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 text-shimmer">
              🚀 Technology Stack
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We use cutting-edge technologies to deliver exceptional
              performance and developer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="border-0 glass glow hover:glow-blue hover:scale-105 transition-all duration-300 rounded-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg text-white font-bold">
                      {tech.name}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="text-white border-white/50"
                    >
                      {tech.progress}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="w-full bg-white/20 rounded-full h-3 mb-2">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out glow-pink`}
                      style={{
                        width: skillProgress > 0 ? `${tech.progress}%` : "0%",
                      }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 text-shimmer">
              ⚡ Core Features
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Every feature is carefully crafted to provide the best user
              experience and development workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 glass glow hover:glow-purple hover:scale-105 transition-all duration-500 rounded-3xl overflow-hidden group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 glow-blue">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-3 text-white group-hover:text-cyan-300 transition-colors">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-white/80 mb-6 text-lg">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center text-white/70"
                      >
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-32 bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-red-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 text-shimmer">
              👥 Built by Experts
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our team brings together diverse expertise to create outstanding
              web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-0 glass text-center hover:glow-pink hover:scale-105 transition-all duration-300 rounded-3xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-6xl mb-6">{member.avatar}</div>
                  <CardTitle className="text-white text-xl">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-white/70 text-lg">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="glass text-white border-white/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-32 gradient-aurora relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-2xl rotate-45 float-delayed"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass rounded-3xl p-12 glow">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 text-glow">
              🌟 Ready to Build Something Amazing?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team to discuss your next project. We're
              here to help bring your ideas to life with cutting-edge
              technology!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="glass text-white border-white/30 hover:bg-white/20 transition-all duration-300 text-xl px-10 py-6 glow-blue hover:scale-110 group"
                >
                  💬 Contact Us
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="glass border-2 border-white/50 text-white hover:bg-white hover:text-purple-900 transition-all duration-300 text-xl px-10 py-6 glow-pink hover:scale-110"
                asChild
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-3 h-5 w-5" />
                  🔗 View Source
                  <ExternalLink className="ml-3 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
