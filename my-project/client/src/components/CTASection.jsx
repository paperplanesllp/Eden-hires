import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#002B5B] via-[#00244A] to-[#001933] py-20 md:py-28">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#B57984]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Small Heading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-5 text-xs md:text-sm uppercase tracking-[4px] text-[#D79AA3]"
        >
          It Begins With A Conversation
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl"
        >
          Ready to build the team that will make your vision real?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-[#C7D0DD] md:text-xl"
        >
          A 30-minute Discovery Call. Structured. Honest. No commitment.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-3 text-sm italic text-[#8CA0B7] md:text-base"
        >
          "We treat every startup like our own."
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-center gap-4 lg:flex-row"
        >
          {/* Hiring Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() => navigate("/hiring")}
            className="
              h-12
              w-full
              max-w-[260px]
              rounded-full
              bg-[#B57984]
              text-white
              font-semibold
              shadow-lg
              shadow-[#B57984]/30
              transition-all
              duration-300
              hover:shadow-2xl
              hover:shadow-[#B57984]/40
            "
          >
            I'm Hiring →
          </motion.button>

          {/* Role Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() => navigate("/role")}
            className="h-12 w-full max-w-[300px] rounded-full border border-white/20 bg-white/5 text-white font-medium backdrop-blur-sm
              transition-all
              duration-300
              hover:bg-white/10
              hover:border-white/40
              hover:shadow-xl
            "
          >
            I'm Looking for a Role
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;