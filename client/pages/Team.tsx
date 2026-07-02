import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { teamMembers } from "@/data/team";

const years = [1959, 1990, 2021, 2021, 2024];

export default function Team() {
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
            Team
          </h1>
          <p
            className="text-lg text-gray-700 leading-relaxed"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              lineHeight: "1.8",
            }}
          >
            Meet the talented architects and designers behind Gautam & Associates.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative w-full" style={{ minHeight: "550px" }}>
            {/* Horizontal Center Line */}
            <div
              className="absolute left-0 w-full h-0.5 bg-black"
              style={{ top: "50%" }}
            ></div>

            {/* Grid Container */}
            <div className="relative grid grid-cols-5 gap-0 w-full h-full">
              {teamMembers.map((member, index) => {
                const isTop = index % 2 === 0;
                return (
                  <div key={member.id} className="relative flex flex-col items-center">
                    {/* Vertical Connector */}
                    <div
                      className="absolute w-0.5 bg-black"
                      style={{
                        left: "50%",
                        transform: "translateX(-50%)",
                        top: isTop ? "50%" : "auto",
                        bottom: isTop ? "auto" : "50%",
                        height: "40px",
                      }}
                    ></div>

                    {/* Content Card */}
                    <div
                      className={`flex flex-col items-center w-56 member-${member.id} ${
                        isTop ? "justify-end" : "justify-start"
                      }`}
                      style={{
                        paddingTop: isTop ? "0" : "220px",
                        paddingBottom: isTop ? "220px" : "0",
                      }}
                    >
                      <Link
                        to={`/team/${member.id}`}
                        className="group cursor-pointer text-center"
                      >
                        <div
                          style={{
                            fontFamily: "Rajdhani, sans-serif",
                          }}
                        >
                          <h3 className="text-base font-bold text-gray-900 mb-0.5 tracking-wide">
                            {member.name}
                          </h3>
                          <h5 className="text-sm font-bold text-gray-700 mb-2 tracking-wide">
                            {member.role}
                          </h5>
                          <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                            {member.education}
                          </p>
                          <div className="w-64 h-40 mx-auto overflow-hidden bg-gray-100">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Years - Bottom Row */}
            <div className="absolute bottom-0 left-0 w-full grid grid-cols-5 gap-0">
              {years.map((year, index) => (
                <div
                  key={index}
                  className="flex justify-center"
                >
                  <span
                    className={`text-5xl md:text-6xl font-bold text-gray-900 leading-none year-${year} year-index-${index}`}
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                    }}
                  >
                    {year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View - Stacked Card Layout */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Link
                key={member.id}
                to={`/team/${member.id}`}
                className="group cursor-pointer"
              >
                <div
                  className={`bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 member-${member.id}`}
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 tracking-wide">
                        {member.name}
                      </h3>
                      <h5 className="text-sm font-bold text-gray-700 tracking-wide">
                        {member.role}
                      </h5>
                    </div>
                    <span className={`text-3xl font-bold text-gray-300 year-${years[index]} year-index-${index}`}>
                      {years[index]}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
                  />
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
