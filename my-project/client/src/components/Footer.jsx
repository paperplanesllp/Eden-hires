import logo from "../assets/edenlogo.PNG";
import { Link } from "react-router-dom";

const Footer = () => {
  const contactLinks = [
    { label: "contact@edenhire.ai", href: "mailto:contact@edenhire.ai" },
    { label: "edenhire.ai", href: "https://edenhire.ai" },
  ];

  const regions = [
    "India",
    "Middle East",
    "United States",
    "Europe",
    "Global Remote",
  ];

  return (
    <footer className="border-t-[3px] border-[#00285C] bg-[#FFF7F0] font-[Inter,Manrope,system-ui,sans-serif]">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 md:px-8 lg:px-10 lg:py-12">
        <div className="grid gap-9 text-center md:grid-cols-2 md:gap-10 md:text-left lg:grid-cols-[1.25fr_0.7fr_0.85fr] lg:items-start lg:gap-16">
          <div className="mx-auto flex max-w-[24rem] flex-col items-center md:mx-0 md:items-start">
            <Link
              to="/"
              aria-label="Edenhire.ai home"
              className="mb-5 inline-flex items-center"
            >
              <img
                src={logo}
                alt="Edenhire.ai"
                className="block h-auto w-[168px] object-contain sm:w-[184px] lg:w-[196px]"
              />
            </Link>

            <p className="max-w-[23rem] text-[14px] leading-7 text-[#667085] sm:text-[15px]">
              A next-generation, AI-powered human resources consulting firm
              built for high-growth startups.
            </p>

            <div className="my-5 h-px w-full max-w-[18rem] bg-[#E7DED5] md:hidden" />

            <address className="not-italic text-[13px] leading-7 text-[#667085] sm:text-[14px] md:mt-5">
              Door No. 38/2008, Seashore Arcade,
              <br />
              Ernakulam, Kerala, India
            </address>
          </div>

          <div className="border-t border-[#E7DED5] pt-6 md:border-t-0 md:pt-1 lg:pt-2">
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#00285C] sm:text-xs">
              Contact
            </h4>

            <div className="flex flex-col items-center gap-3 md:items-start">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-[14px] font-semibold leading-6 text-[#667085] transition-colors duration-200 hover:text-[#00285C] sm:text-[15px]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-[#E7DED5] pt-6 md:col-span-2 md:pt-7 lg:col-span-1 lg:border-t-0 lg:pt-2">
            <h4 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#00285C] sm:text-xs">
              Regions
            </h4>

            <div className="mx-auto flex max-w-[22rem] flex-wrap justify-center gap-2 md:mx-0 md:justify-start">
              {regions.map((region) => (
                <span
                  key={region}
                  className="rounded-full border border-[#E7DED5] bg-white/50 px-3 py-1.5 text-[12px] font-medium leading-none text-[#667085] sm:text-[13px]"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-9 border-t border-[#E7DED5] pt-5 sm:mt-10 md:flex md:items-center md:justify-between md:gap-8 lg:mt-12">
          <p className="text-center text-[12px] leading-5 text-[#98A2B3] md:text-left">
            © 2024 edenhire.ai. All rights reserved.
          </p>

          <p className="mx-auto mt-3 max-w-[24rem] text-center text-[12px] leading-5 text-[#98A2B3] md:mx-0 md:mt-0 md:max-w-xl md:text-right">
            HREC & Intelligent Sourcing · Proprietary 90-Day Scale-Safe Startup
            People Architecture System™
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
