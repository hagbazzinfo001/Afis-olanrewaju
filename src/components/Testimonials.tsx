import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Abdulafis's strategic approach to product management transformed our outdated CRM into a powerful tool that our teams actually enjoy using. The thorough research and planning phases ensured we delivered exactly what our users needed.",
      author: "owolabi Agbabiaka",
      position: "Software Engineer",
      image: "https://i.postimg.cc/yxwg4krP/IMG-0667-removebg.png",
    },
    {
      quote:
        "Working with Alex on our healthcare portal was a game-changer. Their ability to balance technical requirements with user needs while navigating complex regulatory requirements was impressive. The result speaks for itself with our record-high user adoption rates.",
      author: "Dr. Michael Chen",
      position: "Chief Digital Officer, National Hospital Network",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      quote:
        "Alex has a rare talent for simplifying complex problems. Their leadership on our e-commerce platform optimization delivered incredible results - conversion rates up 23% and cart abandonment down 34%. They consistently exceed expectations.",
      author: "Rebecca Torres",
      position: "Director of Digital, Retail Fashion Brand",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section bg-primary-500 text-white">
      <div className="container-custom">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title text-white"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary-100"
          >
            What clients and colleagues say about my work
          </motion.p>
        </div>

        <div className="relative mt-12 max-w-4xl mx-auto px-8">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="overflow-hidden relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mx-auto w-20 h-20 mb-8 relative">
                <Quote
                  size={40}
                  className="text-secondary-300 absolute -top-4 -left-4"
                />
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                />
              </div>

              <p className="text-lg md:text-xl italic mb-6">
                "{testimonials[currentIndex].quote}"
              </p>

              <div>
                <h4 className="font-bold text-xl">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-primary-200">
                  {testimonials[currentIndex].position}
                </p>
              </div>

              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-white scale-125"
                        : "bg-white bg-opacity-50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.linkedin.com/in/abdulafis-olanrewaju-24045521a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white text-primary-500 hover:bg-primary-50"
          >
            View More on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
