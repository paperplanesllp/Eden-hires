import logo from "../assets/edenlogo.PNG";

const Footer = () => {
  const contactLinks = [
    { label: "contact@edenhire.ai", href: "mailto:contact@edenhire.ai" },
    { label: "edenhire.ai", href: "https://edenhire.ai" },
  ];

  const regions = ["India", "Middle East", "United States", "Europe", "Global Remote"];

  return (
    <footer className="border-t-[3px] border-[#00285C] bg-[#FFF7F0] font-[Inter,Manrope,system-ui,sans-serif]">
      {/* Mobile optimization: compact padding creates a tighter, premium rhythm on 320px-430px screens. */}
      <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        {/* Mobile optimization: single-column center alignment prevents the footer from feeling like a squeezed desktop grid. */}
        <div className="flex flex-col items-center gap-7 text-center lg:grid lg:grid-cols-[1.25fr_0.75fr_0.75fr] lg:items-start lg:gap-12 lg:text-left">
          <div className="flex w-full max-w-sm flex-col items-center lg:max-w-none lg:items-start">
            {/* Mobile optimization: smaller bounded logo removes excess whitespace and keeps brand presence elegant. */}
            <img
              src={logo}
              alt="EdenHire.ai"
              className="mb-3 h-9 w-auto max-w-[170px] object-contain sm:h-10 sm:max-w-[210px] lg:mb-5 lg:h-12 lg:max-w-[250px]"
            />

            {/* Mobile optimization: readable line-height and constrained width improve scanning on narrow devices. */}
            <p className="max-w-[19rem] text-[14px] leading-6 text-[#667085] sm:max-w-md sm:text-[15px] lg:max-w-lg">
              A next-generation, AI-powered human resources consulting firm
              built for high-growth startups.
            </p>

            {/* Mobile optimization: subtle divider separates brand copy from address without adding bulky spacing. */}
            <div className="my-5 h-px w-full max-w-[15rem] bg-[#E7DED5] lg:hidden" />

            <address className="not-italic text-[13px] leading-6 text-[#667085] sm:text-[14px] lg:mt-5">
              Door No. 38/2008, Seashore Arcade,
              <br />
              Ernakulam, Kerala, India
            </address>
          </div>

          {/* Mobile optimization: sections are separated by thin lines for clearer hierarchy on phones. */}
          <div className="w-full border-t border-[#E7DED5] pt-6 lg:border-t-0 lg:pt-0">
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00285C] sm:text-xs">
              Contact
            </h4>

            <div className="flex flex-col items-center gap-2 lg:items-start">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[14px] font-medium leading-6 text-[#667085] transition-colors duration-200 hover:text-[#00285C] sm:text-[15px]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile optimization: region chips wrap neatly instead of forming awkward stacked desktop text. */}
          <div className="w-full border-t border-[#E7DED5] pt-6 lg:border-t-0 lg:pt-0">
            <h4 className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00285C] sm:text-xs">
              Regions
            </h4>

            <div className="mx-auto flex max-w-[19rem] flex-wrap justify-center gap-2 lg:mx-0 lg:justify-start">
              {regions.map((region) => (
                <span
                  key={region}
                  className="rounded-full border border-[#E7DED5] bg-white/45 px-3 py-1.5 text-[12px] font-medium leading-none text-[#667085]"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile optimization: consistent divider and compact bottom copy reduce visual clutter at the footer end. */}
        <div className="mt-7 border-t border-[#E7DED5] pt-5 sm:mt-8 lg:mt-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <p className="text-center text-[12px] leading-5 text-[#98A2B3] lg:text-left">
            (c) 2024 edenhire.ai. All rights reserved.
          </p>

          <p className="mx-auto mt-2 max-w-[22rem] text-center text-[12px] leading-5 text-[#98A2B3] lg:mx-0 lg:mt-0 lg:max-w-2xl lg:text-right">
            HREC & Intelligent Sourcing - Proprietary 90-Day Scale-Safe Startup
            People Architecture System TM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
