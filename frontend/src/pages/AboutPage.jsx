import React from 'react'

const AboutPage = () => {
  return (
    <div className="min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-8">
          About Me
        </h1>

        {/* Main Card */}
        <div className="card">
          <div className="card-body space-y-6">

            {/* Intro */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Hi, I'm Narendra Chawda 👋
              </h2>
              <p className="text-lg leading-relaxed">
                I am a <span className="font-semibold">MERN Stack Developer</span> 
                with 3+ years of experience building scalable, user-friendly 
                web applications. I specialize in creating complete solutions 
                using <b>MongoDB, Express, React, and Node.js</b> with modern UI 
                frameworks like Tailwind CSS and DaisyUI.
              </p>
            </div>

            {/* What I Do */}
            <div>
              <h3 className="text-xl font-bold mb-2">
                What I Do
              </h3>

              <ul className="list-disc ml-6 space-y-1">
                <li>Build full-stack MERN applications from scratch</li>
                <li>Create responsive and clean frontend UIs</li>
                <li>Develop secure REST APIs</li>
                <li>Integrate Cloudinary for image/video uploads</li>
                <li>Deploy apps to Vercel, Render, and AWS</li>
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold mb-3">
                Technical Skills
              </h3>

              <div className="flex flex-wrap gap-2">

                {[
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "Redux Toolkit",
                  "React Query",
                  "Zustand",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "MySQL",
                  "PostgreSQL",
                  "Tailwind CSS",
                  "DaisyUI",
                  "JavaScript (ES6+)",
                  "REST APIs",
                  "Cloudinary",
                  "Git & GitHub",
                  "Deployment",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="badge badge-primary badge-outline"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xl font-bold mb-2">
                Experience
              </h3>

              <p>
                I have over <b>3+ years of professional experience</b> working 
                with startups and service-based companies, delivering 
                production-level applications such as:
              </p>

              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Streaming Platforms (OTT)</li>
                <li>Admin Dashboards</li>
                <li>E-commerce panels</li>
                <li>Portfolio & business websites</li>
              </ul>
            </div>

            {/* Goals */}
            <div>
              <h3 className="text-xl font-bold mb-2">
                My Focus
              </h3>

              <p>
                I focus on writing <b>clean, maintainable code</b>, building 
                intuitive UIs, and delivering projects that are fast, secure, 
                and scalable. My goal is to continuously grow as a developer 
                and build digital solutions that deliver real value.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutPage