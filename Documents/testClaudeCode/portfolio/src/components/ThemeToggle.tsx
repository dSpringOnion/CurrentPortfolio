import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun size={20} className="text-yellow-500" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 180 : 0,
          scale: theme === 'light' ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon size={20} className="text-blue-400" />
      </motion.div>
      
      <div className="w-5 h-5 opacity-0" />
    </motion.button>
  );
};

export default ThemeToggle;