import { CircleCheckBig } from "lucide-react";

const StatsBar = () => {
  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid #E8E0D9",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-10">

        {/* Top Row */}
        <div className="flex flex-wrap justify-center items-center gap-16">

          <div className="flex items-center gap-2">
            <CircleCheckBig size={20} color="#B57984" />
            <span className="text-[18px] text-[#7C8796]">
              500+ companies hiring
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CircleCheckBig size={20} color="#B57984" />
            <span className="text-[18px] text-[#7C8796]">
              12,000+ candidates matched
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CircleCheckBig size={20} color="#B57984" />
            <span className="text-[18px] text-[#7C8796]">
              3× faster time-to-hire
            </span>
          </div>

          <div className="flex items-center gap-2">
            <CircleCheckBig size={20} color="#B57984" />
            <span className="text-[18px] text-[#7C8796]">
              AI-curated shortlists
            </span>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-2">
            <CircleCheckBig size={20} color="#B57984" />
            <span className="text-[18px] text-[#7C8796]">
              Founded 2024 · Ernakulam, India
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsBar;