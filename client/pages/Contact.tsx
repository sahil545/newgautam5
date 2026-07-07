import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        toast({
          title: "Success",
          description: data.message || "Thank you for reaching out. We'll be in touch soon!",
        });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: "#f5f1e5" }}>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-normal text-foreground mb-8 tracking-widest uppercase"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              letterSpacing: "8px",
            }}
          >
            Get In Touch
          </h1>
          <p
            className="text-lg text-muted-foreground leading-relaxed"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              lineHeight: "1.8",
            }}
          >
            We'd love to hear from you. Reach out to us with any inquiries or project ideas.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-96 md:h-[500px] lg:h-[600px] bg-foreground">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d30922.177006797356!2d76.77026745241314!3d30.711584624768367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d30.6490245!2d76.8605644!4m5!1s0x390fedab4e10da57%3A0xbd4883d4df7c6648!2sTour%20Umbrella%2C%20SCO%2029%20%2C%20First%20Floor%2C%20Tribune%20Rd%2C%20Sector%2020D%2C%20Sector%2020%2C%20Chandigarh%2C%20160020!3m2!1d30.719079699999998!2d76.7751505!5e0!3m2!1sen!2sin!4v1782375245503!5m2!1sen!2sin"
          title="Gautam & Associates Location"
        />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.81482429986!2d76.77542878320803!3d30.719519352480525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedaadde82a27%3A0x77757b7dc8dca540!2sSector%2020D%2C%20Sector%2020%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1783404051353!5m2!1sen!2sin" width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"></iframe>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Information */}
            <div>
              {/* Office */}
              <div className="mb-16">
                <h2
                  className="text-2xl font-normal text-foreground mb-8 uppercase tracking-wider"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    letterSpacing: "4px",
                  }}
                >
                  Office
                </h2>
                <div className="flex gap-4 mb-6">
                  <MapPin size={24} className="flex-shrink-0 mt-1" style={{ color: "#000000" }} />
                  <div>
                    <p
                      className="text-foreground font-medium mb-2"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      OFFICE
                    </p>
                    <p
                      className="text-muted-foreground"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      SCO 13 First Floor
                    </p>
                    <p
                      className="text-muted-foreground"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      Sector 20 D
                    </p>
                    <p
                      className="text-muted-foreground"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      Dakshin Marg
                    </p>
                    <p
                      className="text-muted-foreground"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      Chandigarh
                    </p>
                    <p
                      className="text-muted-foreground"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      160020
                    </p>
                  </div>
                </div>
              </div>

              {/* Communications */}
              <div className="mb-16">
                <h2
                  className="text-2xl font-normal text-foreground mb-8 uppercase tracking-wider"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    letterSpacing: "4px",
                  }}
                >
                  Communications
                </h2>

                {/* Phone */}
                <div className="flex gap-4 mb-6">
                  <Phone size={24} className="flex-shrink-0 mt-1" style={{ color: "#000000" }} />
                  <div>
                    <a
                      href="tel:+918360184356"
                      className="text-foreground hover:text-muted-foreground transition-colors"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      +91 8360184356
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 mb-8">
                  <Mail size={24} className="flex-shrink-0 mt-1" style={{ color: "#000000" }} />
                  <div>
                    <a
                      href="mailto:guptagautam2015@gmail.com"
                      className="text-foreground hover:text-muted-foreground transition-colors"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      guptagautam2015@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Stay Connected */}
              <div>
                <h2
                  className="text-2xl font-normal text-foreground mb-8 uppercase tracking-wider"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    letterSpacing: "4px",
                  }}
                >
                  Stay Connected
                </h2>
                <a
                  href="https://www.instagram.com/gautamassociates_1990?igsh=MXNrM3JpbG5heGZnaA==https://www.instagram.com/gautamassociates_1990?igsh=MXNrM3JpbG5heGZnaA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
                >
                  <Instagram size={28} style={{ color: "#000000" }} />
                  <span
                    className="uppercase tracking-wider font-medium"
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      letterSpacing: "2px",
                    }}
                  >
                    Instagram
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div
                className="bg-secondary border border-border p-10 rounded-lg"
                style={{ backgroundColor: "#fafaf8" }}
              >
                <h2
                  className="text-2xl font-normal text-foreground mb-2 uppercase tracking-widest"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    letterSpacing: "4px",
                  }}
                >
                  Send us a Query
                </h2>

                <p
                  className="text-muted-foreground mb-8 text-sm"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    lineHeight: "1.6",
                  }}
                >
                  Have a project in mind? Let us know about it.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2 uppercase tracking-wider"
                      style={{
                        fontFamily: "Rajdhani, sans-serif",
                        letterSpacing: "2px",
                      }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 bg-white border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-gray-900 focus:bg-white transition-colors"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2 uppercase tracking-wider"
                      style={{
                        fontFamily: "Rajdhani, sans-serif",
                        letterSpacing: "2px",
                      }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="w-full px-4 py-3 bg-white border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-gray-900 focus:bg-white transition-colors"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2 uppercase tracking-wider"
                      style={{
                        fontFamily: "Rajdhani, sans-serif",
                        letterSpacing: "2px",
                      }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 bg-white border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-gray-900 focus:bg-white transition-colors"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2 uppercase tracking-wider"
                      style={{
                        fontFamily: "Rajdhani, sans-serif",
                        letterSpacing: "2px",
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-white border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground focus:bg-white transition-colors resize-none"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-8 py-3 bg-foreground text-background uppercase tracking-wider hover:opacity-80 transition-all font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        fontFamily: "Rajdhani, sans-serif",
                        letterSpacing: "3px",
                      }}
                    >
                      {loading ? "Sending..." : submitted ? "Sent!" : "Send Query"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
