import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div>
       <div className="bg-school-dark text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-300">We'd love to hear from you</p>
      </div>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-school-dark mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Whether you have questions about admissions, fees, or want to schedule a tour, our friendly staff is here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-school-gold text-white p-3 rounded-full"><MapPin size={24}/></div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Our Location</h4>
                  <p className="text-gray-600">HM7M+777, Oblogo Road, Weija, Ghana</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-school-gold text-white p-3 rounded-full"><Phone size={24}/></div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Phone Number</h4>
                  <p className="text-gray-600">024 371 6049</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="bg-school-gold text-white p-3 rounded-full"><Mail size={24}/></div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Email Address</h4>
                  <p className="text-gray-600">admissions@brightervision.edu.gh</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="bg-school-gold text-white p-3 rounded-full"><Clock size={24}/></div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Operating Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 7:00am - 4:00pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-school-dark mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-gold focus:outline-none" />
                <input type="text" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-gold focus:outline-none" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-gold focus:outline-none" />
              <textarea rows={4} placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-school-gold focus:outline-none"></textarea>
              <Button fullWidth>Send Message</Button>
            </form>
          </div>

        </div>
      </Section>

      {/* Map Embed Mock */}
      <div className="h-96 w-full bg-gray-200">
        <iframe 
          title="School Location"
          width="100%" 
          height="100%" 
          frameBorder="0" 
          style={{border:0}} 
          src="https://maps.google.com/maps?q=HM7M%2B777%2C%20Oblogo%20Road%2C%20Weija&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};