import { useEffect, useRef } from "react";

interface HospitalityProject {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  year: number;
  image: string;
}

interface HospitalityProjectsProps {
  projects: HospitalityProject[];
}

export default function HospitalityProjects({ projects }: HospitalityProjectsProps) {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardsRef.current) return;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8;

        if (isInView) {
          const delay = index * 150;
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, delay);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="py-[120px] relative"
      style={{ backgroundColor: "#F3F0E8" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        {/* Section title */}
        <h2
          className="text-center mb-20 text-gray-900 uppercase"
          style={{
            fontFamily: "Rajdhani, sans-serif",
            lineHeight: "18px",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "8px",
          }}
        >
          Hospitality Projects
        </h2>

        {/* Content with grid */}
        <div className="relative">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1400px] mx-auto lg:px-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="group cursor-pointer"
                style={{
                  opacity: 0,
                  transform: "translateY(40px)",
                  transition: "all 0.8s ease-out",
                }}
              >
                {/* Image container with 4:3 aspect ratio */}
                <div className="relative overflow-hidden bg-gray-200 w-full" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-600" />
                </div>

                {/* Content */}
                <div className="pt-8 pb-4">
                  <h3
                    className="text-xl font-normal text-gray-900 mb-4 group-hover:text-gray-700 transition-colors uppercase tracking-wide"
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      letterSpacing: "2px",
                      lineHeight: "1.4",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-sm text-gray-600 mb-6 leading-relaxed"
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      color: "#4A4038",
                    }}
                  >
                    {project.description}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-gray-500 tracking-widest uppercase">
                    <span>{project.category}</span>
                    <span>|</span>
                    <span>{project.type}</span>
                    <span>|</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
