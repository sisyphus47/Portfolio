import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { LetterAnimation } from "./LetterAnimation";
import image from "../assets/profile.jpeg";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-black bg-code-tags transition-colors duration-500"
    >
      <div className="content-layer max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            <LetterAnimation text="About Me" />
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Hello, I'm Sarim — a full-stack developer with a strong foundation
              in building scalable systems and intuitive user interfaces. I
              specialize in both backend and frontend development, working
              comfortably across the stack to design clean, efficient, and
              maintainable code. Whether it's developing robust APIs in Python
              or building responsive, pixel-perfect interfaces in React, I bring
              a thoughtful, detail-oriented approach to every project.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Always up for new and exciting work building something cool,
              squashing logic bugs, or having a philosophical debate about
              whether null is a valid value. If you're looking for a developer
              who combines technical depth with a commitment to craftsmanship,
              I’d love to connect.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-64 h-64 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-6xl text-gray-400 dark:text-gray-500 mb-6">
              <img
                src={image}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-lg text-black dark:text-white">
                Sarim Ansari
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Full Stack Developer
              </p>
              <p className="text-gray-500 dark:text-gray-500">Kolkata, India</p>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
              <LetterAnimation text="Education" />
            </h3>
            <div className="w-16 h-1 bg-black dark:bg-white mx-auto"></div>
          </div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white">
                    Bachelor of Computer Applications
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Kalinga Institute of Industrial Technology
                  </p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-500"></div>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Comprehensive computer science education covering algorithms,
                data structures, software engineering, and system design.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
