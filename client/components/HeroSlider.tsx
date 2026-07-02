import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Slide {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

const slides: Slide[] = [
  {
    subtitle: "VISION. FUNCTION. PURPOSE",
    title: "Architecture that inspires and endures.",
    description: "We design timeless spaces that elevate everyday living and create lasting impact",
    buttonText: "EXPLORE OUR WORK",
    image: "https://cdn.builder.io/api/v1/image/assets%2Ffb7858a3f7514760924dec2e13feb302%2Fadff62e4b03a41cf8423108f407ff64c?format=webp&width=1200&height=800",
  },
  {
    subtitle: "EXCELLENCE. DESIGN. EXECUTION",
    title: "Creating functional masterpieces.",
    description: "Excellence in architectural design and thoughtful execution across all project types",
    buttonText: "VIEW PROJECTS",
    image: "https://cdn.builder.io/api/v1/image/assets%2Ffb7858a3f7514760924dec2e13feb302%2F94ac29c8a04f49628be63196b0321f4f?format=webp&width=1200&height=800",
  },
  {
    subtitle: "INNOVATION. TRANSFORMATION. DESIGN",
    title: "Spaces that inspire transformation.",
    description: "Transforming spaces with vision and precision to create environments that elevate human experience",
    buttonText: "DISCOVER MORE",
    image: "https://cdn.builder.io/api/v1/image/assets%2Ffb7858a3f7514760924dec2e13feb302%2F903e6e6219b74edd85a8449d60d4fa0e?format=webp&width=1200&height=800",
  },
  {
    subtitle: "MODERN. SUSTAINABLE. TIMELESS",
    title: "Building the future today.",
    description: "Innovative architecture for modern living with sustainable practices and timeless design principles",
    buttonText: "START A PROJECT",
    image: "https://cdn.builder.io/api/v1/image/assets%2Ffb7858a3f7514760924dec2e13feb302%2F494c069245b743b1a42bd24952b5eaf9?format=webp&width=1200&height=800",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  const scrollToLatestWork = () => {
    const latestWorkSection = document.getElementById("latest-work");
    if (latestWorkSection) {
      latestWorkSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Preload all images
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        setLoadedImages((prev) => new Set(prev).add(slide.image));
      };
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30 z-10" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-6 md:px-12 lg:px-20">
        {/* Subtitle */}
        <p className="text-xs md:text-sm text-gray-300 mb-6 transition-all duration-1000 uppercase tracking-widest font-light" style={{ letterSpacing: "3px" }}>
          {slides[currentSlide].subtitle}
        </p>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-8 transition-all duration-1000 max-w-2xl leading-tight" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          {slides[currentSlide].title}
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-200 max-w-xl font-light leading-relaxed mb-10 transition-all duration-1000" style={{ lineHeight: "1.8" }}>
          {slides[currentSlide].description}
        </p>

        {/* Button */}
        <button
          onClick={scrollToLatestWork}
          className="px-8 py-3 border-2 border-white text-white uppercase tracking-widest font-medium text-sm hover:bg-white hover:text-gray-900 transition-all duration-300"
          style={{ fontFamily: "Rajdhani, sans-serif", letterSpacing: "2px" }}
        >
          {slides[currentSlide].buttonText}
        </button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToLatestWork}
        className="absolute bottom-12 left-6 md:left-12 z-30 flex flex-col items-center gap-3 hover:opacity-100 transition-opacity duration-300"
      >
        <p className="text-xs text-white/70 uppercase tracking-widest hover:text-white transition-colors">SCROLL</p>
        <svg className="w-5 h-5 text-white/70 animate-bounce hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-12 right-6 md:right-12 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? "bg-white w-8 h-2"
                : "bg-white/40 w-2 h-2 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
