"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import MobileAppSection from "@/app/Reusable/MobileSection";
import { useRouter } from "next/navigation";

function ContactUs() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.title = "Contact Us - Woxxin Solution";
  }, []);

  // const handleClick = () => {
  //     router.push('/components/pages/career');
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    if (!form.policyAgreed.checked) {
      Swal.fire({
        icon: "warning",
        title: "Please agree to the privacy policy",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        form.reset();
        Swal.fire({
          icon: "success",
          title: "Submitted!",
          text: "Your message has been sent successfully.",
          timer: 2500,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to send",
          text: data.message || "Something went wrong!",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was a problem submitting the form.",
      });
    }

    setLoading(false);
  };

  return (
    <>
      <MobileAppSection
        bgImageSrc="/HomePages/Homedesign.png"
        logoSrc="/HomePages/Google.png"
        iconSrc="/HomePages/ContectRocket.webp"
        title="Our team is ready for anything"
        title1="Share your contact details so we can discuss about the project and collaboration opportunities, or reach out to us directly!"
        bgImageClassNames="h-full"
        iconClassNames="md:w-auto lg:w-full h-[400px]"
      />

      <div className="bg-[#110f27] p-2 md:p-10 mt-[-3px]">
        <div className=" flex items-center justify-center p-4 mt-[-1px]">
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="w-full p-6 space-y-6 text-white rounded-lg max-w-[92rem]"
          >
            <div>
              <label className="block mb-2">
                Company Detail Company/Developer name
              </label>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  name="teamSize"
                  type="text"
                  required
                  placeholder="Team size"
                  className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9]"
                />
                <input
                  name="country"
                  type="text"
                  required
                  placeholder="Country"
                  className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9]"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">
                Company/Developer point of contact
              </label>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  name="firstName"
                  type="text"
                  required
                  placeholder="First Name"
                  className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9]"
                />
                <input
                  name="lastName"
                  type="text"
                  required
                  placeholder="Last Name"
                  className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9]"
                />
              </div>
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="w-full mt-4 px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9]"
              />
            </div>

            <div>
              <label className="block mb-2">Portfolio link/Gameplay link</label>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  name="portfolioAnswer"
                  required
                  type="text"
                  placeholder="Yes/No"
                  className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9]"
                />
                <input
                  name="portfolioLink"
                  required
                  type="url"
                  placeholder="Link URL"
                  className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9]"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">
                Have you worked with other publishers
              </label>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  name="publisherAnswer"
                  required
                  type="text"
                  placeholder="Yes/No"
                  className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9]"
                />
                <input
                  name="publisherLink"
                  required
                  type="text"
                  placeholder="Yes: Link Publisher"
                  className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9]"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">Message</label>
              <textarea
                name="message"
                required
                placeholder="Leave us a message..."
                className="w-full px-5 py-5 rounded-md bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#5961F9]"
              ></textarea>
            </div>

            <div className="flex items-center space-x-2">
              <input
                id="policyAgreed"
                required
                name="policyAgreed"
                type="checkbox"
                className="accent-blue-500"
              />
              <label
                htmlFor="policyAgreed"
                className="text-sm cursor-pointer select-none"
              >
                You agree to our friendly privacy policy
              </label>
            </div>
          </form>
        </div>
      </div>

      <div className="relative bg-[#110f27]">
        <Image
          src="/HomePages/Contfooter.png"
          alt="Main Background"
          className="w-full mt-[-4px] h-[250px] xl:h-[250px]"
          width={1920}
          height={700}
        />
        <div className="absolute top-0 left-0 flex justify-center w-full h-full items-top p-8">
          <div className="w-full max-w-xl">
            <button
              type="submit"
              form="contact-form"
              disabled={loading}
              className="w-full py-3 text-white border border-[#5961F9] rounded-md hover:bg-[#5961F9]/10 transition duration-300 p-10"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mx-auto text-white"
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
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
