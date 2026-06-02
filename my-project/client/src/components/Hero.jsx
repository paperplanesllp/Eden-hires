import { UserRoundKey } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      style={{
        background: "#001F4D",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "40px",
      }}
    >
      <div
        style={{
          width: "95%",
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 30px",
        }}
      >
        <div className="flex flex-col items-center text-center">
          {/* Top Text */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              color: "#7E8CA8",
              fontSize: "15px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              marginBottom: "50px",
              fontWeight: 400,
              fontFamily: "Manrope, sans-serif",
            }}
          >
            STRATEGIC HR. BUILT FOR BUILDERS.
          </motion.p>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              marginBottom: "45px",
            }}
          >
            <h1
              style={{
                margin: 0,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                lineHeight: 1,
                fontFamily: "Manrope, sans-serif",
              }}
            >
              {/* EDEN */}
              <span
                style={{
                  color: "#C98792",
                  fontSize: "120px",
                  fontWeight: 700,
                  letterSpacing: "-8px",
                }}
              >
                eden
              </span>

              {/* HIRE */}
              <span
                style={{
                  color: "#F5EFE8",
                  fontSize: "120px",
                  fontWeight: 500,
                  letterSpacing: "-8px",
                }}
              >
                hire
              </span>

              {/* .AI */}
              <span
                style={{
                  color: "#F5EFE8",
                  fontSize: "50px",
                  fontWeight: 400,
                  letterSpacing: "-1px",
                  marginLeft: "4px",
                  marginBottom: "12px",
                }}
              >
                .ai
              </span>
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "480px" }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            style={{
              height: "1px",
              background: "#C98792",
              marginBottom: "55px",
            }}
          />

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: "Manrope, sans-serif",
                lineHeight: "1.08",
              }}
            >
              <span
                style={{
                  display: "block",
                  color: "#F5EFE8",
                  fontSize: "62px",
                  fontWeight: 300,
                  letterSpacing: "-2px",
                }}
              >
                You build the vision.
              </span>

              <span
                style={{
                  display: "block",
                  color: "#C98792",
                  fontSize: "62px",
                  fontWeight: 300,
                  letterSpacing: "-2px",
                  marginTop: "8px",
                }}
              >
                We build the team.
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.7,
              duration: 1,
            }}
            style={{
              color: "#7E8CA8",
              fontSize: "18px",
              lineHeight: "1.8",
              marginTop: "40px",
              marginBottom: "50px",
              fontFamily: "Manrope, sans-serif",
            }}
          >
            AI-powered HR consulting • India • Middle East • USA • Europe
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col md:flex-row gap-5"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.8,
            }}
          >
            {/* Hiring Button */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              style={{
                width: "320px",
                height: "76px",
                borderRadius: "999px",
                border: "none",
                background: "#C98792",
                color: "#FFFFFF",
                fontSize: "22px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "Manrope, sans-serif",
              }}
            >
              I'm Hiring →
            </motion.button>

            {/* Role Button */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="flex items-center justify-center gap-3"
              style={{
                width: "520px",
                height: "76px",
                borderRadius: "999px",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#F5EFE8",
                fontSize: "22px",
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "Manrope, sans-serif",
              }}
            >
              <UserRoundKey size={24} />
              I'm Looking for a Role
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;