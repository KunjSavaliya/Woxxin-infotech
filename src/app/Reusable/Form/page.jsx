'use client';
import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    position: '',
    resume: null,
    additionalInfo: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false); // NEW

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    if (!formData.fullName || !formData.email || !formData.position || !formData.resume) {

      setLoading(false);
      return;
    }

    const body = new FormData();
    body.append('fullName', formData.fullName);
    body.append('email', formData.email);
    body.append('position', formData.position);
    body.append('resume', formData.resume);
    body.append('additionalInfo', formData.additionalInfo);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        body,
      });

      const result = await res.json();
      if (result.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: 'Submitted!',
          text: 'Your application has been submitted successfully.',
          showConfirmButton: false,
          timer: 2500
        });
        setFormData({
          fullName: '',
          email: '',
          position: '',
          resume: null,
          additionalInfo: '',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: result.message || 'Something went wrong!',
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong while submitting the form.',
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="max-w-xl mx-auto rounded-2xl text-white mt-10 px-4 sm:px-6 md:px-8 lg:px-0">


      <form onSubmit={handleSubmit} encType="multipart/form-data" className="mt-5 space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#1c1b2f] border border-gray-600 focus:outline-none"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#1c1b2f] border border-gray-600 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Position of interest</label>
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#1c1b2f] border border-gray-600 focus:outline-none"
          >
            <option value="">Select a position</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Marketing Intern">Marketing Intern</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Resume (PDF or DOC)</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="block text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Additional Information</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#1c1b2f] border border-gray-600 focus:outline-none"
            rows="4"
            placeholder="Tell us more about yourself..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 disabled:opacity-50"
          disabled={loading}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
          )}
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
