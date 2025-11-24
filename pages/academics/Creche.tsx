import React from 'react';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { Heart, Clock, ShieldCheck, Music } from 'lucide-react';

export const Creche: React.FC = () => {
  return (
    <div>
      <div className="bg-school-gold text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Creche Department</h1>
        <p className="text-xl text-yellow-100">A Home Away From Home (6 Months - 2 Years)</p>
      </div>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-school-dark mb-6">Nurturing Care & Early Development</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our Creche provides a warm, safe, and stimulating environment for your little ones. We understand that leaving your baby is a big step, which is why we focus on creating a "home away from home" atmosphere where every child feels loved and secure.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our dedicated caregivers are trained in early childhood development and focus on sensory play, motor skills, and social interaction to give your child the best start in life.
            </p>
            <div className="flex gap-4">
              <Link to="/admissions">
                <Button>Apply Now</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">Schedule a Visit</Button>
              </Link>
            </div>
          </div>
          <div>
            <img 
              src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwFUck7VzTYTk6UKhjgMD65UdE3QZ0OIF_h7_l9KnHQkk_VvX7bBD0w8vEy1uny1Hvq9HnYI0rYB8tGcj5ET1PhYoPT_9BOlH-M1b1EONGvZ7Nk4BIkma4tFZy81LLGmHC59d8=s680-w680-h510-rw" 
              alt="Happy baby in creche" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover" 
            />
          </div>
        </div>
      </Section>

      <Section background="grey">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-school-dark mb-4">Key Features</h2>
          <div className="w-20 h-1 bg-school-gold mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Heart size={32} />, title: 'Loving Caregivers', desc: 'Experienced staff who provide personalized attention and warmth.' },
            { icon: <ShieldCheck size={32} />, title: 'Safe Environment', desc: 'Child-proofed spaces, sanitized toys, and constant supervision.' },
            { icon: <Music size={32} />, title: 'Sensory Play', desc: 'Music, colorful toys, and textures to stimulate brain development.' },
            { icon: <Clock size={32} />, title: 'Flexible Hours', desc: 'Operating from 7am to 4pm to support working parents.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center border-t-4 border-school-gold">
              <div className="text-school-gold flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-3xl font-bold text-school-dark mb-8 text-center">A Typical Day</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { time: '7:00 AM - 8:30 AM', activity: 'Arrival & Free Play' },
            { time: '8:30 AM - 9:30 AM', activity: 'Breakfast & Hygiene' },
            { time: '9:30 AM - 10:30 AM', activity: 'Circle Time (Songs & Rhymes)' },
            { time: '10:30 AM - 11:30 AM', activity: 'Sensory Activities / Outdoor Stroll' },
            { time: '11:30 AM - 12:30 PM', activity: 'Lunch Time' },
            { time: '12:30 PM - 2:30 PM', activity: 'Nap Time' },
            { time: '2:30 PM - 3:30 PM', activity: 'Snack & Story Time' },
            { time: '3:30 PM - 4:00 PM', activity: 'Pickup' },
          ].map((slot, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-4 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
              <span className="font-bold text-school-gold min-w-[180px]">{slot.time}</span>
              <span className="text-gray-700">{slot.activity}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};