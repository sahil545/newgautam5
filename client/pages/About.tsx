import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
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
            About
          </h1>
          <p
            className="text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              lineHeight: "1.8",
            }}
          >
            Gautam & Associates is a respected architectural firm with a legacy of creating thoughtful, functional, and enduring spaces.
          </p>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2
                className="text-3xl font-normal text-gray-900 tracking-widest uppercase"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  letterSpacing: "6px",
                }}
              >
                Our Journey
              </h2>
              <p
                className="text-base text-gray-700 leading-relaxed"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  lineHeight: "1.8",
                }}
              >
                Founded in August 1990, Gautam & Associates has grown from a modest private practice into a respected architectural firm with a diverse and expansive portfolio. The practice was established by Ar. Gautam Gupta, Principal Architect and founder, who began his journey with a series of individual residential projects across Chandigarh and its surrounding regions.
              </p>
              <p
                className="text-base text-gray-700 leading-relaxed"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  lineHeight: "1.8",
                }}
              >
                Over the last 35 years, Gautam & Associates has delivered a wide spectrum of Residential, Institutional, Commercial, and Hospitality projects, establishing itself as a trusted name in architectural excellence.
              </p>
            </div>

            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=500&fit=crop"
                alt="Modern Architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Leadership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12" style={{ backgroundColor: "#f5f1e5" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                alt="Architectural Design"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 md:order-2">
              <h2
                className="text-3xl font-normal text-gray-900 tracking-widest uppercase"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  letterSpacing: "6px",
                }}
              >
                Vision & Leadership
              </h2>
              <p
                className="text-base text-gray-700 leading-relaxed"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  lineHeight: "1.8",
                }}
              >
                Ar. Gautam Gupta trained under the distinguished Ar. Dharam Pal Gupta, a mentor with extensive experience in housing, institutional, and public projects. His exposure to European architecture during travels and studies in Paris shaped his forward-thinking approach to contemporary design.
              </p>
              <p
                className="text-base text-gray-700 leading-relaxed"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  lineHeight: "1.8",
                }}
              >
                The firm's leadership combines decades of expertise with a commitment to innovation, ensuring every project reflects their dedication to architectural excellence and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-normal text-gray-900 mb-16 text-center tracking-widest uppercase"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              letterSpacing: "8px",
            }}
          >
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-6">
                <span
                  className="text-white text-xl font-bold"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  01
                </span>
              </div>
              <h3
                className="text-lg font-normal text-gray-900 mb-4 uppercase tracking-wider"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  letterSpacing: "3px",
                }}
              >
                Excellence
              </h3>
              <p
                className="text-sm text-gray-700 leading-relaxed"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  lineHeight: "1.7",
                }}
              >
                We are committed to delivering architectural solutions of the highest quality, combining thoughtful design with meticulous execution.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-6">
                <span
                  className="text-white text-xl font-bold"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  02
                </span>
              </div>
              <h3
                className="text-lg font-normal text-gray-900 mb-4 uppercase tracking-wider"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  letterSpacing: "3px",
                }}
              >
                Integrity
              </h3>
              <p
                className="text-sm text-gray-700 leading-relaxed"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  lineHeight: "1.7",
                }}
              >
                Guided by principles of honesty and architectural integrity, we ensure every project reflects our dedication to our clients.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-6">
                <span
                  className="text-white text-xl font-bold"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  03
                </span>
              </div>
              <h3
                className="text-lg font-normal text-gray-900 mb-4 uppercase tracking-wider"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  letterSpacing: "3px",
                }}
              >
                Innovation
              </h3>
              <p
                className="text-sm text-gray-700 leading-relaxed"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  lineHeight: "1.7",
                }}
              >
                We embrace contemporary approaches and forward-thinking design while respecting timeless architectural principles.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-6">
                <span
                  className="text-white text-xl font-bold"
                  style={{ fontFamily: "Rajdhani, sans-serif" }}
                >
                  04
                </span>
              </div>
              <h3
                className="text-lg font-normal text-gray-900 mb-4 uppercase tracking-wider"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  letterSpacing: "3px",
                }}
              >
                Sustainability
              </h3>
              <p
                className="text-sm text-gray-700 leading-relaxed"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  lineHeight: "1.7",
                }}
              >
                We create spaces that harmonize with their surroundings, balancing modern luxury with environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12" style={{ backgroundColor: "#f5f1e5" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl font-normal text-gray-900 mb-12 tracking-widest uppercase"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              letterSpacing: "8px",
            }}
          >
            Our Legacy
          </h2>
          <p
            className="text-base text-gray-700 leading-relaxed mb-8"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              lineHeight: "1.8",
            }}
          >
            With a legacy built on experience, vision, and design excellence, Gautam & Associates remains committed to crafting thoughtful, functional, and enduring architectural solutions. The firm is dedicated to excellence, with a philosophy rooted in thoughtfulness, functionality, and architectural integrity.
          </p>
          <p
            className="text-base text-gray-700 leading-relaxed"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              lineHeight: "1.8",
            }}
          >
            The family shares a deep-rooted association with the fields of Art and Architecture, collectively dedicating over six decades to this creative and meaningful profession—and continuing to contribute with the same passion and commitment today.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl font-normal text-gray-900 mb-8 tracking-widest uppercase"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              letterSpacing: "8px",
            }}
          >
            Meet Our Team
          </h2>
          <p
            className="text-lg text-gray-700 mb-8 leading-relaxed"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              lineHeight: "1.8",
            }}
          >
            Discover the talented architects and designers who bring our vision to life.
          </p>
          <Link
            to="/team"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block px-8 py-3 bg-gray-900 text-white uppercase tracking-wider hover:bg-gray-800 transition-colors"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              letterSpacing: "4px",
            }}
          >
            View Team
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
