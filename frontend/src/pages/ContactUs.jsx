import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-[100dvw-60px] bg-sky-900 py-24 px-4">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-7xl mx-auto text-white mb-14"
      >
        <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
        <p className="text-white/80 max-w-xl">
          This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
          velit auctor aliquet.
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-7xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Left Form */}
          <div className="lg:col-span-2 p-8 md:p-12">
            <h3 className="text-xl font-semibold mb-8">
              Send us a Message
            </h3>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border-b border-gray-300 py-2 focus:outline-none focus:border-sky-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border-b border-gray-300 py-2 focus:outline-none focus:border-sky-500"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border-b border-gray-300 py-2 focus:outline-none focus:border-sky-500"
              />
              <input
                type="text"
                placeholder="Company"
                className="border-b border-gray-300 py-2 focus:outline-none focus:border-sky-500"
              />

              <textarea
                rows="4"
                placeholder="Hi, do you have a moment to talk about..."
                className="md:col-span-2 border-b border-gray-300 py-2 focus:outline-none focus:border-sky-500 resize-none"
              />

              <div className="md:col-span-2 flex justify-end mt-6">
                <button
                  type="submit"
                  className="w-12 h-12 rounded-full bg-primery text-white flex items-center justify-center shadow-lg hover:bg-sky-600 transition"
                >
                  ➤
                </button>
              </div>
            </form>
          </div>

          {/* Right Info Panel */}
          <div className="bg-primery text-white p-8 md:p-12 -mr-[2px] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-8">
                Contact Information
              </h3>

              <ul className="space-y-6 text-white/80">
                <li>📍 Pakur, Jharkhand, India</li>
                <li>📞 +91 7761917649</li>
                <li>✉️ asifahma7761@gmail.com</li>
              </ul>
            </div>

            <div className="flex gap-4 mt-10 text-white/80">
              <span className="cursor-pointer hover:text-white">🐦</span>
              <span className="cursor-pointer hover:text-white">💼</span>
              <span className="cursor-pointer hover:text-white">📘</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
