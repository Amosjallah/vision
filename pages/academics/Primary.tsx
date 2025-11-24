import React from 'react';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { Book, Globe, Cpu, Trophy, CheckCircle } from 'lucide-react';

export const Primary: React.FC = () => {
  return (
    <div>
      <div className="bg-school-dark text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Primary Department</h1>
        <p className="text-xl text-gray-300">Core Academic Excellence (6 - 12 Years)</p>
      </div>

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-school-dark mb-6">Lower & Upper Primary</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Primary School years are critical for establishing strong academic habits. At Brighter Vision School, we follow the Ghana Education Service curriculum, enriched with additional materials to challenge our students.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              From Class 1 to Class 6, students engage in deep learning across core subjects like Mathematics, English Language, Science, and Our World Our People. We also prioritize discipline, time management, and respect.
            </p>
            
            <h3 className="font-bold text-xl text-school-gold mb-3">Core Subjects</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
              {['Mathematics', 'English Language', 'Integrated Science', 'ICT / Computing', 'Creative Arts', 'Ghanaian Language', 'History', 'French'].map(sub => (
                <li key={sub} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-green-500" /> {sub}
                </li>
              ))}
            </ul>

            <Link to="/admissions">
              <Button>Apply for Primary School</Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section background="grey">
        <h2 className="text-3xl font-bold text-school-dark mb-8 text-center">Beyond the Classroom</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
            <Cpu className="text-blue-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Digital Literacy</h3>
            <p className="text-gray-600">Weekly practical sessions in our modern computer lab to ensure tech proficiency.</p>
          </div>
           <div className="bg-white p-6 rounded-xl border-l-4 border-yellow-500 shadow-sm">
            <Trophy className="text-yellow-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Sports & Clubs</h3>
            <p className="text-gray-600">Football, cadets, cultural troupes, and debate clubs to build team spirit.</p>
          </div>
           <div className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-sm">
            <Globe className="text-green-500 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Moral Education</h3>
            <p className="text-gray-600">Morning assemblies and guidance counseling sessions to instill strong values.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};