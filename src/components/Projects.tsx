import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  // ChevronDown,
  // ExternalLink,
  Clock,
  Users,
  X,
  Target,
} from "lucide-react";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Marketplace Afrika",
      client: "Multi-platform e-commerce solution",
      image: "/images/afrikka.jpg",
      shortDesc:
        "An e-commerce platform available on both web and mobile, designed for buying and selling. It features catalog management, payment processing, and financing options, along with housing opportunities tailored for students. Focused on streamlining transactions, Marketplace Afrika empowers users with an easy-to-use interface for seamless engagement in the digital marketplace.",
      // "Led the redesign of a legacy CRM system serving 5000+ users across 30 countries.",
      objectives: [
        "Modernize legacy CRM interface to improve user productivity",
        "Reduce training time for new employees by 40%",
        "Implement mobile-responsive design for field workers",
        "Integrate with 5 existing enterprise systems",
      ],
      challenges: [
        "Complex legacy architecture requiring careful migration",
        "Need to maintain operation during phased rollout",
        "Integration with varied regional workflows and requirements",
      ],
      role: "  Product Manager",
      contributions: [
        "Led cross-functional team of 15 members across 3 time zones",
        "Created comprehensive product roadmap and strategy",
        "Conducted extensive user research with over 100 stakeholders",
        "Prioritized features based on business impact and development effort",
      ],
      tools: ["JIRA", "Notion", "Trello", "Google Analytics", "UserTesting"],
      outcome:
        "Increased user productivity by 32%, reduced training time by 52%, and improved customer satisfaction scores by 27%.",
    },
    {
      id: 2,
      title: "InvoiceU ",
      client: "Web-Based Invoicing Platform",
      image:
        "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      shortDesc:
        "A comprehensive online invoicing solution streamlining financial management for businesses. It featurescustomizable templates, client and project management. Currently under development, targeting a web platform only.",
      objectives: [
        "Increase conversion rate by 15%",
        "Reduce cart abandonment by 20%",
        "Improve mobile shopping experience",
        "Implement personalized recommendation engine",
      ],
      challenges: [
        "High customer expectations for premium brand experience",
        "Complex inventory management across multiple warehouses",
        "Seasonal variations in traffic and purchasing patterns",
      ],
      role: "Product Manager",
      contributions: [
        "Led A/B testing strategy across 12 key customer journey touchpoints",
        "Collaborated with UX team to reimagine checkout flow",
        "Defined KPIs and analytics framework for measuring success",
        "Managed implementation of AI-powered recommendation engine",
      ],
      tools: ["jira", "Notion", "Tableau", "Pendo", "InVision"],
      outcome:
        "Increased conversion rate by 23%, reduced cart abandonment by 34%, and grew average order value by 18%.",
    },
    // {
    //   id: 3,
    //   title: "E-commerce Platform Optimization",
    //   client: "Retail Fashion Brand",
    //   image:
    //     "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   shortDesc:
    //     "Optimized user experience and conversion rates for a premium fashion e-commerce platform.",
    //   objectives: [
    //     "Increase conversion rate by 15%",
    //     "Reduce cart abandonment by 20%",
    //     "Improve mobile shopping experience",
    //     "Implement personalized recommendation engine",
    //   ],
    //   challenges: [
    //     "High customer expectations for premium brand experience",
    //     "Complex inventory management across multiple warehouses",
    //     "Seasonal variations in traffic and purchasing patterns",
    //   ],
    //   role: "Product Manager",
    //   contributions: [
    //     "Led A/B testing strategy across 12 key customer journey touchpoints",
    //     "Collaborated with UX team to reimagine checkout flow",
    //     "Defined KPIs and analytics framework for measuring success",
    //     "Managed implementation of AI-powered recommendation engine",
    //   ],
    //   tools: [
    //     "Google Analytics",
    //     "Hotjar",
    //     "Optimizely",
    //     "Amplitude",
    //     "Mixpanel",
    //   ],
    //   outcome:
    //     "Increased conversion rate by 23%, reduced cart abandonment by 34%, and grew average order value by 18%.",
    // },
  ];

  const openProjectModal = (projectId: number) => {
    setSelectedProject(projectId);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
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
    <section id="projects" className="section bg-gray-50">
      <div className="container-custom">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Highlighting key products and solutions I've developed and managed
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 space-y-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-card overflow-hidden cursor-pointer"
              onClick={() => openProjectModal(project.id)}
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1">
                  <div className="h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-500 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {project.client}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{project.shortDesc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-primary-50 text-primary-700 text-xs font-medium px-2.5 py-1 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={closeProjectModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {projects.map(
                  (project) =>
                    project.id === selectedProject && (
                      <div key={project.id} className="relative">
                        <button
                          onClick={closeProjectModal}
                          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                        >
                          <X size={24} />
                        </button>

                        <div className="h-64 relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <h2 className="text-3xl font-bold text-white">
                              {project.title}
                            </h2>
                          </div>
                        </div>

                        <div className="p-8">
                          <h3 className="text-2xl font-bold text-primary-500 mb-2">
                            {project.client}
                          </h3>
                          <p className="text-gray-700 mb-6">
                            {project.shortDesc}
                          </p>

                          <div className="space-y-8">
                            <div>
                              <h4 className="text-xl font-semibold mb-4 flex items-center">
                                <Target className="mr-2 text-secondary-500" />
                                Objectives & Challenges
                              </h4>
                              <div className="space-y-4">
                                <div>
                                  <h5 className="font-medium mb-2">
                                    Objectives:
                                  </h5>
                                  <ul className="list-disc pl-5 space-y-2">
                                    {project.objectives.map(
                                      (objective, index) => (
                                        <li key={index}>{objective}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-medium mb-2">
                                    Challenges:
                                  </h5>
                                  <ul className="list-disc pl-5 space-y-2">
                                    {project.challenges.map(
                                      (challenge, index) => (
                                        <li key={index}>{challenge}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="text-xl font-semibold mb-4 flex items-center">
                                <Users className="mr-2 text-secondary-500" />
                                Role & Contributions
                              </h4>
                              <p className="mb-2">
                                <span className="font-medium">Role:</span>{" "}
                                {project.role}
                              </p>
                              <ul className="list-disc pl-5 space-y-2">
                                {project.contributions.map(
                                  (contribution, index) => (
                                    <li key={index}>{contribution}</li>
                                  )
                                )}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-xl font-semibold mb-4 flex items-center">
                                <Clock className="mr-2 text-secondary-500" />
                                Outcome
                              </h4>
                              <p>{project.outcome}</p>
                            </div>

                            <div className="pt-4 border-t">
                              <h4 className="font-medium mb-2">Tools Used:</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool, index) => (
                                  <span
                                    key={index}
                                    className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
