import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      style={{
        background:
          "radial-gradient(circle at bottom left, rgba(32,76,98,0.6), transparent 30%), linear-gradient(135deg, #002B5B 0%, #001D3D 100%)",
        paddingTop: "140px",
        paddingBottom: "140px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            color: "#D79AA3",
            fontSize: "15px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "28px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          It Begins With A Conversation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            color: "#FFFFFF",
            fontSize: "50px",
            fontWeight: 600,
            lineHeight: "1.05",
            maxWidth: "950px",
            margin: "0 auto",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Ready to build the team that will make your vision real?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            color: "#B8C2D1",
            fontSize: "20px",
            marginTop: "40px",
            lineHeight: "1.6",
            fontFamily: "Inter, sans-serif",
          }}
        >
          A 30-minute Discovery Call. Structured. Honest. No commitment.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            color: "#7D93AA",
            fontSize: "18px",
            marginTop: "12px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          "We treat every startup like our own."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            marginTop: "50px",
            flexWrap: "wrap",
          }}
        >
          {/* Primary Button */}
          <button
            style={{
              backgroundColor: "#B57984",
              color: "#FFFFFF",
              border: "none",
              width: "220px",
              height: "56px",
              borderRadius: "999px",
              fontSize: "18px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0px)";
            }}
          >
            I'm Hiring →
          </button>

          {/* Secondary Button */}
          <button
            style={{
              backgroundColor: "transparent",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.25)",
              width: "310px",
              height: "56px",
              borderRadius: "999px",
              fontSize: "18px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor =
                "rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
            }}
          >
            I'm Looking for a Role
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;