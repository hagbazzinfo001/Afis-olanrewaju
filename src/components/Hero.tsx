import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      // image: "https://i.postimg.cc/m2BTQmhm/PHOTO-2025-05-13-11-10-54.jpg",
      image: "/src/images/HEADSHOT.jpg",
      // "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Strategic Product Management",
      description: "Turning visions into successful products",
    },
    {
      image: "/src/images/PHOTO-2025-05-13-11-10-55.jpg",

      // "https://i.postimg.cc/m2BTQmhm/PHOTO-2025-05-13-11-10-54.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Agile Project Leadership",
      description: "Delivering value through adaptive methodologies",
    },
    {
      image: "/src/images/PHOTO-2025-05-13-11-16-58.jpg", // "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "User-Centered Solutions",
      description: "Creating experiences that users love",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{ zIndex: index === currentSlide ? 10 : 0 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative h-full flex items-center z-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white mb-8"
          >
            Hello, I'm <span className="font-bold">Abdulafis Olanrewaju </span>.
            A passionate Product Manager with 2+ years of experience{" "}
            {/* Accomplished product manager with over two years of experience
            delivering innovative, user-centric solutions and driving measurable
            results. Spearheaded the development of a student-focused e-commerce
            platform specializing in buying and selling, achieving significant
            market penetration. Leveraged project management expertise to lead
            initiatives, including organizing high-impact events with 2,500+
            attendees and securing ₦7 million in sponsorships. Adept at aligning
            cross functional teams, managing timelines, and exceeding stakeholder
            expectations through a results-driven approach. */}
            {slides[currentSlide].description.toLowerCase()}.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default Hero;
