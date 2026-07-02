import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export default function Architecture() {
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
            Our Projects
          </h1>
          <p
            className="text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              lineHeight: "1.8",
            }}
          >
            Explore our diverse portfolio of architectural and design projects spanning residential, commercial, and hospitality sectors.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/architecture/${project.id}`}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden bg-gray-200">
                    <img
                      src={project.thumbnailImage}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="pt-8 pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3
                          className="text-2xl font-normal text-gray-900 mb-2 tracking-wide uppercase"
                          style={{
                            fontFamily: "Rajdhani, sans-serif",
                            letterSpacing: "2px",
                          }}
                        >
                          {project.name}
                        </h3>
                        <p
                          className="text-sm text-gray-600"
                          style={{
                            fontFamily: "Rajdhani, sans-serif",
                          }}
                        >
                          {project.location}
                        </p>
                      </div>
                      <span
                        className="text-lg font-normal text-gray-400"
                        style={{
                          fontFamily: "Rajdhani, sans-serif",
                        }}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <p
                      className="text-sm text-gray-600 leading-relaxed"
                      style={{
                        fontFamily: "Rajdhani, sans-serif",
                        lineHeight: "1.6",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
