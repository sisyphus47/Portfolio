import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { LetterAnimation } from "./LetterAnimation";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce MERN",
      description:
        "Rabbit is a full-stack e-commerce platform built with the MERN stack, offering a seamless online shopping experience. It features a modern, responsive frontend, a robust backend API, PayPal payment integration, and secure authentication.",
      technologies: [
        "React.js",
        "Redux",
        "JSON Web Tokens",
        "MongoDB",
        "Node.js",
        "PayPal",
      ],
      githubUrl: "https://github.com/sisyphus47/E-commerce-MERN",
      liveUrl: "https://e-commerce-mern-llbz.vercel.app/",
    },
    {
      title: "Django Shopping App",
      description:
        "A fully functional e-commerce web application built with Django and Tailwind CSS, deployed live on Railway.",
      technologies: ["Django", "Tailwind CSS", "PostgreSQL"],
      githubUrl: "https://github.com/sisyphus47/Django-project",
      liveUrl: "https://django-project-production-896c.up.railway.app/",
    },
    {
      title: "Semantic Book Recommender",
      description:
        "A semantic book recommendation system that uses transformer-based embeddings, zero-shot classification, and vector search to recommend books based on user input. Built with LangChain, Transformers, and a user-friendly interface powered by Gradio.",
      technologies: [
        "Python",
        "LangChain",
        "Transformers",
        "Gradio",
        "ChromaDB",
        "PyTorch",
      ],
      githubUrl: "https://github.com/sisyphus47/Book-recommender-llm",
      liveUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-black bg-code-tags transition-colors duration-500"
    >
      <div className="content-layer max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            <LetterAnimation text="Featured Projects" />
          </h2>
          <div className="w-24 h-1 bg-black dark:bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="project-card bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-black dark:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex items-center space-x-2"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex items-center space-x-2"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
