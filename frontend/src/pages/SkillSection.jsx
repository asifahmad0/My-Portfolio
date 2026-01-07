import { useState } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", type: "Programming Language", icon: "🟨" },
  { name: "React", type: "Library", icon: "⚛️" },
  { name: "TypeScript", type: "Programming Language", icon: "🟩" },
  { name: "Node.js", type: "Programming Language", icon: "🟢" },
  { name: "Next.js", type: "Framework", icon: "Ⓝ" },
  { name: "Express.js", type: "Framework", icon: "🚀" },
  { name: "React Native", type: "Framework", icon: "📱" },
  { name: "HTML", type: "Markup Language", icon: "📄" },
  { name: "CSS", type: "Styling Language", icon: "🎨" },
  { name: "Jest", type: "Testing Framework", icon: "🧪" },
  { name: "Supertest", type: "Library", icon: "✅" },
  { name: "RTK Query", type: "Library", icon: "🔁" },
  { name: "Tailwind CSS", type: "Library", icon: "💨" },
  { name: "Shadcn/ui", type: "Library", icon: "🧩" },
  { name: "Framer Motion", type: "Animation Tool", icon: "🎞️" },
  { name: "Firebase", type: "Database", icon: "🔥" },
  { name: "Supabase", type: "Database", icon: "🟢" },
  { name: "PostgreSQL", type: "Database", icon: "🐘" },
  { name: "MongoDB", type: "Database", icon: "🍃" },
  { name: "Prisma", type: "ORM", icon: "🔺" },
  { name: "Git", type: "Version Control", icon: "🌱" },
  { name: "GitHub", type: "Version Control", icon: "🐙" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function SkillsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skills : skills.slice(0, 8);

  return (
    <section className="max-w-[100dvw-60px] mx-auto px-4 py-16">
      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-10"
      >
        My Stack / Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {visibleSkills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex items-center gap-4 p-5 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="text-3xl">{skill.icon}</div>
            <div>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              <p className="text-sm text-gray-500">{skill.type}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition font-medium"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </motion.div>
    </section>
  );
}
