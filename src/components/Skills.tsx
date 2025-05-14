import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Workflow,
  FileSpreadsheet,
  Presentation,
} from "lucide-react";

const Skills: React.FC = () => {
  const skills = [
    {
      name: "Product Strategy",
      icon: <Target className="text-primary-500" size={32} />,
      description: "Defining vision, roadmaps, and go-to-market strategies",
    },
    {
      name: "Agile Methodologies",
      icon: <Workflow className="text-primary-500" size={32} />,
      description: "Scrum, Kanban, and hybrid frameworks",
    },
    {
      name: "User Research",
      icon: <Users className="text-primary-500" size={32} />,
      description: "Understanding user needs through research and testing",
    },
    {
      name: "Data Analysis",
      icon: <BarChart3 className="text-primary-500" size={32} />,
      description: "Making data-driven decisions using metrics and KPIs",
    },
    {
      name: "Market Analysis",
      icon: <TrendingUp className="text-primary-500" size={32} />,
      description: "Competitor research and market opportunity assessment",
    },
    {
      name: "Product Innovation",
      icon: <Lightbulb className="text-primary-500" size={32} />,
      description: "Ideation and conceptualization of innovative solutions",
    },
    {
      name: "Stakeholder Management",
      icon: <Presentation className="text-primary-500" size={32} />,
      description: "Aligning diverse stakeholders and managing expectations",
    },
    {
      name: "Requirement Documentation",
      icon: <FileSpreadsheet className="text-primary-500" size={32} />,
      description: "Creating clear user stories, specs, and documentation",
    },
  ];

  const tools = [
    {
      name: "Jira",
      logo: "https://i.postimg.cc/Hk36mv6T/download-11.jpg",
    },
    {
      name: "Confluence",
      logo: "https://i.postimg.cc/DzjprpGx/download-10.jpg",
    },
    {
      name: "Figma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
      name: "Tableau",
      logo: "https://seeklogo.com/images/T/tableau-software-logo-F1CE2CA54A-seeklogo.com.png",
    },
    {
      name: "Trello",
      logo: "https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg",
    },
    {
      name: "Google Analytics",
      logo: "https://i.postimg.cc/63rbG69N/Logo-Google-Analytics-svg.png",
    },
    {
      name: "Miro",
      logo: "https://i.postimg.cc/76kTbws7/Miro-Symbol-1.png",
    },
    {
      name: "Notion",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    },
    {
      name: "Hotjar",
      logo: "https://i.postimg.cc/XYgvxdQZ/images-1.png",
    },
    {
      name: "Canva",
      logo: "https://static.canva.com/static/images/favicon.ico",
    },
    {
      name: "Mixpanel",
      logo: "https://i.postimg.cc/SNvdRYWM/download-9.jpg",
    },
    {
      name: "Slack",
      logo: "https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png",
    },

    {
      name: "Asana",
      logo: "https://d1gwm4cf8hecp4.cloudfront.net/images/favicons/apple-touch-icon.png",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const toolsContainerVariants = {
    animate: {
      x: [0, -1000], // Adjust -1920 to match the total width of the scrolling content
      transition: {
        x: {
          repeat: Infinity, // Infinite loop
          repeatType: "loop", // Seamless looping
          duration: 10, // Adjust duration for scroll speed
          ease: "linear", // Smooth linear animation
        },
      },
    },
  };
  return (
    <section id="skills" className="section bg-white">
      <div className="container-custom">
        <div className="section-heading">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Key Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Expertise that drives product success from ideation to launch and
            beyond
          </motion.p>
        </div>

        <motion.div
          variants={toolsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg p-6 shadow-card border border-gray-100"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 overflow-hidden"
        >
          {" "}
          <h3 className="text-2xl font-display font-semibold text-gray-800 mb-8 text-center">
            Tools & Technologies
          </h3>{" "}
          <div className="relative overflow-hidden">
            <motion.div
              variants={toolsContainerVariants}
              animate="animate"
              className="flex gap-8 items-center"
            >
              {[...tools, ...tools].map((tool, index) => (
                <motion.div
                  key={`${tool}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.8, delay: index * 0.1 }}
                  className="flex flex-col items-center flex-shrink-0"
                >
                  <div className="w-16 h-16 mb-3 flex items-center justify-center">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-700">{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
