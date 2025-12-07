import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const HomePage = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen text-white flex items-center overflow-hidden"
    >
      {/* ==== FULL BACKGROUND IMAGE (RIGHT-HEAVY POSITION) ==== */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[center_right_-120px] sm:bg-right opacity-90"
        style={{
          backgroundImage: "url('/pic_perf.jpg')",
        }}
      ></div>

      {/* DARK GRADIENT FOR LEFT TEXT READABILITY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020610] via-[#020610]/70 to-transparent"></div>

      {/* ==== CONTENT ON TOP ==== */}
      <div className="relative z-10 px-6 md:px-20 w-full max-w-6xl">
        <div className="max-w-xl mt-60 sm:mt-40">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight whitespace-normal md:whitespace-nowrap">
            Hi, I'm Narendra Chawda
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mt-2">
            Full Stack Developer
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed mt-6">
            I build modern, fast and scalable web applications using the MERN
            stack. I help businesses grow by creating clean, user-friendly
            digital experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary px-6">
              Hire Me
            </a>

            <button className="btn btn-secondary  px-6 border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white">
              Let's Talk
            </button>
          </div>


          {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mt-20 pt-12">
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm rounded-full p-2"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm rounded-full p-2"
              >
                <FaTwitter size={16} />
              </a>

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm rounded-full p-2"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
