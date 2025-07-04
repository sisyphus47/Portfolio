import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { Code, Server, Settings, Cloud } from "lucide-react";
import { LetterAnimation } from "./LetterAnimation";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code size={32} />,
      skills: [
        { name: "TypeScript", icon: <SiTypescript size={20} /> },
        { name: "React", icon: <SiReact size={20} /> },
        { name: "Redux", icon: <SiRedux size={20} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
      ],
    },
    {
      title: "Backend",
      icon: <Server size={32} />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs size={20} /> },
        { name: "Django", icon: <SiPython size={20} /> },
        { name: "PostgreSQL", icon: <SiPostgresql size={20} /> },
        { name: "MongoDB", icon: <SiMongodb size={20} /> },
      ],
    },
    {
      title: "Tools & Others",
      icon: <Settings size={32} />,
      skills: [
        { name: "Git & GitHub", icon: <SiGit size={20} /> },
        { name: "Docker", icon: <SiDocker size={20} /> },
        { name: "Kubernetes", icon: <SiKubernetes size={20} /> },
        { name: "AWS", icon: <Cloud size={20} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-code-tags">
      <div className="content-layer max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-balance text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white max-w-xs sm:max-w-md mx-auto">
  <LetterAnimation text="Skills & Technologies" />
</h2>

          <div className="w-24 h-1 bg-black dark:bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="skill-card bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center mb-6">
                <div className="text-black dark:text-white mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                  >
                    <div className="text-black dark:text-white">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-black dark:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
