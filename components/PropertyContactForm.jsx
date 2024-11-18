"use client";
import React, { useEffect } from "react";
import { useActionState } from "react-dom";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import addMessage from "@/app/actions/addMessage";
import SubmitMessageButton from "./SubmitMessageButton";

const PropertyContactForm = ({ property }) => {
  const { data: session } = useSession();
  const [state, formAction] = useActionState(addMessage, {});

  useEffect(() => {
    if (state.error) toast.error(state.error);
    if (state.submitted) toast.success("Message sent successfully");
  }, [state]);

  if (state.submitted) {
    return <p className="text-green-500 mb-4">Your message has been sent.</p>;
  }

  return (
    session && (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-6">Contact Venue Team</h3>
        <form action={formAction}>
          <input
            type="hidden"
            name="property"
            id="property"
            defaultValue={property._id}
          />
          <input
            type="hidden"
            name="recipient"
            id="recipient"
            defaultValue={property.owner}
          />

          {/* Name Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              aria-label="Your Full Name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              aria-label="Your Email Address"
              required
            />
          </div>

          {/* Phone Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              id="phone"
              name="phone"
              type="text"
              placeholder="Enter your phone number (optional)"
              aria-label="Your Phone Number"
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="body"
            >
              Message:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44"
              id="body"
              name="body"
              placeholder="Type your message here..."
              aria-label="Your Message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <SubmitMessageButton />
          </div>
        </form>
      </div>
    )
  );
};

export default PropertyContactForm;
