import { useEffect, useRef } from "react";

interface FeatureBannerProps {
  title: string;
  description: string;
  image: string;
}

export default function FeatureBanner({ title, description, image }: FeatureBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;

      const rect = bannerRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementOffset = bannerRef.current.offsetTop;

      // Parallax effect
      const parallaxOffset = (scrolled - elementOffset) * 0.5;
      if (bannerRef.current) {
        bannerRef.current.style.backgroundPosition = `center ${-parallaxOffset}px`;
      }

      // Fade-in animation
      const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
      if (contentRef.current) {
        if (isInView) {
          const opacity = Math.min(1, (window.innerHeight - rect.top) / window.innerHeight);
          contentRef.current.style.opacity = opacity.toString();
          contentRef.current.style.transform = `translateY(${Math.max(0, 40 * (1 - opacity))}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative w-full"
      style={{
        height: "85vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center 0px",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex items-end justify-center pb-20 px-4 sm:px-6 lg:px-8 transition-all duration-500"
        style={{ opacity: 0 }}
      >
        <div className="text-center max-w-3xl">
          <h2
            className="text-4xl md:text-5xl font-normal text-white mb-8 tracking-widest uppercase"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              letterSpacing: "8px",
              fontSize: "28px",
            }}
          >
            {title}
          </h2>
          <p
            className="text-white text-lg leading-relaxed font-light max-w-2xl mx-auto"
            style={{
              fontFamily: "Rajdhani, sans-serif",
              lineHeight: "1.8",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
