"use client";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });
  const [wordCount, setWordCount] = useState(0);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "message") {
      setWordCount(value.trim().split(/\s+/).length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message || !formData.consent) {
      setError(
        "Please fill in all required fields and consent to data storage.",
      );
      return;
    }
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form and error state after successful submission
    setFormData({ name: "", email: "", message: "", consent: false });
    setError("");
    setWordCount(0);
  };

  return (
    <section className="h-screen bg-gradient-to-b from-[#28273D] to-[#392248] pt-8 px-24">
      <div className="bg-gradient-to-b from-[#382347] to-[#392248] p-8 rounded-lg shadow-lg">
        <h2 className="text-[2.313rem] font-roborto font-bold text-center text-[#6EC1E4] mb-6">
          Contact us
        </h2>
        <form onSubmit={handleSubmit} className="mx-44 space-y-6">
          {/* {error && ( */}
          {/*   <Alert variant="destructive"> */}
          {/*     <AlertCircle className="h-4 w-4" /> */}
          {/*     <AlertDescription>{error}</AlertDescription> */}
          {/*   </Alert> */}
          {/* )} */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-roborto font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2  border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="E.g. John"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-roborto  font-medium text-white"
            >
              Email Address <span className="text-blue-700">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 p-2 block w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="E.g. john@doe.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block font-roborto text-sm font-medium text-white"
            >
              Message <span className="text-blue-700">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="mt-1 block p-2 w-full  border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  min-h-36"
              placeholder="Enter your message..."
            ></textarea>
            <p className="text-sm text-right text-white mt-1">
              {wordCount} / 100 words
            </p>
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              required
              className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />

            <label htmlFor="consent" className="ml-2 block text-sm text-white">
              Yes, I consent to have this website store my submitted information
              so they can respond to my inquiry.{" "}
              <span className="text-blue-700">*</span>
            </label>
          </div>
          <div>
            <button
              type="submit"
              className=" flex justify-center py-2 px-4 border border-transparent  shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
