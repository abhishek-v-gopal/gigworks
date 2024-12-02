"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { Textarea } from "@nextui-org/input";

// Define the form data type
interface FormData {
  profileImage: File | null;
  coverImage: File | null;
  businessName: string;
  businessDescription: string;
  whatsAppNumber: string;
  websiteURL: string;
  businessCategory: string;
  ownerName: string;
  emailAddress: string;
  businessType: string;
  [key: string]: string | File | null;
}

const MediaAndBranding = () => {
  const [formData, setFormData] = useState<FormData>({
    profileImage: null,
    coverImage: null,
    businessName: "",
    businessDescription: "",
    whatsAppNumber: "",
    websiteURL: "",
    businessCategory: "",
    ownerName: "",
    emailAddress: "",
    businessType: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const renderFormField = (
    name: string,
    label: string,
    type: string,
    placeholder?: string,
    required: boolean = true,
    options?: { value: string; label: string }[]
  ) => (
    <div key={name}>
      <label
        htmlFor={name}
        className="block text-base sm:text-xl font-bold pb-2 text-gray-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={
            typeof formData[name] === "string" ? (formData[name] as string) : ""
          }
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          required={required}
        >
          <option value="">Select {label}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <Textarea
          id={name}
          name={name}
          value={
            typeof formData[name] === "string" ? (formData[name] as string) : ""
          }
          onChange={handleInputChange}
          placeholder={placeholder}
          minRows={1}
          className="w-full px-3 border border-gray-300 rounded-md focus:border-transparent focus:ring-0"
          required={required}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={
            typeof formData[name] === "string" ? (formData[name] as string) : ""
          }
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          required={required}
        />
      )}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navigation */}
      <nav className="flex flex-col sm:flex-row justify-between items-center p-4 w-full">
        <div className="flex justify-center sm:justify-start w-full sm:w-auto mb-4 sm:mb-0">
          <Image
            src="https://pub-5c418d5b44bb4631a94f83fb5c3b463d.r2.dev/gigworksblk.svg"
            alt="Logo"
            width={150}
            height={50}
            className="max-w-[206px] max-h-[216px]"
          />
        </div>
        <div className="flex items-center">
          <div className="flex justify-center items-center space-x-2">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-black rounded-full flex items-center justify-center">
              <h1 className="text-white text-center text-sm sm:text-base">1</h1>
            </div>
            <div className="hidden sm:flex items-center">
              <div className="w-4 h-1 rounded-full bg-gray-300 mr-1"></div>
              <div className="w-8 h-1 rounded-full bg-gray-300"></div>
              <div className="w-4 h-1 rounded-full bg-gray-300 ml-1"></div>
            </div>
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <h1 className="text-black text-center text-sm sm:text-base">2</h1>
            </div>
            <div className="hidden sm:flex items-center">
              <div className="w-4 h-1 rounded-full bg-gray-300 mr-1"></div>
              <div className="w-8 h-1 rounded-full bg-gray-300"></div>
              <div className="w-4 h-1 rounded-full bg-gray-300 ml-1"></div>
            </div>
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <h1 className="text-black text-center text-sm sm:text-base">3</h1>
            </div>
          </div>
        </div>
      </nav>

      <hr className="border-gray-200" />

      {/* Main Content */}
      <div className="flex-grow bg-white px-4 sm:px-8 md:px-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-4 text-center sm:text-left">
          Media & Branding
        </h1>

        {/* Image Upload Section */}
        <div className="flex flex-col sm:flex-row -mx-2">
          {["profileImage", "coverImage"].map((imageType) => (
            <div key={imageType} className="w-full sm:w-1/2 px-2 mb-4">
              <label
                htmlFor={imageType}
                className="block text-base sm:text-xl font-bold pb-2 text-gray-700"
              >
                Upload {imageType === "profileImage" ? "Profile" : "Cover"}{" "}
                Image
                <span className="text-red-500"> *</span>
                <div className="border-2 bg-gray-200 rounded-lg p-4 hover:border-gray-500 transition flex items-center justify-center h-20">
                  <input
                    type="file"
                    id={imageType}
                    name={imageType}
                    onChange={handleInputChange}
                    className="hidden"
                    required
                  />
                  <p className="text-sm sm:text-base">
                    Drag and drop or click to upload
                  </p>
                </div>
              </label>
            </div>
          ))}
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-4 text-center sm:text-left">
          Business Overview
        </h1>

        <div className="flex flex-col lg:flex-row -mx-2">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 px-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              {renderFormField(
                "businessName",
                "Business Name",
                "text",
                "Enter your business name"
              )}
              {renderFormField(
                "businessDescription",
                "Business Description",
                "textarea",
                "Describe your business briefly"
              )}
              {renderFormField(
                "whatsAppNumber",
                "WhatsApp Number",
                "tel",
                "Enter your WhatsApp number"
              )}
              {renderFormField(
                "websiteURL",
                "Website Link",
                "url",
                "Enter your website URL (optional)",
                false
              )}
            </form>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 px-2 mt-4 lg:mt-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              {renderFormField(
                "businessCategory",
                "Business Category",
                "select",
                undefined,
                true,
                [
                  { value: "retail", label: "Retail" },
                  { value: "service", label: "Service" },
                  { value: "food", label: "Food & Beverage" },
                  { value: "technology", label: "Technology" },
                  { value: "consulting", label: "Consulting" },
                ]
              )}
              {renderFormField(
                "businessType",
                "Business Type",
                "select",
                undefined,
                true,
                [
                  { value: "soleProprietorship", label: "Sole Proprietorship" },
                  { value: "partnership", label: "Partnership" },
                  { value: "corporation", label: "Corporation" },
                  {
                    value: "limitedLiabilityCompany",
                    label: "Limited Liability Company",
                  },
                ]
              )}
              {renderFormField(
                "ownerName",
                "Owner's/Manager's Name",
                "text",
                "Enter owner or manager name"
              )}
              {renderFormField(
                "emailAddress",
                "Email Address",
                "email",
                "Enter your email address"
              )}
            </form>

            <div className="flex justify-center sm:justify-end mt-4">
              <button
                type="submit"
                onClick={() => (window.location.href = "/signup/2")}
                className="bg-[#303030] text-white px-6 py-2 rounded-md w-full sm:w-auto"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-0 px-2 py-4 flex justify-between items-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://gigwork.co.in/"
            className="hover:underline"
            target="_blank"
          >
            Gigwork
          </a>
          . All rights reserved.
        </p>
        <div className="text-sm text-gray-500 space-x-2">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediaAndBranding;