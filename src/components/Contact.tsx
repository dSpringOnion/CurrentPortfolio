import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Side: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
                Let's work <br />
                <span className="text-neutral-500 dark:text-neutral-500">together.</span>
              </h2>

              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
                I'm currently available for freelance projects and open to full-time opportunities. If you have a project that needs some creative engineering, I'd love to hear about it.
              </p>

              <div className="space-y-6 pt-8">
                <a
                  href="mailto:dbpark.dev@gmail.com"
                  className="flex items-center gap-4 text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg font-medium">dbpark.dev@gmail.com</span>
                </a>

                <div className="flex items-center gap-4 text-neutral-900 dark:text-white">
                  <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg font-medium">West Lafayette, IN</span>
                </div>
              </div>

              <div className="flex gap-4 pt-8">
                {[
                  { Icon: Github, href: "https://github.com/dSpringOnion" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/daniel-park-5195ab207" },
                  { Icon: Twitter, href: "https://twitter.com" }
                ].map(({ Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white transition-all"
                    aria-label="Social Link"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Minimalist Form */}
          <div className="lg:pt-4">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-neutral-900 dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors placeholder-transparent"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black dark:peer-focus:text-white"
                  >
                    What's your name?
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-neutral-900 dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors placeholder-transparent"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black dark:peer-focus:text-white"
                  >
                    Your email address
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-3 text-neutral-900 dark:text-white focus:border-black dark:focus:border-white focus:outline-none transition-colors placeholder-transparent resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-3.5 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-neutral-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-black dark:peer-focus:text-white"
                  >
                    Tell me about your project
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="group flex items-center gap-2 text-lg font-medium text-black dark:text-white hover:opacity-70 transition-opacity disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                  {status === "idle" && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
