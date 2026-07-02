import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const lowercaseQuery = query.toLowerCase();
    
    return projects.filter((project) => {
      const searchableText = `${project.name} ${project.location} ${project.category} ${project.description}`.toLowerCase();
      return searchableText.includes(lowercaseQuery);
    });
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query });
    }
  };

  const handleClearSearch = () => {
    setQuery("");
    setSearchParams({});
  };

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: "#f5f1e5" }}>
      <Header />

      {/* Search Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-normal text-gray-900 mb-8 text-center tracking-widest uppercase"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              letterSpacing: "8px",
            }}
          >
            Search Projects
          </h1>

          <form onSubmit={handleSearch} className="relative">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by project name, location, or category..."
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  autoFocus
                />
                {query && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium uppercase tracking-wide"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {query.trim() ? (
            <>
              <p className="text-lg text-gray-600 mb-12 text-center">
                {results.length === 0
                  ? `No projects found matching "${query}"`
                  : `Found ${results.length} project${results.length !== 1 ? "s" : ""} matching "${query}"`}
              </p>

              {results.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {results.map((project, index) => (
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
              )}
            </>
          ) : (
            <p className="text-lg text-gray-600 text-center">
              Enter a search query to find projects
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
