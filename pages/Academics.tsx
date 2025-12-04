import React from 'react';
import { Section } from '../components/Section';
import { Book, PenTool, Globe, Cpu, Heart, ArrowRight, ClipboardCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Academics: React.FC = () => {
  const levels = [
    {
      title: 'Creche',
      desc: 'Focus on sensory development, motor skills, and loving care in a safe home-away-from-home environment.',
      icon: <HeartIcon className="text-pink-500" />,
      color: 'border-pink-500',
      link: '/academics/creche'
    },
    {
      title: 'Nursery',
      desc: 'Early literacy, numeracy foundation, and social skills built through play-based learning.',
      icon: <HeartIcon className="text-orange-500" />,
      color: 'border-orange-500',
      link: '/academics/nursery'
    },
    {
      title: 'Kindergarten (KG)',
      desc: 'Developing reading readiness, creativity, and basic logical thinking to prepare for primary education.',
      icon: <PenTool className="text-green-500" />,
      color: 'border-green-500',
      link: '/academics/kindergarten'
    },
    {
      title: 'Primary School',
      desc: 'A robust curriculum covering Mathematics, English, Science, and ICT. Emphasizing critical thinking and discipline.',
      icon: <Book className="text-blue-500" />,
      color: 'border-blue-500',
      link: '/academics/primary'
    },
    {
      title: 'Junior High School (JHS)',
      desc: 'Rigorous preparation for the BECE. Advanced curriculum in STEM and vocational skills.',
      icon: <Globe className="text-school-gold" />,
      color: 'border-school-gold',
      link: '/academics/jhs'
    }
  ];

  return (
    <div>
      <div className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl font-bold text-school-dark mb-4">Academic Programs</h1>
        <p className="text-xl text-gray-600">Excellence in every stage of learning</p>
      </div>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {levels.map((level, idx) => (
            <div key={idx} className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${level.color} flex flex-col hover:-translate-y-1 transition-transform`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-full">{level.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800">{level.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{level.desc}</p>
              <Link to={level.link}>
                <button className="flex items-center gap-2 text-school-dark font-bold hover:text-school-gold transition-colors">
                  Learn More <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Curriculum Framework */}
      <Section background="grey">
          <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-school-dark mb-6">Curriculum Framework</h2>
                <p className="text-gray-600">We follow the Standard-Based Curriculum (SBC) approved by GES/NaCCA, enriched with international best practices.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border border-gray-100 rounded-xl bg-blue-50">
                  <h3 className="font-bold text-lg mb-3 text-blue-900">Foundational (KG - P3)</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Literacy & Numeracy focus</li>
                      <li>• Play-based pedagogy</li>
                      <li>• Creative Arts expression</li>
                      <li>• Local language introduction</li>
                  </ul>
                </div>
                <div className="p-6 border border-gray-100 rounded-xl bg-green-50">
                  <h3 className="font-bold text-lg mb-3 text-green-900">Middle Phase (P4 - P6)</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Subject-based learning</li>
                      <li>• Critical thinking skills</li>
                      <li>• ICT proficiency</li>
                      <li>• Group project work</li>
                  </ul>
                </div>
                <div className="p-6 border border-gray-100 rounded-xl bg-yellow-50">
                  <h3 className="font-bold text-lg mb-3 text-yellow-900">Junior High (JHS 1-3)</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Specialized subject teaching</li>
                      <li>• Pre-technical skills</li>
                      <li>• Career guidance</li>
                      <li>• Intensive BECE prep</li>
                  </ul>
                </div>
          </div>
      </Section>

      <Section background="white">
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

      {/* Assessment & Support */}
      <Section background="grey">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                  <h2 className="text-2xl font-bold text-school-dark mb-6 flex items-center gap-2">
                        <ClipboardCheck className="text-school-gold" /> Assessment Structure
                  </h2>
                  <div className="space-y-6">
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                          <h4 className="font-bold text-gray-800 mb-2">Class Assessment (30%)</h4>
                          <p className="text-sm text-gray-600">Comprises class exercises, homework, group projects, and mid-term tests to ensure continuous engagement.</p>
                      </div>
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                          <h4 className="font-bold text-gray-800 mb-2">End of Term Exams (70%)</h4>
                          <p className="text-sm text-gray-600">Comprehensive examination testing the understanding of concepts covered throughout the term.</p>
                      </div>
                  </div>
              </div>
              <div>
                  <h2 className="text-2xl font-bold text-school-dark mb-6 flex items-center gap-2">
                        <HelpCircle className="text-school-gold" /> Academic Support
                  </h2>
                  <p className="text-gray-600 mb-6">
                      We recognize that every child learns at a different pace. Our academic support system ensures no child is left behind.
                  </p>
                  <ul className="space-y-4">
                      {[
                          'Remedial classes for students needing extra help.',
                          'One-on-one reading sessions for lower primary.',
                          'Saturday classes for JHS candidates.',
                          'Guidance counseling for academic goal setting.'
                      ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                              <div className="mt-1 w-2 h-2 rounded-full bg-school-gold shrink-0"></div>
                              <span className="text-gray-700">{item}</span>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
        </Section>
      
      {/* Clubs Section */}
      <Section background="white">
          <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-school-dark mb-4">Clubs & Societies</h2>
              <p className="text-gray-600">Learning extends beyond the classroom walls.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
              {['Science & Maths Club', 'Debaters & Writers Club', 'Cadet Corps', 'Red Cross Society', 'Cultural Troupe', 'Wildlife Club', 'Coding Club'].map(club => (
                  <span key={club} className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-700 font-semibold hover:bg-school-gold hover:text-white transition-colors cursor-default">
                      {club}
                  </span>
              ))}
          </div>
        </Section>
    </div>
  );
};

// Helper icon
const HeartIcon = ({className}:{className?:string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);