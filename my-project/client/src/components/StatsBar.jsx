import { useEffect, useState } from "react";
import { CircleCheckBig } from "lucide-react";
import { motion } from "framer-motion";

const Counter = ({ end, suffix = "", startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, startAnimation]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

const StatsBar = () => {
  const [startCounter, setStartCounter] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      onViewportEnter={() => setStartCounter(true)}
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid #E8E0D9",
      }}
    >
      <div
        className="max-w-[1200px] mx-auto px-4 sm:px-6"
        style={{
          paddingTop: "28px",
          paddingBottom: "28px",
        }}
      >
        {/* Top Stats */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <CircleCheckBig size={16} color="#B57984" />
            <span
              style={{
                fontSize: "15px",
                color: "#7C8796",
                fontWeight: 500,
              }}
            >
              <Counter
                end={500}
                suffix="+"
                startAnimation={startCounter}
              />{" "}
              companies hiring
            </span>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <CircleCheckBig size={16} color="#B57984" />
            <span
              style={{
                fontSize: "15px",
                color: "#7C8796",
                fontWeight: 500,
              }}
            >
              <Counter
                end={12000}
                suffix="+"
                startAnimation={startCounter}
              />{" "}
              candidates matched
            </span>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <CircleCheckBig size={16} color="#B57984" />
            <span
              style={{
                fontSize: "15px",
                color: "#7C8796",
                fontWeight: 500,
              }}
            >
              <Counter
                end={3}
                suffix="×"
                startAnimation={startCounter}
              />{" "}
              faster time-to-hire
            </span>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <CircleCheckBig size={16} color="#B57984" />
            <span
              style={{
                fontSize: "15px",
                color: "#7C8796",
                fontWeight: 500,
              }}
            >
              AI-curated shortlists
            </span>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-6"
        >
          <div className="flex items-center gap-2">
            <CircleCheckBig size={16} color="#B57984" />
            <span
              style={{
                fontSize: "15px",
                color: "#7C8796",
                fontWeight: 500,
                textAlign: "center",
              }}
            >
              Founded 2024 · Ernakulam, India
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StatsBar;