import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface Case {
  id: string;
  title: string;
  description?: string;
  category?: string;
  type?: string;
  tags: string[];
  year: number;
  image: string;
  link?: string;
}

interface CaseGridProps {
  title: string;
  stickyWord?: string;
  cases: Case[];
  layout?: "three" | "two" | "four" | "five" | "six";
  isLatestWork?: boolean;
  backgroundColor?: string;
}

export default function CaseGrid({ title, stickyWord, cases, layout = "three", isLatestWork = false, backgroundColor }: CaseGridProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyLeftRef = useRef<HTMLDivElement>(null);
  const stickyRightRef = useRef<HTMLDivElement>(null);

  const gridColsClass = {
    two: "lg:grid-cols-2",
    three: isLatestWork ? "" : "lg:grid-cols-3",
    four: "lg:grid-cols-4",
    five: "lg:grid-cols-5",
    six: "lg:grid-cols-3",
  }[layout];

  // For Latest Work: alternating row pattern
  // Row 1,3,5... : [2col-span] [1col] [1col]
  // Row 2,4,6... : [1col] [1col] [2col-span]
  const getLatestWorkGridClasses = (index: number) => {
    if (!isLatestWork) return "";

    const rowIndex = Math.floor(index / 3);
    const colIndex = index % 3;

    // Alternate rows
    if (rowIndex % 2 === 0) {
      // Odd rows (0,2,4...): first column spans 2, others span 1
      return colIndex === 0 ? "lg:col-span-2" : "lg:col-span-1";
    } else {
      // Even rows (1,3,5...): first two span 1, last spans 2
      return colIndex === 2 ? "lg:col-span-2" : "lg:col-span-1";
    }
  };

  useEffect(() => {
    if (!isLatestWork) return;

    const handleScroll = () => {
      if (!stickyLeftRef.current || !sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const sectionBottom = sectionRect.bottom;

      // Only show text when section is in view
      const isInView = sectionTop < window.innerHeight && sectionBottom > 0;

      if (isInView) {
        // Calculate opacity based on distance from center
        const distFromCenter = Math.abs(sectionTop + sectionHeight / 2 - window.innerHeight / 2);
        const opacity = Math.max(0, 1 - distFromCenter / 400);

        if (stickyLeftRef.current) stickyLeftRef.current.style.opacity = opacity.toString();
        if (stickyRightRef.current) stickyRightRef.current.style.opacity = opacity.toString();

        // Calculate position to stick to section
        if (sectionTop > 0) {
          // Section is below viewport
          if (stickyLeftRef.current) {
            stickyLeftRef.current.style.position = "absolute";
            stickyLeftRef.current.style.top = "0px";
          }
          if (stickyRightRef.current) {
            stickyRightRef.current.style.position = "absolute";
            stickyRightRef.current.style.top = "0px";
          }
        } else if (sectionBottom < window.innerHeight) {
          // Section has scrolled past
          if (stickyLeftRef.current) {
            stickyLeftRef.current.style.position = "absolute";
            stickyLeftRef.current.style.top = `${sectionHeight - 200}px`;
          }
          if (stickyRightRef.current) {
            stickyRightRef.current.style.position = "absolute";
            stickyRightRef.current.style.top = `${sectionHeight - 200}px`;
          }
        } else {
          // Section is in view - stick to viewport
          if (stickyLeftRef.current) {
            stickyLeftRef.current.style.position = "fixed";
            stickyLeftRef.current.style.top = "50%";
          }
          if (stickyRightRef.current) {
            stickyRightRef.current.style.position = "fixed";
            stickyRightRef.current.style.top = "50%";
          }
        }
      } else {
        if (stickyLeftRef.current) stickyLeftRef.current.style.opacity = "0";
        if (stickyRightRef.current) stickyRightRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLatestWork]);

  const bgColor = backgroundColor || (isLatestWork ? "#F3F0E8" : "#faf8f5");
  const verticalPadding = isLatestWork ? "py-[120px]" : "py-20";

  return (
    <section
      ref={sectionRef}
      id={isLatestWork ? "latest-work" : undefined}
      className={`${verticalPadding} relative`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section title */}
        <h2
          className="text-center mb-20 text-gray-900 uppercase"
          style={{
            fontFamily: "Rajdhani, sans-serif",
            lineHeight: "18px",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "8px"
          }}
        >
          {title}
        </h2>

        {/* Cases grid with sticky text */}
        <div className="relative">
          {/* Sticky left text - only for Latest Work */}
          {isLatestWork && (
            <div
              ref={stickyLeftRef}
              className="hidden lg:block z-10 fixed left-12 opacity-0 transition-opacity duration-300 pointer-events-none"
              style={{ transform: "translateY(-50%)" }}
            >
              <div className="text-sm font-normal text-gray-400 leading-loose tracking-widest uppercase">
                {stickyWord?.split("").map((letter, i) => (
                  <div key={i} className="h-6">{letter}</div>
                ))}
              </div>
            </div>
          )}

          {/* Cases grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${gridColsClass} gap-6 gap-y-20 auto-rows-fr`}>
            {cases.map((caseItem, index) => {
              const itemContent = (
                <>
                  <div className="relative overflow-hidden bg-gray-200 aspect-square mb-6 rounded-none">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>

                  {isLatestWork ? (
                    <>
                      <h3 className="text-lg font-normal text-gray-900 mb-3 group-hover:text-gray-600 transition-colors tracking-wider uppercase" style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "3px", fontSize: "18px" }}>
                        {caseItem.title}
                      </h3>
                      {caseItem.description && (
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed max-w-[90%]">
                          {caseItem.description}
                        </p>
                      )}
                      <div className="flex items-center gap-4 text-xs text-gray-500 tracking-wider uppercase">
                        {caseItem.category && <span>{caseItem.category}</span>}
                        {caseItem.type && (
                          <>
                            <span>|</span>
                            <span>{caseItem.type}</span>
                          </>
                        )}
                        {caseItem.year && (
                          <>
                            <span>|</span>
                            <span>{caseItem.year}</span>
                          </>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-normal text-gray-900 mb-3 group-hover:text-gray-600 transition-colors" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                        {caseItem.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                        {caseItem.tags.map((tag) => (
                          <span key={tag} className="hover:text-gray-900 cursor-pointer transition-colors">
                            {tag}
                          </span>
                        ))}
                        <span className="ml-auto text-gray-700 font-medium">{caseItem.year}</span>
                      </div>
                    </>
                  )}
                </>
              );

              return caseItem.link ? (
                <Link
                  key={caseItem.id}
                  to={caseItem.link}
                  className={`group cursor-pointer h-full flex flex-col ${isLatestWork ? getLatestWorkGridClasses(index) : ""}`}
                >
                  {itemContent}
                </Link>
              ) : (
                <div
                  key={caseItem.id}
                  className={`group cursor-pointer h-full flex flex-col ${isLatestWork ? getLatestWorkGridClasses(index) : ""}`}
                >
                  {itemContent}
                </div>
              );
            })}
          </div>

          {/* Sticky right text - only for Latest Work */}
          {isLatestWork && (
            <div
              ref={stickyRightRef}
              className="hidden lg:block fixed right-12 z-10 opacity-0 transition-opacity duration-300 pointer-events-none"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <div className="text-sm font-normal text-gray-400 leading-loose tracking-widest uppercase text-right">
                {stickyWord?.split("").map((letter, i) => (
                  <div key={i} className="h-6">{letter}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
