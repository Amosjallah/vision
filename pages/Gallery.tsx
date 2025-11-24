import React from 'react';
import { Section } from '../components/Section';

export const Gallery: React.FC = () => {
  const images = [
    {
      url: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwFUck7VzTYTk6UKhjgMD65UdE3QZ0OIF_h7_l9KnHQkk_VvX7bBD0w8vEy1uny1Hvq9HnYI0rYB8tGcj5ET1PhYoPT_9BOlH-M1b1EONGvZ7Nk4BIkma4tFZy81LLGmHC59d8=s680-w680-h510-rw",
      caption: "School Activities"
    },
    {
      url: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzFOViK4rpJES9WomVcRMCKBLz3S8XvIdudsSzXQ_PRUO0k2d7U_OYV9PMmxXm2rbZ5nK-1ezGvdlsTgpAwaPh7YDMy1e8fOKyW4zax5g_NZy_vY1Sv8uCVSjJNflXq7dg5gOXzaA=s680-w680-h510-rw",
      caption: "Learning Environment"
    },
    {
      url: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwMUUWkYBq9grQq7Yz3MSXx00ljMqi5xvhv_rnMsw5f3qtyPdf3gO2zAxu4nI2MYCcESDrqurBdq41b87pqmb00grwe5CKRHTFOVYqDFYbOKJKC--r5ds_A1m45Dzj3lbfwB0A=s680-w680-h510-rw",
      caption: "Student Life"
    }
  ];

  return (
    <div>
      <div className="bg-school-dark text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
        <p className="text-xl text-gray-400">Life at Brighter Vision School</p>
      </div>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg group relative cursor-pointer h-72">
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};