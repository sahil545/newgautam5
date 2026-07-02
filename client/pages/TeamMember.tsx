import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { teamMembers } from "@/data/team";

export default function TeamMember() {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="w-full min-h-screen" style={{ backgroundColor: "#f5f1e5" }}>
        <Header />
        <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-normal text-gray-900 mb-4">Team Member Not Found</h1>
            <Link to="/team" className="text-blue-600 hover:text-blue-800">
              Back to Team
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: "#f5f1e5" }}>
      <Header />

      {/* Back Button */}
      <button
        onClick={() => navigate("/team")}
        className="fixed left-6 top-28 z-40 flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors"
      >
        <ChevronLeft size={20} />
        <span className="text-sm uppercase tracking-wider">Back</span>
      </button>

      {/* Profile Content */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Image */}
            <div className="md:col-span-1">
              <div className="sticky top-32">
                <div className="bg-gray-200 rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2">
              <div className="mb-12">
                <h1
                  className="text-3xl md:text-4xl font-normal text-gray-900 mb-2 tracking-widest uppercase"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    letterSpacing: "6px",
                  }}
                >
                  {member.name}
                </h1>
                <p
                  className="text-lg text-gray-600 uppercase tracking-wider"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    letterSpacing: "3px",
                  }}
                >
                  {member.role}
                </p>
              </div>

              {/* Bio */}
              <div className="mb-12">
                <p
                  className="text-base text-gray-700 leading-relaxed"
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    lineHeight: "1.8",
                  }}
                >
                  {member.bio}
                </p>
              </div>

              {/* Education */}
              {member.education && (
                <div className="mb-12">
                  <h2
                    className="text-xl font-normal text-gray-900 mb-4 uppercase tracking-wider"
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      letterSpacing: "4px",
                    }}
                  >
                    Education
                  </h2>
                  <p
                    className="text-base text-gray-700 leading-relaxed"
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      lineHeight: "1.8",
                    }}
                  >
                    {member.education}
                  </p>
                </div>
              )}

              {/* Experience */}
              {member.experience && member.experience.length > 0 && (
                <div className="mb-12">
                  <h2
                    className="text-xl font-normal text-gray-900 mb-6 uppercase tracking-wider"
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      letterSpacing: "4px",
                    }}
                  >
                    Experience & Expertise
                  </h2>
                  <ul className="space-y-4">
                    {member.experience.map((exp, idx) => (
                      <li
                        key={idx}
                        className="flex gap-4"
                      >
                        <span className="text-gray-900 mt-1">•</span>
                        <p
                          className="text-base text-gray-700 leading-relaxed"
                          style={{
                            fontFamily: "Rajdhani, sans-serif",
                            lineHeight: "1.8",
                          }}
                        >
                          {exp}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Achievements */}
              {member.achievements && member.achievements.length > 0 && (
                <div>
                  <h2
                    className="text-xl font-normal text-gray-900 mb-6 uppercase tracking-wider"
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      letterSpacing: "4px",
                    }}
                  >
                    Achievements
                  </h2>
                  <ul className="space-y-4">
                    {member.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex gap-4"
                      >
                        <span className="text-gray-900 mt-1">•</span>
                        <p
                          className="text-base text-gray-700 leading-relaxed"
                          style={{
                            fontFamily: "Rajdhani, sans-serif",
                            lineHeight: "1.8",
                          }}
                        >
                          {achievement}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/team" className="text-gray-600 hover:text-gray-900 transition-colors uppercase text-sm tracking-wider">
              ← All Members
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors uppercase text-sm tracking-wider">
              About Studio →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
