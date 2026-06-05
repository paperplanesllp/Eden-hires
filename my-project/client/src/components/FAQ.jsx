import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question:
      "What size of organisation is EdenHire best suited to serve?",
    answer:
      "EdenHire works with startups from pre-seed — as early as the founding team — through Series B and beyond. We do not have a minimum team size.",
  },
  {
    question: "How does EdenHire's pricing work?",
    answer:
      "Our model is structured around monthly retainer engagements, calibrated to scope and complexity. We do not charge per-placement fees for recruitment conducted within the scope of our retainer. Pricing is transparent with no hidden fees.",
  },
  {
    question:
      "Can EdenHire support international hiring and compliance?",
    answer:
      "Yes. We have deep operational expertise in India, UAE and the broader Middle East, the UK, Germany, and the United States — with continuously expanding regulatory knowledge.",
  },
  {
    question: "How quickly can EdenHire get started?",
    answer:
      "Following a Discovery Call and engagement agreement, EdenHire can begin active work within one week.",
  },
  {
    question:
      "Does EdenHire replace the need for an in-house HR hire?",
    answer:
      "Not necessarily. Many clients use EdenHire as their HR function before building an internal team, while others continue to leverage us as a strategic partner alongside in-house HR professionals.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        backgroundColor: "#FFF7F0",
        paddingTop: "80px",
        paddingBottom: "90px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <p
            style={{
              color: "#B57984",
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "12px",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
            }}
          >
            FAQ
          </p>

         <h2
    style={{
    color: "#00285C",
    fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
    fontWeight: 500,
    lineHeight: 1.1,
    fontFamily: "Inter, sans-serif",
    maxWidth: "1400px",
    margin: "0 auto",
  }}
   >
  Frequently Asked. Honestly Answered.
   </h2>
        </motion.div>

        {/* FAQ Card */}

        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            backgroundColor: "#FFFFFF",
            border: "1px solid #EFE7E0",
            borderRadius: "22px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
          }}
        >
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  padding: "22px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FCF8F5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <span
                  style={{
                    color:
                      openIndex === index
                        ? "#B57984"
                        : "#00285C",
                    fontSize: "clamp(14px,2vw,16px)",
                    fontWeight: 600,
                    lineHeight: "1.5",
                    fontFamily: "Inter, sans-serif",
                    paddingRight: "12px",
                  }}
                >
                  {faq.question}
                </span>

                <motion.span
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  style={{
                    fontSize: "24px",
                    color: "#8C8C8C",
                    minWidth: "24px",
                    textAlign: "center",
                    lineHeight: 1,
                    fontWeight: 300,
                  }}
                >
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    style={{
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        padding: "0 24px 22px",
                      }}
                    >
                      <p
                        style={{
                          color: "#7C8796",
                          fontSize: "clamp(13px,2vw,15px)",
                          lineHeight: "1.8",
                          fontFamily: "Inter, sans-serif",
                          margin: 0,
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {index !== faqs.length - 1 && (
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "#EFE7E0",
                    margin: "0 24px",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}