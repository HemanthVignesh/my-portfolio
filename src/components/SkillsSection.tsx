import { motion } from "framer-motion";

const skills = [
  { name: "Python", x: "22%", y: "22%" },
  { name: "FastAPI", x: "50%", y: "18%" },
  { name: "React", x: "78%", y: "32%" },
  { name: "Transformers", x: "38%", y: "58%" },
  { name: "Node.js", x: "70%", y: "68%" },
  { name: "MongoDB", x: "28%", y: "78%" },
];

const SkillsSection = () => {
  return (
    <section className="relative min-h-screen bg-black text-white py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-bold mb-20 tracking-tight">
          Skill <span className="text-red-500">Constellation</span>
        </h2>

        <div className="relative w-full h-[650px] border border-zinc-800 rounded-2xl bg-gradient-to-b from-black to-zinc-950 overflow-hidden">

          {/* subtle glow background */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08),transparent_60%)]" />

          {/* SVG lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line x1="22%" y1="22%" x2="50%" y2="18%" stroke="#333" strokeWidth="1" />
            <line x1="50%" y1="18%" x2="78%" y2="32%" stroke="#333" strokeWidth="1" />
            <line x1="38%" y1="58%" x2="70%" y2="68%" stroke="#333" strokeWidth="1" />
            <line x1="28%" y1="78%" x2="38%" y2="58%" stroke="#333" strokeWidth="1" />
          </svg>

          {/* nodes */}
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4 + index,
              }}
              whileHover={{
                scale: 1.12,
                boxShadow: "0 0 25px rgba(255,0,0,0.25)",
              }}
              className="absolute px-5 py-3 bg-zinc-900 border border-zinc-700 rounded-full shadow-lg cursor-pointer text-sm tracking-wide"
              style={{
                left: skill.x,
                top: skill.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;