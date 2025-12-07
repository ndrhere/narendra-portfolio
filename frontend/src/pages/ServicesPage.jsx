import React from "react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <section
      id="services"
      className="py-10 px-6 md:px-20  text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12 mt-5">
        My <span className="text-cyan-400">Services</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* BASIC CARD */}
        <div className="card bg-[#0b182b] border border-gray-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 rounded-2xl p-6">
          <h3 className="text-2xl font-bold mb-4">Basic</h3>

          <ul className="space-y-2 text-gray-300">
            <li>✔ 1 Page Website</li>
            <li>✔ Responsive Design</li>
            <li>✔ Basic UI Components</li>
            <li>✔ Delivery: 4 Days</li>
          </ul>

          <div className="mt-6">
            <p className="text-3xl font-bold text-cyan-400">₹7200</p>
            <p className="text-gray-400 text-sm">Starting Price</p>
          </div>

          <Link to="/contact" state={{ enquiry: "I'm Interested in Basic service plan" }}>
            <button className="btn btn-primary w-full mt-6 rounded-full bg-cyan-500 border-none">
              Get Started
            </button>
          </Link>
        </div>

        {/* STANDARD CARD */}
        <div className="card bg-[#0b182b] border border-cyan-400 shadow-lg shadow-cyan-500/30 rounded-2xl p-6 scale-105">
          <h3 className="text-2xl font-bold mb-4">Standard</h3>

          <ul className="space-y-2 text-gray-300">
            <li>✔ 3–4 Page Website</li>
            <li>✔ Fully Responsive</li>
            <li>✔ Custom UI Components</li>
            <li>✔ API Integration</li>
            <li>✔ Delivery: 7 Days</li>
          </ul>

          <div className="mt-6">
            <p className="text-3xl font-bold text-cyan-400">₹13,500</p>
            <p className="text-gray-400 text-sm">Most Popular</p>
          </div>

          <Link to="/contact" state={{ enquiry: "I'm Interested in Standard service plan" }}>
          <button className="btn w-full mt-6 rounded-full bg-cyan-500 border-none">
            Get Started
          </button>
          </Link>
          
        </div>

        {/* PREMIUM CARD */}
        <div className="card bg-[#0b182b] border border-gray-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 rounded-2xl p-6">
          <h3 className="text-2xl font-bold mb-4">Premium</h3>

          <ul className="space-y-2 text-gray-300">
            <li>✔ Full MERN Website</li>
            <li>✔ Dashboard + Authentication</li>
            <li>✔ Admin Panel + APIs</li>
            <li>✔ Payment Integration</li>
            <li>✔ Delivery: 14 Days</li>
          </ul>

          <div className="mt-6">
            <p className="text-3xl font-bold text-cyan-400">₹27,000</p>
            <p className="text-gray-400 text-sm">Pro Package</p>
          </div>

            <Link to="/contact" state={{ enquiry: "I'm Interested in Premium service plan" }}>
               <button className="btn btn-primary w-full mt-6 rounded-full bg-cyan-500 border-none">
                 Get Started
              </button>
            </Link>
          
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
