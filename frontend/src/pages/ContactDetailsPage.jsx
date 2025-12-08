import React from "react";
import {
  Phone,
  Mail,
  Globe,
  MessageCircle,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen px-6 py-15">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Let's <span className="text-primary">Talk</span>
          </h1>

          <p className="mt-3 opacity-80 text-lg max-w-xl mx-auto">
            Have a project in mind or want to collaborate?
            Reach out — I’m always open to discussing ideas and opportunities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* PHONE */}
          <div className="card bg-base-100 shadow-md border border-base-300 hover:border-primary transition">
            <div className="card-body items-center text-center space-y-3">

              <Phone size={38} className="text-primary" />

              <h2 className="card-title">
                Phone
              </h2>

              <a
                href="tel:+918767877987"
                className="link link-primary text-lg"
              >
                +918767877987
              </a>
            </div>
          </div>

          {/* EMAIL */}
          <div className="card bg-base-100 shadow-md border border-base-300 hover:border-secondary transition">
            <div className="card-body items-center text-center space-y-3">

              <Mail size={38} className="text-secondary" />

              <h2 className="card-title">
                Email
              </h2>

              <a
                href="https://mail.google.com/mail/?view=cm&to=ndrhere550@gmail.com"
                target="_blank"
                className="link link-secondary text-lg"
              >
                ndrhere550@gmail.com
              </a>
            </div>
          </div>

          {/* WHATSAPP */}
          <div className="card bg-base-100 shadow-md border border-base-300 hover:border-success transition">
            <div className="card-body items-center text-center space-y-3">

              <MessageCircle size={38} className="text-success" />

              <h2 className="card-title">
                WhatsApp
              </h2>

              <a
                href="https://wa.me/918767877987?text=Hello%20Narendra%2C%20I%20visited%20your%20portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-sm"
              >
                Start Chat
              </a>
            </div>
          </div>

          {/* WEBSITE */}
          <div className="card bg-base-100 shadow-md border border-base-300 hover:border-accent transition">
            <div className="card-body items-center text-center space-y-3">

              <Globe size={38} className="text-accent" />

              <h2 className="card-title">
                Website
              </h2>

              <a
                href="https://narendra-portfolio-gnod.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-accent text-lg"
              >
                https://narendra-portfolio-gnod.onrender.com
              </a>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-2">
            Ready to start your next project?
          </h3>

          <p className="opacity-70 mb-6">
            Let’s build something great together.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&to=ndrhere550@gmail.com"
            target="_blank"
            className="btn btn-primary"
          >
            Send Email
          </a>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
