import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-neutral-950 py-12 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Daniel Park</span>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Building digital products, brands, and experiences.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a href="https://github.com/dSpringOnion" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/daniel-park-5195ab207" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:dbpark.dev@gmail.com" className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Email</a>
        </div>

        <div className="text-sm text-neutral-400 dark:text-neutral-600">
          © {currentYear} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;