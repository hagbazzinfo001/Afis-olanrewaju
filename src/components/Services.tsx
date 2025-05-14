import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BarChart3, 
  Users, 
  Presentation, 
  Lightbulb, 
  Target, 
  Layers, 
  Briefcase 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Layers size={32} className="text-white" />,
      title: 'Product Strategy',
      description: 'Crafting comprehensive product visions, roadmaps, and go-to-market strategies aligned with business goals.',
      color: 'bg-primary-500'
    },
    {
      icon: <Briefcase size={32} className="text-white" />,
      title: 'Project Planning & Scheduling',
      description: 'Creating detailed plans, timelines, and resource allocations to ensure on-time, on-budget delivery.',
      color: 'bg-primary-600'
    },
    {
      icon: <Users size={32} className="text-white" />,
      title: 'Agile Coaching',
      description: 'Implementing and optimizing agile methodologies to improve team efficiency and product quality.',
      color: 'bg-secondary-500'
    },
    {
      icon: <FileText size={32} className="text-white" />,
      title: 'Requirements Gathering',
      description: 'Translating business needs into clear user stories, technical requirements, and acceptance criteria.',
      color: 'bg-secondary-600'
    },
    {
      icon: <Lightbulb size={32} className="text-white" />,
      title: 'Product Innovation',
      description: 'Facilitating ideation workshops and developing innovative solutions to complex business problems.',
      color: 'bg-accent-500'
    },
    {
      icon: <BarChart3 size={32} className="text-white" />,
      title: 'Data Analysis & Metrics',
      description: 'Establishing KPIs and analyzing product data to drive continuous improvement and decision-making.',
      color: 'bg-accent-600'
    },
    {
      icon: <Target size={32} className="text-white" />,
      title: 'Product Launches',
      description: 'Coordinating cross-functional efforts to ensure successful product launches and market adoption.',
      color: 'bg-primary-500'
    },
    {
      icon: <Presentation size={32} className="text-white" />,
      title: 'Stakeholder Management',
      description: 'Aligning diverse stakeholders through effective communication, presentations, and expectation management.',
      color: 'bg-secondary-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        <div className="section-heading">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Expert product management services to help your business succeed
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg shadow-card overflow-hidden h-full"
            >
              <div className={`${service.color} p-6 flex justify-center`}>
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn btn-primary">
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;