import { motion } from "framer-motion";
import {
  FaCloud,
  FaCog,
  FaDatabase,
  FaGithub,
  FaLayerGroup,
  FaReact,
  FaToolbox,
} from "react-icons/fa";
import { SiGoland, SiJson, SiVisualstudiocode } from "react-icons/si";

const techStack = [
  {
    icon: <SiGoland />,
    title: "Programming Languages",
    details: "Golang, JavaScript, Typescript, Python, Dart, Cobol",
  },
  {
    icon: <FaToolbox />,
    title: "Framework",
    details: "Gin / Gorm, React, Flutter, Spring Boot",
  },
  { icon: <FaReact />, title: "Front-End", details: "React, Flutter" },
  {
    icon: <FaDatabase />,
    title: "Relational DB",
    details: "MySQL (or any DB of client choice)",
  },
  {
    icon: <FaGithub />,
    title: "Version Management",
    details: "GitHub/Gitlab Repository",
  },
  { icon: <SiJson />, title: "Data Exchange", details: "JSON, XML" },
  { icon: <SiVisualstudiocode />, title: "IDE", details: "Visual Studio" },
  { icon: <FaCloud />, title: "Cloud Capability", details: "Yes" },
  {
    icon: <FaLayerGroup />,
    title: "Software/Hardware",
    details: "Non licensed software and inexpensive hardware",
  },
  {
    icon: <FaCog />,
    title: "Customization",
    details: "System design based on client stipulations",
  },
];

const TechnicalStack = () => {
  return (
    <div
      className="bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-200 py-16 px-6 sm:px-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-700 dark:text-blue-300">
        Technical Stack for FuturaInsTech Solutions
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
      >
        {techStack.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
          >
            <div className="text-blue-600 dark:text-blue-400 text-4xl mr-6">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.details}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechnicalStack;
