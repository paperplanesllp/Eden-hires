import { Link } from "react-router-dom";

const RoleThankYou = () => {
  return (
    <div className="min-h-screen bg-[#F8F3EE] flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-3xl rounded-[32px] bg-white p-8 md:p-12 shadow-[0_30px_80px_rgba(43,60,95,0.12)]">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B57984]">
            Submit my profile
          </p>
          <h1 className="mt-6 text-4xl font-bold text-[#002B5B]">
            Thank you for your submission!
          </h1>
        </div>

        <p className="text-base text-[#5D667A] leading-relaxed mb-10">
          Your profile has been received. A member of the edenhire.ai team will review your details and get back to you soon.
        </p>

        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[#B57984] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#a15f71]"
          >
            Return to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoleThankYou;
