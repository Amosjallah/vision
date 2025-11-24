import React from 'react';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { Palette, Users, BookOpen, Smile } from 'lucide-react';

export const Nursery: React.FC = () => {
  return (
    <div>
      <div className="bg-school-dark text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Nursery Department</h1>
        <p className="text-xl text-gray-300">Building Foundations (2 - 4 Years)</p>
      </div>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-school-dark mb-6">Play-Based Learning & Discovery</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              In our Nursery department, education is a joyful adventure. We believe that children learn best through play. Our curriculum is designed to foster curiosity, social skills, and the early foundations of literacy and numeracy.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Children engage in hands-on activities, art, storytelling, and group games that help them develop confidence and independence while interacting with their peers.
            </p>
            <div className="flex gap-4">
              <Link to="/admissions">
                <Button>Apply Now</Button>
              </Link>
            </div>
          </div>
          <div>
            <img 
              src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzFOViK4rpJES9WomVcRMCKBLz3S8XvIdudsSzXQ_PRUO0k2d7U_OYV9PMmxXm2rbZ5nK-1ezGvdlsTgpAwaPh7YDMy1e8fOKyW4zax5g_NZy_vY1Sv8uCVSjJNflXq7dg5gOXzaA=s680-w680-h510-rw" 
              alt="Children playing" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover" 
            />
          </div>
        </div>
      </Section>

      <Section background="grey">
        <div className="text-center max-w-2xl mx-auto mb-12">
           <h2 className="text-3xl font-bold text-school-dark mb-4">Focus Areas</h2>
           <div className="w-20 h-1 bg-school-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Palette size={32} />, title: 'Creative Arts', desc: 'Painting, coloring, and crafting to develop fine motor skills.' },
            { icon: <BookOpen size={32} />, title: 'Story Time', desc: 'Developing listening, vocabulary, and imagination.' },
            { icon: <Users size={32} />, title: 'Social Skills', desc: 'Learning to share, take turns, and play cooperatively.' },
            { icon: <Smile size={32} />, title: 'Emotional Growth', desc: 'Understanding feelings and self-expression in a safe space.' },
          ].map((item, idx) => (
             <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center border-b-4 border-transparent hover:border-school-gold transition-colors">
               <div className="text-school-gold flex justify-center mb-4 bg-yellow-50 w-16 h-16 rounded-full items-center mx-auto">{item.icon}</div>
               <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
               <p className="text-sm text-gray-600">{item.desc}</p>
             </div>
          ))}
        </div>
      </Section>
    </div>
  );
};