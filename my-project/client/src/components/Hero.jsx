import { UserRoundKey } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      style={{
        background: "#001F4D",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 20px 80px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1600px",
          margin: "0 auto",
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
              fontSize: "13px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "40px",
              fontWeight: 500,
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
              marginBottom: "40px",
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
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  color: "#C98792",
                  fontSize: "clamp(60px, 10vw, 110px)",
                  fontWeight: 600,
                  letterSpacing: "-6px",
                }}
              >
                eden
              </span>

              <span
                style={{
                  color: "#F5EFE8",
                  fontSize: "clamp(60px, 10vw, 110px)",
                  fontWeight: 300,
                  letterSpacing: "-6px",
                }}
              >
                hire
              </span>

              <span
                style={{
                  color: "#F5EFE8",
                  fontSize: "clamp(28px,4vw,48px)",
                  fontWeight: 400,
                  marginBottom: "10px",
                }}
              >
                .ai
              </span>
            </h1>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "min(480px,80vw)" }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            style={{
              height: "1px",
              background: "#C98792",
              marginBottom: "50px",
            }}
          />

          {/* Heading */}
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
                lineHeight: "1.1",
              }}
            >
              <span
                style={{
                  display: "block",
                  color: "#F5EFE8",
                  fontSize: "clamp(38px,5vw,60px)",
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
                  fontSize: "clamp(38px,5vw,60px)",
                  fontWeight: 300,
                  letterSpacing: "-2px",
                  marginTop: "10px",
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
              fontSize: "clamp(15px,2vw,18px)",
              lineHeight: "1.8",
              marginTop: "35px",
              marginBottom: "50px",
              maxWidth: "700px",
              padding: "0 20px",
              textAlign: "center",
              fontFamily: "Manrope, sans-serif",
            }}
          >
            AI-powered HR consulting • India • Middle East • USA • Europe
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col lg:flex-row gap-4 w-full justify-center items-center"
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
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => navigate("/hiring")}
              style={{
                width: "100%",
                maxWidth: "280px",
                height: "64px",
                borderRadius: "999px",
                border: "none",
                background:
                  "linear-gradient(135deg,#C98792 0%, #B57984 100%)",
                color: "#FFFFFF",
                fontSize: "18px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "Manrope, sans-serif",
                boxShadow: "0 12px 30px rgba(201,135,146,0.25)",
              }}
            >
              I'm Hiring →
            </motion.button>

            {/* Role Button */}
            <motion.button
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() => navigate("/role")}
              className="flex items-center justify-center gap-3"
              style={{
                width: "100%",
                maxWidth: "380px",
                height: "64px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#F5EFE8",
                fontSize: "18px",
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "Manrope, sans-serif",
                backdropFilter: "blur(10px)",
              }}
            >
              <UserRoundKey size={20} />
              I'm Looking for a Role
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;