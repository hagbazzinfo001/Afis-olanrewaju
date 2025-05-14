import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Send,
  Linkedin,
  Calendar,
  X,
  Check,
  Twitter,
  Instagram,
} from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      const docRef = await addDoc(collection(db, "contacts"), {
        ...data,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      setShowModal(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      // Add user feedback
      alert(
        `Submission failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Interested in working together? Fill out the form below or connect
            with me directly
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-card p-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-primary-500 mb-6"
            >
              Send a Message
            </motion.h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full rounded-md border ${
                    errors.name ? "border-error-500" : "border-gray-300"
                  } 
                  shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="mt-1 text-error-500 text-xs">
                    {errors.name.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full rounded-md border ${
                    errors.email ? "border-error-500" : "border-gray-300"
                  } 
                  shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-error-500 text-xs">
                    {errors.email.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className={`w-full rounded-md border ${
                    errors.subject ? "border-error-500" : "border-gray-300"
                  } 
                  shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <p className="mt-1 text-error-500 text-xs">
                    {errors.subject.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full rounded-md border ${
                    errors.message ? "border-error-500" : "border-gray-300"
                  } 
                  shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="mt-1 text-error-500 text-xs">
                    {errors.message.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} className="ml-2" />
                </button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-primary-500 mb-6">
                Connect
              </h3>
              <p className="text-gray-700 mb-6">
                I'm always open to discussing new product management projects,
                opportunities, or challenges. Let's connect and explore how we
                can work together.
              </p>

              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/abdulafis-olanrewaju-24045521a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-800 hover:text-primary-500 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mr-4">
                    <Linkedin size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <p className="text-sm text-gray-600">
                      Let's connect professionally
                    </p>
                  </div>
                </a>

                <a
                  href="https://x.com/shark_abdul?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-800 hover:text-primary-500 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mr-4">
                    <Twitter size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Twitter</h4>
                    <p className="text-sm text-gray-600">
                      Follow me for updates
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/shark_abdul?igsh=MWtxNGsybGFzazg3YQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-800 hover:text-primary-500 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mr-4">
                    <Instagram size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold"> Instagram</h4>
                    <p className="text-sm text-gray-600">
                      {" "}
                      Follow me for updates
                    </p>
                  </div>
                </a>

                <a
                  href="https://calendly.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-800 hover:text-primary-500 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mr-4">
                    <Calendar size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Calendly</h4>
                    <p className="text-sm text-gray-600">
                      Schedule a call with me
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-primary-600 rounded-lg p-8 text-white mt-auto"
            >
              <h4 className="text-xl font-semibold mb-4">Resume</h4>
              <p className="mb-6">
                Download my resume to learn more about my education, work
                history, and professional qualifications.
              </p>
              <a
                href="/ABDULAFIS O. RESUME.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                         text-base font-medium rounded-md bg-white text-primary-600 hover:bg-gray-100
                         transition-colors duration-200"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden"
            >
              <div className="bg-primary-500 p-6 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Check size={32} className="text-success-500" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible!
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="btn btn-primary w-full"
                >
                  Close
                </button>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
