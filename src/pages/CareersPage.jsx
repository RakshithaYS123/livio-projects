import React, { useState } from 'react';

const CareersPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    resume: null,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your application! We will review it and get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0"
    style={{ 
      backgroundImage: "url('/images/carrer.png')",
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
        Careers
      </h1>
      <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#B84A2B' }}></div>
    </div>
  </div>
</div>


      {/* Motto Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <p className="text-xl md:text-2xl text-gray-600 font-light mb-4 italic">
          Moto
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
          At Livio Interiors, we believe that great spaces are built by great people. Our motto — <span className="font-medium">"Grow with Quality, Build with Purpose"</span> — reflects our culture of passion, precision, and progress. We empower every individual to think creatively, work with integrity, and deliver excellence in everything they do.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
          Here, careers are crafted with the same care and commitment that go into our designs — built to last, inspired by innovation, and driven by quality.
        </p>
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <span className="text-2xl" style={{ color: '#B84A2B' }}>✨</span>
          <p className="text-base md:text-lg font-medium">
            Join the journey of design and excellence.
          </p>
        </div>
      </div>

      {/* Application Form Section */}
      <div className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-gray-800">
            Apply Now
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


            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                RESUME
              </label>
              <div className="relative">
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-300 cursor-pointer hover:bg-gray-50 transition"
                >
                  <span className="text-gray-600">
                    {formData.resume ? formData.resume.name : 'Choose file'}
                  </span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </label>
              </div>
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
                SUBMIT APPLICATION
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-4" style={{ color: '#B84A2B' }}>
              🎯
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">Innovation</h3>
            <p className="text-gray-600">
              Push boundaries and create exceptional designs
            </p>
          </div>
          <div>
            <div className="text-4xl mb-4" style={{ color: '#B84A2B' }}>
              🤝
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">Collaboration</h3>
            <p className="text-gray-600">
              Work with talented teams on inspiring projects
            </p>
          </div>
          <div>
            <div className="text-4xl mb-4" style={{ color: '#B84A2B' }}>
              📈
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-800">Growth</h3>
            <p className="text-gray-600">
              Develop your skills and advance your career
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;