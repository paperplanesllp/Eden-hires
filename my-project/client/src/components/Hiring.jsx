import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const Hiring = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    role: "",
    teamSize: "",
    fundingStage: "",
    challenge: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;

    if (!form.checkValidity()) {
      form.reportValidity();

      const firstInvalid = form.querySelector(":invalid");

      if (firstInvalid) {
        firstInvalid.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        firstInvalid.focus();
      }

      return;
    }

    try {
      const response = await api.post("/api/contact", formData);

      if (response.data.success) {
        alert("Form submitted successfully!");

        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          role: "",
          teamSize: "",
          fundingStage: "",
          challenge: "",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F1EC] py-10 px-5 sm:px-6 md:px-8">
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <Link
            to="/"
            className="text-gray-500 hover:text-[#002B5B] text-lg font-medium transition"
          >
            ← Back
          </Link>

          <div className="inline-flex items-center px-5 py-2 rounded-full border border-[#E2C7CB] text-[#B57984] font-semibold text-sm bg-white/50">
            👜 I'M HIRING
          </div>
        </div>

        <h1 className="text-[#002B5B] font-bold leading-tight text-4xl sm:text-5xl md:text-4xl mb-5">
          Let's build your team.
        </h1>

        <p className="text-gray-500 text-lg md:text-l leading-relaxed max-w-3xl mb-10">
          Tell us about your hiring needs and a talent expert from edenhire.ai
          will reach out to you shortly.
        </p>

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#344054]">
                YOUR NAME *
              </label>

              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="w-full h-14 px-5 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:ring-4 focus:ring-[#B57984]/15 focus:border-[#B57984] transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#344054]">
                COMPANY *
              </label>

              <input
                required
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Inc."
                className="w-full h-14 px-5 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:ring-4 focus:ring-[#B57984]/15 focus:border-[#B57984] transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#344054]">
                WORK EMAIL *
              </label>

              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@acme.com"
                className="w-full h-14 px-5 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:ring-4 focus:ring-[#B57984]/15 focus:border-[#B57984] transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#344054]">
                PHONE NUMBER *
              </label>

              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full h-14 px-5 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:ring-4 focus:ring-[#B57984]/15 focus:border-[#B57984] transition"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-semibold text-[#344054]">
              ROLE(S) YOU'RE HIRING FOR *
            </label>

            <input
              required
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="e.g. Senior Engineer, Head of Sales, HR Lead"
              className="w-full h-14 px-5 rounded-2xl border border-gray-300 bg-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#344054]">
                CURRENT TEAM SIZE *
              </label>

              <select
                required
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                className="w-full h-14 px-5 rounded-2xl border border-gray-300 bg-white"
              >
                <option value="">Select...</option>
                <option>1-5 (Founding team)</option>
                <option>6-15</option>
                <option>16-50</option>
                <option>51-200</option>
                <option>200+</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#344054]">
                FUNDING STAGE *
              </label>

              <select
                required
                name="fundingStage"
                value={formData.fundingStage}
                onChange={handleChange}
                className="w-full h-14 px-5 rounded-2xl border border-gray-300 bg-white"
              >
                <option value="">Select...</option>
                <option>Pre-Seed</option>
                <option>Seed</option>
                <option>Series A</option>
                <option>Series B+</option>
                <option>Bootstrapped</option>
              </select>
            </div>
          </div>

          <div className="mb-2">
            <label className="block mb-2 text-sm font-semibold text-[#344054]">
              WHAT'S YOUR BIGGEST HIRING CHALLENGE RIGHT NOW? *
            </label>

            <textarea
              required
              rows={5}
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              placeholder="e.g. Finding senior technical talent quickly..."
              className="w-full min-h-[100px] p-5 rounded-2xl border border-gray-300 bg-white resize-none"
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-full sm:w-[340px] h-12 sm:h-14 rounded-full bg-[#B57984] text-white font-semibold"
            >
              Request a Discovery Call →
            </button>
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: "25px",
              color: "#8A8A8A",
              fontSize: "14px",
            }}
          >
            No commitment. 30 minutes. Completely free.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Hiring;
