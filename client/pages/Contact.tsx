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
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useToast } from "../hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Zap,
  Heart,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  const { state, setLoading } = useAppContext();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [setLoading]);

  const contactInfo = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Us",
      description: "Get in touch via email",
      value: "vasantjv2005@gmail.com",
      action: "mailto:vasantjv2005@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Us",
      description: "Speak with our team",
      value: "9392069322",
      action: "tel:+919392069322",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Visit Us",
      description: "Our office location",
      value: "Vishwa Vishwani institute of system and management",
      action: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Business Hours",
      description: "When we're available",
      value: "Mon-Sat, 9:30 AM - 8:30 PM IST",
      action: "#",
      color: "from-orange-500 to-red-500",
    },
  ];

  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Quick Response",
      description: "We respond within 24 hours",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Talk directly with our experts",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Solutions",
      description: "Quick turnaround on projects",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, priority: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create Gmail compose URL with form data
    const subject = encodeURIComponent(
      formData.subject || "Contact from SPA Demo",
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Priority: ${formData.priority || "Not specified"}\n\n` +
        `Message:\n${formData.message}`,
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vasantjv2005@gmail.com&su=${subject}&body=${body}`;

    // Open Gmail in new tab
    window.open(gmailUrl, "_blank");

    // Show success message
    toast({
      title: "✨ Gmail opened successfully!",
      description:
        "Your message has been prepared in Gmail. Please send it from there.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      priority: "",
    });
    setIsSubmitting(false);
  };

  if (state.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center gradient-aurora">
        <div className="glass rounded-3xl p-8 glow">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white/30 border-t-white mx-auto"></div>
          <p className="text-white text-xl font-semibold mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-aurora fade-in relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
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
              💬 Let's Connect
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Get in <span className="text-shimmer drop-shadow-2xl">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Have a question about our SPA demo or want to discuss your next
              project? We'd love to hear from you. Send us a message and we'll
              respond as soon as possible.
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl float"></div>
          <div className="absolute top-40 right-10 w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl float-delayed"></div>
        </div>
      </div>

      {/* Contact Features */}
      <div className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 glass rounded-3xl glow hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 glow-pink">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-white mb-3 text-xl">
                  {feature.title}
                </h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 glass glow rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm">
                <CardTitle className="text-3xl text-white">
                  💌 Send us a message
                </CardTitle>
                <CardDescription className="text-white/80 text-lg">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="name"
                        className="text-white font-semibold"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glass border-white/30 text-white placeholder:text-white/50 focus:border-purple-400 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="email"
                        className="text-white font-semibold"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="glass border-white/30 text-white placeholder:text-white/50 focus:border-purple-400 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="subject"
                      className="text-white font-semibold"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="glass border-white/30 text-white placeholder:text-white/50 focus:border-purple-400 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="priority"
                      className="text-white font-semibold"
                    >
                      Priority
                    </Label>
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger className="glass border-white/30 text-white">
                        <SelectValue placeholder="Select priority level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">
                          Low - General inquiry
                        </SelectItem>
                        <SelectItem value="medium">
                          Medium - Project discussion
                        </SelectItem>
                        <SelectItem value="high">
                          High - Urgent matter
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="message"
                      className="text-white font-semibold"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your project or question..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="glass border-white/30 text-white placeholder:text-white/50 focus:border-purple-400 transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group glass text-white border-white/30 hover:bg-white/20 transition-all duration-300 text-lg py-6 glow-pink hover:scale-105"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white mr-3" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass rounded-3xl p-8 glow">
                <h2 className="text-3xl font-bold text-white mb-4 text-shimmer">
                  📞 Contact Information
                </h2>
                <p className="text-white/80 mb-8 text-lg">
                  Prefer to reach out directly? Here's how you can get in touch
                  with us.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-0 glass glow hover:glow-blue hover:scale-105 transition-all duration-300 group cursor-pointer rounded-2xl"
                    onClick={() => {
                      if (
                        info.action.startsWith("http") ||
                        info.action.startsWith("mailto") ||
                        info.action.startsWith("tel")
                      ) {
                        window.open(info.action, "_blank");
                      }
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 glow`}
                        >
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-2 text-xl group-hover:text-cyan-300 transition-colors">
                            {info.title}
                          </h3>
                          <p className="text-white/70 mb-3">
                            {info.description}
                          </p>
                          <p className="text-white font-medium text-lg">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ Section */}
              <Card className="border-0 glass glow rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-white text-2xl">
                    <Heart className="h-6 w-6 text-pink-400 mr-3" />✨ Quick
                    Facts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-4 flex-shrink-0" />
                      We respond to all inquiries within 24 hours
                    </li>
                    <li className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-4 flex-shrink-0" />
                      Free consultation for new projects
                    </li>
                    <li className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-4 flex-shrink-0" />
                      Custom solutions tailored to your needs
                    </li>
                    <li className="flex items-center text-white/80">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-4 flex-shrink-0" />
                      Ongoing support and maintenance available
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
