import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    title: "Discovery & Immersion",
    description:
      "Structured conversations with founders and leaders — surfacing not just formal HR requirements but the lived experience of working within the organisation.",
  },
  {
    number: "02",
    title: "HR Audit & Diagnostic",
    description:
      "A systematic, structured assessment against a comprehensive framework of best practices and legal requirements. Frank, specific, and actionable.",
  },
  {
    number: "03",
    title: "Custom Roadmap",
    description:
      "Audit findings translated into a prioritised programme of work across three horizons: immediate (0–90 days), medium-term, and strategic.",
  },
  {
    number: "04",
    title: "Execution & Partnership",
    description:
      "We execute the work ourselves. Rigorous project management ensures clients always know exactly where the work stands.",
  },
];

const WhyChooseSection = () => {
  return (
    <section
      className="bg-[#FFF7F0] py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10"
      >
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <p
            className="
              text-[#B57984]
              text-[11px]
              sm:text-xs
              md:text-sm
              tracking-[4px]
              uppercase
              font-semibold
              mb-4
            "
          >
            HOW WE WORK
          </p>

          <h2
            className="
              text-[#00285C]
              text-[2rem]
              sm:text-[2.5rem]
              md:text-[3rem]
              lg:text-[3.4rem]
              font-semibold
              leading-tight
              max-w-4xl
              mx-auto
            "
          >
            Four Steps. One Long Partnership.
          </h2>
        </motion.div>

        {/* Cards */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
            lg:gap-6
          "
        >
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                bg-white
                border
                border-[#E9DFD6]
                rounded-2xl
                p-5
                sm:p-6
                min-h-[250px]
                shadow-[0_8px_24px_rgba(0,0,0,0.04)]
                hover:shadow-[0_20px_40px_rgba(0,43,91,0.08)]
                hover:border-[#D8C0B6]
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <span
                  className="
                    block
                    text-[2.8rem]
                    sm:text-[3.2rem]
                    font-bold
                    text-[#E9D8CF]
                    leading-none
                    mb-5
                  "
                >
                  {item.number}
                </span>
              </motion.div>

              <h3
                className="
                  text-[#00285C]
                  text-base
                  sm:text-lg
                  font-bold
                  leading-snug
                  mb-3
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-[#7C8796]
                  text-sm
                  sm:text-[15px]
                  leading-7
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;