import React from 'react';
import { Section } from '../components/Section';
import { Monitor, Book, Bus, ShieldCheck, Gamepad2, FlaskConical } from 'lucide-react';

export const Facilities: React.FC = () => {
  const facilities = [
    { title: 'Computer Lab', desc: 'Modern computers with internet access for ICT lessons.', icon: <Monitor size={32} /> },
    { title: 'Library', desc: 'Well-stocked with books to encourage reading culture.', icon: <Book size={32} /> },
    { title: 'Science Area', desc: 'Resources for practical science demonstrations.', icon: <FlaskConical size={32} /> },
    { title: 'School Bus', desc: 'Safe transportation service for students.', icon: <Bus size={32} /> },
    { title: 'Playground', desc: 'Safe play area for early years development.', icon: <Gamepad2 size={32} /> },
    { title: 'Security', desc: 'CCTV cameras and trained security personnel.', icon: <ShieldCheck size={32} /> },
  ];

  const facilityImages = [
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwFUck7VzTYTk6UKhjgMD65UdE3QZ0OIF_h7_l9KnHQkk_VvX7bBD0w8vEy1uny1Hvq9HnYI0rYB8tGcj5ET1PhYoPT_9BOlH-M1b1EONGvZ7Nk4BIkma4tFZy81LLGmHC59d8=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzFOViK4rpJES9WomVcRMCKBLz3S8XvIdudsSzXQ_PRUO0k2d7U_OYV9PMmxXm2rbZ5nK-1ezGvdlsTgpAwaPh7YDMy1e8fOKyW4zax5g_NZy_vY1Sv8uCVSjJNflXq7dg5gOXzaA=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwMUUWkYBq9grQq7Yz3MSXx00ljMqi5xvhv_rnMsw5f3qtyPdf3gO2zAxu4nI2MYCcESDrqurBdq41b87pqmb00grwe5CKRHTFOVYqDFYbOKJKC--r5ds_A1m45Dzj3lbfwB0A=s680-w680-h510-rw"
  ];

  return (
    <div>
       <div className="bg-school-gold text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Facilities</h1>
        <p className="text-xl text-yellow-100">Creating a Conducive Environment for Learning</p>
      </div>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((fac, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all text-center group">
              <div className="w-16 h-16 bg-gray-100 text-school-dark rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-school-gold group-hover:text-white transition-colors">
                {fac.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{fac.title}</h3>
              <p className="text-gray-600">{fac.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {facilityImages.map((img, index) => (
             <div key={index} className="overflow-hidden rounded-xl shadow-lg h-64">
               <img 
                src={img} 
                alt={`Facility view ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
               />
             </div>
           ))}
        </div>
      </Section>
    </div>
  );
};