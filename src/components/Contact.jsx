import React, { useState } from "react";
import MailIcon from "../assets/Framemail.png";
import PhoneIcon from "../assets/Framecall.png";
import LocationIcon from "../assets/Framelocation.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch with Us</h2>
          <p className="mt-2 text-gray-600">
            Have questions or need assistance? Our team is here to help you with your job search or recruitment needs.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 ${
                    errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#7d0f18]"
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 ${
                    errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#7d0f18]"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 ${
                  errors.subject ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#7d0f18]"
                }`}
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Please describe your inquiry..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 ${
                  errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-[#7d0f18]"
                }`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Button aligned left */}
            <div className="text-left">
              <button
                type="submit"
                className="px-6 py-3 bg-[#7d0f18] text-white rounded-lg font-medium hover:bg-[#5c0b12] transition"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Right Side Contact Info */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-left">Get In Touch</h3>

            <div className="space-y-5 text-gray-700 text-left">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <img src={MailIcon} alt="Mail" className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-600">hrcodecelix@gmail.com</p>
                  <p className="text-gray-600">info@career.codecelix.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <img src={PhoneIcon} alt="Phone" className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <img src={LocationIcon} alt="Location" className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-gray-600">
                    123 Career Street <br />
                    San Francisco, CA 94105 <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-8 text-gray-700 text-left">
              <h4 className="font-semibold mb-2">Office Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
