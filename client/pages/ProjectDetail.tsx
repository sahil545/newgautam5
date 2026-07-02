import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.galleryImages.length);
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length);
    }
  };

  if (!project) {
    return (
      <div className="w-full min-h-screen" style={{ backgroundColor: "#f5f1e5" }}>
        <Header />
        <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-normal text-gray-900 mb-4">Project Not Found</h1>
            <Link to="/architecture" className="text-gray-600 hover:text-gray-900 transition-colors uppercase text-sm tracking-wider">
              Back to Projects
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
        onClick={() => navigate("/architecture")}
        className="fixed left-6 top-28 z-40 flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-colors"
      >
        <ChevronLeft size={20} />
        <span className="text-sm uppercase tracking-wider">Back</span>
      </button>

      {/* Hero Section - Project Title and Main Image */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-normal text-gray-900 mb-6 tracking-widest"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              letterSpacing: "2px",
            }}
          >
            {project.name}
          </h1>
          <p
            className="text-lg text-gray-600 mb-12 uppercase tracking-wider"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              letterSpacing: "1px",
            }}
          >
            {project.location}
          </p>

          {/* Main Image */}
          <div className="w-full h-96 md:h-[500px] overflow-hidden rounded-lg mb-12">
            <img
              src={project.thumbnailImage}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <p
                className="text-xs text-gray-600 uppercase tracking-widest mb-2"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  letterSpacing: "2px",
                }}
              >
                Category
              </p>
              <p
                className="text-lg text-gray-900 font-normal"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                }}
              >
                {project.category}
              </p>
            </div>
            <div>
              <p
                className="text-xs text-gray-600 uppercase tracking-widest mb-2"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  letterSpacing: "2px",
                }}
              >
                Plot Size
              </p>
              <p
                className="text-lg text-gray-900 font-normal"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                }}
              >
                {project.plotSize}
              </p>
            </div>
            <div>
              <p
                className="text-xs text-gray-600 uppercase tracking-widest mb-2"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  letterSpacing: "2px",
                }}
              >
                Built-up Area
              </p>
              <p
                className="text-lg text-gray-900 font-normal"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                }}
              >
                {project.builtUpArea}
              </p>
            </div>
            <div>
              <p
                className="text-xs text-gray-600 uppercase tracking-widest mb-2"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  letterSpacing: "2px",
                }}
              >
                Year
              </p>
              <p
                className="text-lg text-gray-900 font-normal"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                }}
              >
                {project.year}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Project Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-normal text-gray-900 mb-8 uppercase tracking-wider"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              letterSpacing: "4px",
            }}
          >
            About the Project
          </h2>
          <p
            className="text-base text-gray-700 leading-relaxed"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              lineHeight: "1.8",
            }}
          >
            {project.aboutProject}
          </p>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-normal text-gray-900 mb-12 uppercase tracking-wider"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              letterSpacing: "4px",
            }}
          >
            Project Gallery
          </h2>

          {/* Masonry Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.galleryImages.map((image, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-lg cursor-pointer group ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                } ${index === project.galleryImages.length - 1 && project.galleryImages.length % 3 === 1 ? "lg:col-span-2" : ""}`}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`${project.name} - Image ${index + 1}`}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                    index === 0 ? "h-96 md:h-[500px]" : "h-64"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <X size={32} />
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={project.galleryImages[currentImageIndex]}
              alt={`${project.name} - Image ${currentImageIndex + 1}`}
              className="max-w-5xl max-h-[70vh] object-contain"
            />

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft size={48} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight size={48} />
            </button>
          </div>

          {/* Thumbnails at Bottom */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto pb-2">
            {project.galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentImageIndex ? "border-white" : "border-gray-600 opacity-60 hover:opacity-100"
                }`}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 border-t border-gray-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link
            to="/architecture"
            className="text-gray-600 hover:text-gray-900 transition-colors uppercase text-sm tracking-wider"
            style={{
              fontFamily: "Rajdhani, sans-serif",
            }}
          >
            ← All Projects
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-gray-900 transition-colors uppercase text-sm tracking-wider"
            style={{
              fontFamily: "Rajdhani, sans-serif",
            }}
          >
            Get in Touch →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
