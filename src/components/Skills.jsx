import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    skills: ["C", "C++", "Python", "Java", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["NumPy", "Pandas", "Scikit-learn", "NLTK", "Matplotlib"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Jira", "Jupyter Notebook", "VS Code"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem-Solving", "Team Player", "Time Management", "Adaptability"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 px-6 bg-[#0d0d0d]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs text-orange-400 tracking-[0.3em] uppercase mb-3 block">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-black font-display">
            Technical <span className="text-orange-400">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="p-8 rounded-2xl bg-[#111111] border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.03)] hover:shadow-[0_0_25px_rgba(249,115,22,0.15)] flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                <h3 className="font-bold text-white text-xl tracking-wide">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: gi * 0.1 + si * 0.05 + 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full border border-orange-500/20 text-sm md:text-base text-gray-300 hover:text-orange-300 hover:border-orange-500/60 bg-white/[0.02] hover:bg-orange-500/10 transition-all cursor-default shadow-lg shadow-black/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
