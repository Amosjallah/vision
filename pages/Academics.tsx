import React from 'react';
import { Section } from '../components/Section';
import { Book, PenTool, Globe, Cpu } from 'lucide-react';

export const Academics: React.FC = () => {
  const levels = [
    {
      title: 'Creche & Nursery',
      desc: 'Focus on sensory development, motor skills, social interaction, and foundational literacy and numeracy through play-based learning.',
      icon: <HeartIcon className="text-pink-500" />,
      color: 'border-pink-500'
    },
    {
      title: 'Kindergarten (KG)',
      desc: 'Developing reading readiness, communication skills, creativity, and basic logical thinking to prepare for primary education.',
      icon: <PenTool className="text-green-500" />,
      color: 'border-green-500'
    },
    {
      title: 'Primary School',
      desc: 'A robust curriculum covering Mathematics, English, Science, Citizenship, and ICT. We emphasize critical thinking and disciplined study habits.',
      icon: <Book className="text-blue-500" />,
      color: 'border-blue-500'
    },
    {
      title: 'Junior High School (JHS)',
      desc: 'Rigorous preparation for the BECE. Advanced curriculum in STEM, languages, and vocational skills to ensure high school readiness.',
      icon: <Globe className="text-school-gold" />,
      color: 'border-school-gold'
    }
  ];

  return (
    <div>
      <div className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl font-bold text-school-dark mb-4">Academic Programs</h1>
        <p className="text-xl text-gray-600">Excellence in every stage of learning</p>
      </div>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {levels.map((level, idx) => (
            <div key={idx} className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${level.color}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-full">{level.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800">{level.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{level.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="grey">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-school-dark mb-6">Our Teaching Philosophy</h2>
            <p className="text-gray-600 mb-4">
              We employ a student-centered approach where teachers act as facilitators of learning. We blend traditional discipline with modern teaching aids to ensure students are not just memorizing, but understanding.
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-center gap-2 font-semibold text-gray-800"><Cpu size={20} className="text-school-gold"/> ICT Integration</li>
              <li className="flex items-center gap-2 font-semibold text-gray-800"><Book size={20} className="text-school-gold"/> Practical Science Labs</li>
              <li className="flex items-center gap-2 font-semibold text-gray-800"><Globe size={20} className="text-school-gold"/> Cultural Activities</li>
            </ul>
          </div>
          <div>
            <img src="https://picsum.photos/600/400?random=7" alt="Classroom" className="rounded-xl shadow-xl w-full" />
          </div>
        </div>
      </Section>
    </div>
  );
};

// Helper icon
const HeartIcon = ({className}:{className?:string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);