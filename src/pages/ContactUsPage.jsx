import React, { useState } from 'react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{ 
            backgroundImage: "url('/images/contact.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        {/* Subtle Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-4 tracking-wide drop-shadow-lg">
              Contact Us
            </h1>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#B84A2B' }}></div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <p className="text-xl md:text-2xl text-gray-600 font-light mb-6 italic text-center">
          Let's Create Together
        </p>
        <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed text-justify">
          <p>
            Have a project in mind? Whether you're looking to transform your space or simply have questions about our services, we'd love to hear from you. At Livio Interiors, every conversation is the beginning of something exceptional.
          </p>
          <p>
            Reach out to us and let's start crafting spaces that inspire.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 text-gray-600 mt-8">
          <span className="text-2xl" style={{ color: '#B84A2B' }}>💬</span>
          <p className="text-base md:text-lg font-medium">
            Your vision, our expertise.
          </p>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Email Card */}
          <div className="text-center p-8 bg-gray-50 hover:bg-gray-100 transition">
            <div className="text-4xl mb-4" style={{ color: '#B84A2B' }}>
              ✉️
            </div>
            <h3 className="text-xl font-medium mb-3 text-gray-800">Email Us</h3>
            <a 
              href="mailto:Info@livioprojects.com"
              className="text-gray-600 hover:text-gray-900 transition break-all"
            >
              Info@livioprojects.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="text-center p-8 bg-gray-50 hover:bg-gray-100 transition">
            <div className="text-4xl mb-4" style={{ color: '#B84A2B' }}>
              📞
            </div>
            <h3 className="text-xl font-medium mb-3 text-gray-800">Call Us</h3>
            <a 
              href="tel:+919110844903"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              +91 91108 44903
            </a>
          </div>

          {/* Social Media Card */}
          <div className="text-center p-8 bg-gray-50 hover:bg-gray-100 transition">
            <div className="text-4xl mb-4" style={{ color: '#B84A2B' }}>
              🌐
            </div>
            <h3 className="text-xl font-medium mb-3 text-gray-800">Follow Us</h3>
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.instagram.com/livio_india?igsh=MWs5M2k3OWluMmRlNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/livio-living-space/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-800">
            Send Us a Message
          </h2>
          
          <div className="space-y-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                FIRST NAME
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-gray-500 transition"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LAST NAME
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-gray-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-gray-500 transition"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex flex-wrap gap-2">
              <select 
                className="px-3 py-3 bg-white border border-gray-300 focus:outline-none focus:border-gray-500 w-[30%] sm:w-auto"
                defaultValue="IND"
              >
                <option value="IND">IND</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              <span className="flex items-center justify-center px-3 bg-white border border-gray-300 text-gray-600 w-[20%] sm:w-auto">
                +91
              </span>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="MOBILE NUMBER"
                className="flex-1 min-w-0 px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-gray-500 transition"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SUBJECT
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-gray-500 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                MESSAGE
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-gray-500 transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full py-4 px-6 text-white font-medium tracking-wider transition hover:opacity-90 transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: '#B84A2B' }}
              >
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Contact Us Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-4" style={{ color: '#B84A2B' }}>
              🏠
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">Project Consultation</h3>
            <p className="text-gray-600">
              Discuss your vision and get expert guidance
            </p>
          </div>
          <div>
            <div className="text-4xl mb-4" style={{ color: '#B84A2B' }}>
              💼
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">Business Inquiries</h3>
            <p className="text-gray-600">
              Partnership opportunities and collaborations
            </p>
          </div>
          <div>
            <div className="text-4xl mb-4" style={{ color: '#B84A2B' }}>
              🎨
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">Design Services</h3>
            <p className="text-gray-600">
              Learn about our comprehensive interior solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;