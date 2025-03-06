"use client";
import { useState } from "react";
import Head from "next/head";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      setFormStatus({
        success: false,
        error: true,
        message: "Please fill in all fields.",
      });
      return;
    }

    // Send form data to Google Apps Script
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzfE7AmfB1XqU3GcKNKUUztw6U_AgGnbZKVMjruuGrySQuqXRznd9C_EC6qXvlouJ7s/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (data.result === "success") {
        setFormStatus({
          success: true,
          error: false,
          message: "Your message has been sent successfully!",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setFormStatus({
          success: false,
          error: true,
          message: "There was an error sending your message. Please try again.",
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setFormStatus({
        success: false,
        error: true,
        message: "There was an error sending your message. Please try again.",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Optivoxx Technologies</title>
        <meta
          name="description"
          content="Contact Optivoxx Technologies for your inquiries"
        />
      </Head>
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold text-center mb-6">Contact Us</h1>

        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="block text-lg font-medium">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md"
                placeholder="Your Phone Number"
                required
              />
            </div>

            {/* Subject Input */}
            <div>
              <label htmlFor="subject" className="block text-lg font-medium">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md"
                placeholder="Subject"
                required
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md"
                placeholder="Your Message"
                rows={4}
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition duration-300"
              >
                Send Message
              </button>
            </div>

            {/* Status Message */}
            {formStatus.message && (
              <div
                className={`mt-4 text-center p-3 rounded-md ${
                  formStatus.success
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </main>
    </>
  );
}
