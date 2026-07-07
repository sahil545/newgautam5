import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Briefcase } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function JoinUs() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        toast({
          title: "Error",
          description: "File size must be less than 10MB",
          variant: "destructive",
        });
        return;
      }
      setResume(file);
    }
  };

  const jobOpenings = [
    {
      id: 1,
      title: "Junior Architect",
      description: [
        "Proficient in AutoCAD and SketchUp",
        "Strong understanding of architectural design principles and construction drawings",
        "Meticulous attention to detail and accuracy in documentation",
        "Ability to work on real-world projects and collaborate with the team",
        "Passion for design and eagerness to learn and grow",
      ],
    },
    {
      id: 2,
      title: "Interns (Minimum 6 Months)",
      description: ["Architecture & Interior Design Interns"],
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
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
      const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      if (resume) {
        formDataToSend.append("resume", resume);
      }

      const response = await fetch("/api/joinus", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        setResume(null);
        toast({
          title: "Success",
          description: data.message || "Thank you for your submission. We'll review it and get back to you soon!",
        });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to submit your application. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to submit your application. Please try again.",
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
            className="text-4xl md:text-5xl font-normal text-gray-900 mb-8 tracking-widest uppercase"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              letterSpacing: "8px",
            }}
          >
            Join Us
          </h1>
          <p
            className="text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              lineHeight: "1.8",
            }}
          >
            Become part of a team dedicated to creating thoughtful, functional, and enduring architectural solutions.
          </p>
        </div>
      </section>

      {/* Job Openings & Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Job Openings */}
            <div>
              <h2
                className="text-3xl font-normal text-gray-900 mb-12 tracking-widest uppercase"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  letterSpacing: "8px",
                }}
              >
                Job Openings
              </h2>

              <div className="space-y-12">
                {jobOpenings.map((job) => (
                  <div key={job.id} className="border-b border-gray-200 pb-12 last:border-b-0">
                    <div className="flex items-start gap-4 mb-6">
                      <Briefcase className="text-gray-900 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3
                          className="text-2xl font-normal text-gray-900 uppercase tracking-wider"
                          style={{
                            fontFamily: "Rajdhani, sans-serif",
                            letterSpacing: "4px",
                          }}
                        >
                          {job.title}
                        </h3>
                      </div>
                    </div>
                    {job.description.length > 0 && (
                      <ul className="space-y-3 ml-10">
                        {job.description.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-gray-700 leading-relaxed flex items-start gap-3"
                            style={{
                              fontFamily: "Rajdhani, sans-serif",
                              lineHeight: "1.8",
                            }}
                          >
                            <span className="text-gray-400 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Submission Form */}
            <div>
              <div
                className="bg-white border-2 border-gray-900 p-12 rounded-lg sticky top-32"
                style={{ backgroundColor: "#fafaf8" }}
              >
            <h2
              className="text-2xl font-normal text-gray-900 mb-2 text-center uppercase tracking-widest"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                letterSpacing: "4px",
              }}
            >
              Submit Portfolio / Resume
            </h2>

            <p
              className="text-center text-gray-600 mb-10 text-sm"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                lineHeight: "1.6",
              }}
            >
              Send us your Resume & Portfolio through the form below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    letterSpacing: "2px",
                  }}
                >
                  First name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:bg-white transition-colors"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    letterSpacing: "2px",
                  }}
                >
                  Last name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:bg-white transition-colors"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider"
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
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:bg-white transition-colors"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    letterSpacing: "2px",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:bg-white transition-colors resize-none"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium text-gray-900 mb-2 uppercase tracking-wider"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    letterSpacing: "2px",
                  }}
                >
                  Upload Resume *
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:bg-white transition-colors"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                />
                <p className="text-xs text-gray-600 mt-2">
                  Supported formats: PDF, DOC, DOCX (Max 10MB)
                </p>
                {resume && (
                  <p className="text-sm text-green-600 mt-2">
                    ✓ {resume.name} selected
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-3 bg-gray-700 text-white uppercase tracking-wider hover:bg-gray-900 transition-colors font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    letterSpacing: "3px",
                  }}
                >
                  {loading ? "Submitting..." : submitted ? "Submitted!" : "Submit"}
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
