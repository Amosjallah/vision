import React from 'react';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { Star, Mic, PenTool, LayoutGrid } from 'lucide-react';

export const Kindergarten: React.FC = () => {
  return (
    <div>
      <div className="bg-school-gold text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Kindergarten (KG)</h1>
        <p className="text-xl text-yellow-100">Sparking Creativity & Readiness (4 - 6 Years)</p>
      </div>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800" 
              alt="Kindergarten classroom" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover" 
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-school-dark mb-6">Preparing for Primary Education</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Kindergarten at Brighter Vision School is a pivotal stage where play meets structured learning. We focus on preparing children for the academic rigors of primary school while maintaining a fun and engaging atmosphere.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our KG program emphasizes reading readiness, basic mathematics, and confident communication. Children learn to work independently and in groups, solving simple problems and exploring the world around them.
            </p>
            <Link to="/admissions">
                <Button>Enroll Your Child</Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section background="grey">
        <h2 className="text-3xl font-bold text-school-dark mb-12 text-center">What We Learn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><PenTool size={24} /></div>
            <h3 className="font-bold text-lg mb-2">Writing</h3>
            <p className="text-sm text-gray-600">Letter formation, name writing, and simple sentences.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><LayoutGrid size={24} /></div>
            <h3 className="font-bold text-lg mb-2">Numeracy</h3>
            <p className="text-sm text-gray-600">Counting, simple addition/subtraction, shapes, and patterns.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-yellow-100 text-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Mic size={24} /></div>
            <h3 className="font-bold text-lg mb-2">Communication</h3>
            <p className="text-sm text-gray-600">Show and tell, poetry recitals, and clear expression of ideas.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"><Star size={24} /></div>
            <h3 className="font-bold text-lg mb-2">Confidence</h3>
            <p className="text-sm text-gray-600">Building self-esteem through leadership roles in class.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};