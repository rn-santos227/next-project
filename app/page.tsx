"use client"

import Image from 'next/image'
import React, { useState } from 'react';

interface FormValues {
  name: string;
  email: string;
  message: string;
}


export default function Home() {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process form data or submit to the server
    console.log('Form Data:', formValues);
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="p-4 border rounded-md shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 font-bold text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-bold text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 font-bold text-gray-700">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring focus:ring-blue-300"
            rows={4}
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </main>
  )
}
