"use client";
import { useState } from "react";
import tg from "@/public/tg.png";
import Image from "next/image";
import Link from "next/link";

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
        "Please fill in all required fields and consent to data storage."
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
    <section className="h-fit bg-gradient-to-b from-[#28273D] to-[#392248] pt-8 px-6 md:px-24">
      <div className="bg-gradient-to-b from-[#382347] to-[#392248] p-8 rounded-lg shadow-lg ">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[2.313rem] font-roborto font-bold text-center text-[#6EC1E4] mb-6">
            Contact Us
          </h2>
          <Link href={'https://t.me/widsupport'}>
          <Image src={tg} width={200} height={200} alt="tg_support"></Image>
          </Link>
        </div>
      </div>
    </section>
  );
}
