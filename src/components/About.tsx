import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About: React.FC = () => {
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
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            A dedicated product management professional with a passion for
            creating user-centered solutions, Leveraged project management
            expertise to lead initiatives, including organizing high-impact
            events with 2,500+ attendees and securing ₦7 million in
            sponsorships.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-full h-96 bg-primary-100 rounded-lg relative z-10">
              <img
                src="/src/images/HEADSHOT.jpg"
                // src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Afis olamrewaju"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-48 h-48 bg-secondary-500 rounded-lg z-0"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-primary-500"
            >
              Professional Background
            </motion.h3>

            <motion.p variants={itemVariants} className="text-gray-700">
              I'm a strategic product manager with over with over two years of
              experience in the tech industry, delivering innovative,
              user-centric solutions and drivingmeasurable results. I specialize
              in leading cross-functional teams to build innovative products
              that solve real-world problems and deliver exceptional user
              experienes. Adept at aligning crossfunctional teams, managing
              timelines, and exceeding stakeholder expectations through a
              results-driven approach.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">
                Education & Certifications
              </h4>

              <div className="flex items-start space-x-3">
                <GraduationCap
                  className="text-primary-500 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h5 className="font-medium">Bsc, Aquaculture</h5>
                  <p className="text-sm text-gray-600">
                    Federal University of Agriculture Abeokuta, 2019-2024
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Award
                  className="text-primary-500 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h5 className="font-medium">
                    Project Management Professional (PMP)
                  </h5>
                  <p className="text-sm text-gray-600">Grazac Academy, 2024</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Award
                  className="text-primary-500 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h5 className="font-medium">Leadership Certification</h5>
                  <p className="text-sm text-gray-600">
                    Ibile Youth Academy, Lagos State Govt., <br />
                    Ministry Of Youth and Development, 2024.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Briefcase
                  className="text-primary-500 mt-1 flex-shrink-0"
                  size={20}
                />
                <div>
                  <h5 className="font-medium">Professional Experience</h5>
                  <p className="text-sm text-gray-600">
                    2+ years in product management and strategy
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <a href="#contact" className="btn btn-primary">
                Let's Connect
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
