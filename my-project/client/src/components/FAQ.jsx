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
      " Yes. We have deep operational expertise in India, UAE and the broader Middle East, the UK, Germany, and the United States — with continuously expanding regulatory knowledge.",
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
  }
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
        paddingTop: "120px",
        paddingBottom: "140px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <p
            style={{
              color: "#B57984",
              fontSize: "20px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "20px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            FAQ
          </p>

          <h2
            style={{
              color: "#00285C",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: "1.1",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Frequently Asked. Honestly Answered.
          </h2>
        </div>

        {/* FAQ Card */}
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            backgroundColor: "#FFFFFF",
            border: "1px solid #EFE7E0",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
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
                  padding: "30px 32px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    color:
                      openIndex === index
                        ? "#B57984"
                        : "#00285C",
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "1.4",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {faq.question}
                </span>

                <span
                  style={{
                    fontSize: "30px",
                    color: "#8C8C8C",
                    minWidth: "30px",
                    textAlign: "center",
                    lineHeight: 1,
                  }}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
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
                        padding: "0 32px 28px",
                      }}
                    >
                      <p
                        style={{
                          color: "#7C8796",
                          fontSize: "17px",
                          lineHeight: "1.9",
                          fontFamily: "Inter, sans-serif",
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
                    margin: "0 32px",
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