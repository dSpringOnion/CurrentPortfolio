import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const apiUrl = process.env.REACT_APP_API_URL || "https://sparkling-tenderness-production.up.railway.app/api/contact";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again.",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dbpark.dev@gmail.com",
      href: "mailto:dbpark.dev@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (956) 875-4663",
      href: "tel:+19568574663",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "West Lafayette, IN",
      href: "https://maps.google.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-lg md:text-4xl font-bold text-black dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                Let's start a conversation
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                I'm always interested in new opportunities, challenging
                projects, and meeting fellow developers. Whether you have a
                project in mind or just want to connect, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group border border-neutral-200 dark:border-neutral-700"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-950/30 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-200">
                    <info.icon size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                      {info.label}
                    </p>
                    <p className="text-black dark:text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 border border-neutral-200 dark:border-neutral-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              {status.type !== "idle" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-50 text-green-800"
                      : status.type === "error"
                      ? "bg-red-50 text-red-800"
                      : "bg-blue-50 text-blue-800"
                  }`}
                >
                  {status.type === "success" && <CheckCircle size={20} />}
                  {status.type === "error" && <AlertCircle size={20} />}
                  <span>{status.message}</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status.type === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-blue-500 dark:bg-purple-500 text-white font-medium rounded-lg hover:bg-blue-600 dark:hover:bg-purple-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.type === "loading" ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                ) : (
                  <Send size={20} />
                )}
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
