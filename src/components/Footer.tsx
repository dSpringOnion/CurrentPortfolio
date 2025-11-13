import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/dSpringOnion', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/daniel-park-5195ab207', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dbpark.dev@gmail.com', label: 'Email' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-neutral-400 max-w-md mx-auto">
              Ready to bring your ideas to life? Let's connect and create something extraordinary.
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-neutral-800 dark:bg-neutral-900 rounded-full flex items-center justify-center hover:bg-blue-500 dark:hover:bg-purple-500 transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          <div className="border-t border-neutral-800 dark:border-neutral-900 pt-8">
            <p className="text-neutral-400 flex items-center justify-center gap-2">
              © {currentYear} Portfolio. Made with <Heart size={16} className="text-red-500" /> and lots of coffee.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;