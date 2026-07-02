import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomepage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const menuItems = [
    {
      label: "Studio",
      href: "#",
      submenu: [
        { label: "About", href: "/about" },
        { label: "Team", href: "/team" },
      ],
    },
    {
      label: "Architecture",
      href: "/architecture",
    },
    {
      label: "Join us",
      href: "/join-us",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${!isHomepage ? "border-b border-gray-200" : ""}`}
      style={{ backgroundColor: isHomepage && !scrolled ? "transparent" : (!isHomepage ? "#f5f1e5" : "white") }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <img
              src="/gautam-logo.png"
              alt="Gautam & Associates"
              className="h-8 w-8"
            />
            <span className={`text-lg font-bold tracking-tight transition-colors whitespace-nowrap ${
              isHomepage && !scrolled ? "text-white drop-shadow-lg" : "text-gray-900"
            }`} style={{ letterSpacing: "2px", fontSize: "13px" }}>
              GAUTAM & ASSOCIATES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.href !== "#" ? (
                  <Link
                    to={item.href}
                    onClick={scrollToTop}
                    className={`px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wide ${
                      isHomepage && !scrolled
                        ? "text-white hover:text-gray-200 drop-shadow"
                        : "text-gray-900 hover:text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wide ${
                      isHomepage && !scrolled
                        ? "text-white hover:text-gray-200 drop-shadow"
                        : "text-gray-900 hover:text-gray-700"
                    }`}
                  >
                    {item.label}
                  </a>
                )}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-lg overflow-hidden">
                    {item.submenu.map((sub, idx) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        onClick={scrollToTop}
                        className={`block px-6 py-4 text-sm text-gray-900 transition-all duration-200 uppercase tracking-wider font-medium hover:bg-gray-50 ${
                          idx === 0 ? "border-b border-gray-100" : ""
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Search + Mobile menu toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2 rounded-lg transition-colors ${
              isHomepage && !scrolled
                ? "hover:bg-white/10 text-white"
                : "hover:bg-gray-200 text-gray-900"
            }`}>
              <Search size={20} className={isHomepage && !scrolled ? "drop-shadow" : "drop-shadow-none"} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isHomepage && !scrolled
                  ? "hover:bg-white/10 text-white"
                  : "hover:bg-gray-200 text-gray-900"
              }`}
            >
              {mobileMenuOpen ? (
                <X size={24} className={isHomepage && !scrolled ? "drop-shadow" : "drop-shadow-none"} />
              ) : (
                <Menu size={24} className={isHomepage && !scrolled ? "drop-shadow" : "drop-shadow-none"} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-white/20 bg-black/40 backdrop-blur-sm">
            {menuItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setActiveSubmenu(
                      activeSubmenu === item.label ? null : item.label
                    )
                  }
                  className="w-full text-left px-3 py-3 text-sm font-medium text-white hover:bg-white/10 flex justify-between items-center uppercase tracking-wide"
                >
                  {item.label}
                  {item.submenu && (
                    <span
                      className={`transform transition-transform ${
                        activeSubmenu === item.label ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  )}
                </button>
                {item.submenu && activeSubmenu === item.label && (
                  <div className="bg-white/5">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          scrollToTop();
                        }}
                        className="block px-6 py-2 text-sm text-white/80 hover:text-white uppercase tracking-wide"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4">
            <form onSubmit={handleSearch} className="flex items-center gap-4 p-6 border-b border-gray-200">
              <Search size={24} className="text-gray-400" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name, location, or category..."
                className="flex-1 outline-none text-lg"
              />
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </form>
            <div className="p-6">
              <p className="text-sm text-gray-600">
                Press Enter to search or browse all projects in our Architecture section
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
