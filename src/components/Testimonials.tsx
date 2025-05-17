import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: `Abdulafis is a very dedicated and passionate person towards work. As our product manager he made sure to keep tabs and due diligence on every aspect of the project. His attitude and positivity towards work kept the team spirit together for us to keep pushing.
Abdulafis is a very outspoken and an outstanding individual since I have known him and I can trust that he'll pull off bigger projects and tasks in the near future.`,
      author: "Taiwo Ghazal",
      position: "Backend Developer, MarketPlace Afrika",
      image: "/images/gazal.jpg",
    },
    {
      quote: `I have worked with Abdulafis's on several projects and have consistently been impressed by his ability to connect with people and adapt quickly. His proactive attitude and commitment to excellence make him a reliable team player.Abdulafis's transition into product and project management reflects his growth, creativity, and ambition. He is a fast learner who brings value to every role, and I highly recommend him for opportunities in this space.`,
      author: "Fadlullahi Olamilekan",
      position: "Partnership & Marketing Lead, WASSET",
      image: "/images/fadullah.jpg",
    },
    {
      quote: `I had the pleasure of working with Abdul Afis, and I must say he is an exceptional professional. He brings a rare blend of creativity, commitment, and attention to detail to every task. His ability to take initiative and deliver quality results, often ahead of schedule, sets him apart.
Abdul is not only skilled but also very collaborative and respectful in his communication. He’s someone you can count on to add value to any team or project he’s part of. I look forward to seeing all the amazing things he continues to achieve.`,
      author: "Bakare Mariam Oyinade",
      position: "Digital Marketing Associate, Focal Imprintx Media",
      image: "/images/Mariam.jpg",
    },
    {
      quote:
        "Abdulafis's strategic approach to product management transformed our outdated CRM into a powerful tool that our teams actually enjoy using. The thorough research and planning phases ensured we delivered exactly what our users needed.",
      author: "owolabi Agbabiaka",
      position: "Software Engineer",
      image: "https://i.postimg.cc/yxwg4krP/IMG-0667-removebg.png",
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
