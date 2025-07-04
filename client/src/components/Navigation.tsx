import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Github, Linkedin, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="font-mono font-bold text-xl">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              Portfolio
            </motion.span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Social Icons */}
            <motion.a
              href="https://github.com/sisyphus47"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sarim-a-2b487b200/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </motion.a>

            {/* Dark Mode Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-gray-300 dark:border-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
