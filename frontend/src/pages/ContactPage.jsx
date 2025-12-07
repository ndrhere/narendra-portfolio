import React from "react";
import { useState, useEffect } from "react";
import { submitContact } from "../lib/api.js";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const ContactPage = () => {
  const location = useLocation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (location.state?.enquiry) {
      setForm((prev) => ({ ...prev, message: location.state.enquiry }));
    }
  }, []);

  const { mutate: contactFormMutation, isPending } = useMutation({
    mutationFn: submitContact,
    onSuccess: () => {
      toast.success("Message sent successfully");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    contactFormMutation(form);
  };
  return (
    <div className="min-h-screen bg-base-200 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
          <p className="text-lg opacity-80">
            Have a project in mind or a job opportunity? Let’s connect and build
            something awesome 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body space-y-4">
              <h2 className="text-xl font-bold">Send Me a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                  }
                  required
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                  }
                  required
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={(event) =>
                    setForm({ ...form, phone: event.target.value })
                  }
                  placeholder="Phone (optional)"
                  className="input input-bordered w-full"
                />

                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(event) =>
                    setForm({ ...form, message: event.target.value })
                  }
                  required
                  placeholder="Write your message here..."
                  className="textarea textarea-bordered w-full resize-none"
                />

                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isPending}
                >
                  {isPending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body space-y-6">
              <h2 className="text-xl font-bold">Direct Contact</h2>

              <p className="leading-relaxed">
                If you prefer direct communication, feel free to reach out via
                email or connect on my professional profiles:
              </p>

              <div className="space-y-3 text-lg">
                <p>
                  📧 <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:narendra.dev@example.com"
                    className="link link-primary"
                  >
                    ndrhere550@gmail.com
                  </a>
                </p>

                <p>
                  💼 <span className="font-semibold">LinkedIn:</span>{" "}
                  <a
                    href="https://linkedin.com/in/narendra-chawda-0165a715b"
                    target="_blank"
                    rel="noreferrer"
                    className="link link-primary"
                  >
                    https://linkedin.com/in/narendra-chawda-0165a715b
                  </a>
                </p>

                <p>
                  💻 <span className="font-semibold">GitHub:</span>{" "}
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="link link-primary"
                  >
                    github.com/ndrhere
                  </a>
                </p>
              </div>

              <div className="alert alert-info">
                I usually respond within <b>24 hours</b>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
