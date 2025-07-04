import { motion } from "framer-motion";
import { LetterAnimation } from "./LetterAnimation";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-code-tags pt-20">
      <div className="content-layer text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="animate-fade-in"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <LetterAnimation text="John Developer" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light"
          >
            Full Stack Developer & UI/UX Designer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Crafting beautiful and functional digital experiences with modern technologies. 
            Passionate about clean code, innovative solutions, and user-centered design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 border-2 border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
