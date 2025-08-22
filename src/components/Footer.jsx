import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#671A1B] text-gray-300 pt-10  w-full">
      {/* Top Section */}
      <div className="px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 border-b border-red-800 pb-10 text-left">
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-semibold text-white text-left">
              Codecelix
            </h2>
            <p className="mt-3 text-sm leading-6 text-left text-white">
              At Codecelix, our mission is simple yet impactful: to bridge the
              gap between talented professionals and forward-thinking companies.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-5">
              {/* Facebook */}
              <a
                href="#"
                className="w-5 h-5 flex items-center justify-center rounded-full  hover:bg-blue-600 transition"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                  alt="Facebook"
                  className="w-5 h-5 invert"
                />
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-sky-500 transition"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg"
                  alt="Twitter"
                  className="w-5 h-5 invert"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-blue-700 transition"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-5 h-5 invert"
                />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-pink-600 transition"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                  alt="Instagram"
                  className="w-5 h-5 invert"
                />
              </a>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className="text-white font-semibold text-left">
              For Job Seekers
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-left text-gray-400 ">
              <li>
                <a href="#" className="hover:text-white">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Career Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Salary Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Job Alerts
                </a>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-white font-semibold text-left">
              For Employers
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-left text-gray-400 ">
              <li>
                <a href="#" className="hover:text-white">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Browse Candidates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Recruitment Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Enterprise Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-left">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-left text-gray-400 ">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 py-6 px-6 lg:px-12 border-t border-red-900">
        <p>© 2025 Codecelix. All rights reserved.</p>
        <div className="flex space-x-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Cookies Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
