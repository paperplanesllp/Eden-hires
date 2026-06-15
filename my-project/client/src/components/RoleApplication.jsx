import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const RoleApplication = () => {
  const navigate = useNavigate();
  const resumeInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentRole: "",
    experience: "",
    workPreference: "",
    skills: "",
    location: "",
    linkedin: "",
    roleLookingFor: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0] || null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Profile submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      currentRole: "",
      experience: "",
      workPreference: "",
      skills: "",
      location: "",
      linkedin: "",
      roleLookingFor: "",
      resume: null,
    });

    if (resumeInputRef.current) {
      resumeInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F3EE] py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
            style={{
              border: "none",
              background: "transparent",
              color: "#7B7B7B",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={20} />
            Back
          </button>

          <div
            style={{
              background: "#EEF4E8",
              color: "#7E9E63",
              padding: "10px 20px",
              borderRadius: "999px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontWeight: 600,
              letterSpacing: "1px",
              fontSize: "14px",
            }}
          >
            <Search size={15} />
            I'M LOOKING FOR A ROLE
          </div>
        </div>

        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{
            color: "#002B5C",
            lineHeight: 1.1,
          }}
        >
          Find your next opportunity.
        </h1>

        <p
          className="mt-5 text-lg md:text-xl max-w-3xl"
          style={{
            color: "#7A7A7A",
            lineHeight: 1.7,
          }}
        >
          Share a little about yourself and a talent expert from
          edenhire.ai will reach out to match you with the right
          opportunities.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div>
              <label className="block mb-2 text-sm font-semibold text-[#284A75]">
                YOUR NAME *
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Alex Johnson"
                className="w-full h-14 px-5 rounded-2xl border border-gray-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#284A75]">
                EMAIL *
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="alex@gmail.com"
                className="w-full h-14 px-5 rounded-2xl border border-gray-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#284A75]">
                PHONE NUMBER *
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
                className="w-full h-14 px-5 rounded-2xl border border-gray-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#284A75]">
                CURRENT / MOST RECENT ROLE *
              </label>

              <input
                type="text"
                name="currentRole"
                value={formData.currentRole}
                onChange={handleChange}
                required
                placeholder="e.g. Product Manager"
                className="w-full h-14 px-5 rounded-2xl border border-gray-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#284A75]">
                YEARS OF EXPERIENCE *
              </label>

              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full h-14 px-5 rounded-2xl border border-gray-300"
              >
                <option value="">Select...</option>
                <option>0-1 Years (Fresher)</option>
                <option>1-3 Years</option>
                <option>3-6 Years</option>
                <option>6-10 Years</option>
                <option>10+ Years</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-[#284A75]">
                WORK PREFERENCE *
              </label>

              <select
                name="workPreference"
                value={formData.workPreference}
                onChange={handleChange}
                required
                className="w-full h-14 px-5 rounded-2xl border border-gray-300"
              >
                <option value="">Select...</option>
                <option>Remote</option>
                <option>Hybrid</option>
                <option>On-site</option>
                <option>Flexible</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-sm font-semibold text-[#284A75]">
              KEY SKILLS *
            </label>

            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
              placeholder="React, Python, Growth Marketing"
              className="w-full h-14 px-5 rounded-2xl border border-gray-300"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-sm font-semibold text-[#284A75]">
              CURRENT LOCATION *
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="e.g. Bengaluru, India"
              className="w-full h-14 px-5 rounded-2xl border border-gray-300"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-sm font-semibold text-[#284A75]">
              LINKEDIN PROFILE *
            </label>

            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              required
              placeholder="https://linkedin.com/in/yourprofile"
              className="w-full h-14 px-5 rounded-2xl border border-gray-300"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-sm font-semibold text-[#284A75]">
              UPLOAD RESUME *
            </label>

            <input
              ref={resumeInputRef}
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
              className="w-full p-4 rounded-2xl border border-gray-300 bg-white"
            />
          </div>

          <div className="mt-6">
            <label className="block mb-2 text-sm font-semibold text-[#284A75]">
              WHAT KIND OF ROLE ARE YOU LOOKING FOR? *
            </label>

            <textarea
              rows="5"
              name="roleLookingFor"
              value={formData.roleLookingFor}
              onChange={handleChange}
              required
              placeholder="Describe your ideal role..."
              className="w-full p-5 rounded-2xl border border-gray-300 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full max-w-[420px] h-14 mt-8 block mx-auto rounded-full bg-[#B57984] text-white text-lg font-semibold transition duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(181,121,132,0.22)]"
            style={{
              border: "none",
            }}
          >
            Submit My Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoleApplication;
