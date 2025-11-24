import React from 'react';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { GraduationCap, Microscope, Briefcase, ChevronRight } from 'lucide-react';

export const JHS: React.FC = () => {
  return (
    <div>
      <div className="bg-school-gold text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Junior High School (JHS)</h1>
        <p className="text-xl text-yellow-100">Excellence & BECE Preparation (12+ Years)</p>
      </div>

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-school-dark mb-6">Preparing for the Future</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Our Junior High School department is focused on academic rigor and leadership development. We prepare students not just for the Basic Education Certificate Examination (BECE), but for the challenges of Senior High School and beyond.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With a track record of excellent BECE results, our experienced subject teachers ensure that every student masters the curriculum. We also offer career guidance to help students make informed choices about their future programmes.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8">
              <h3 className="font-bold text-school-dark mb-3 flex items-center gap-2"><GraduationCap /> BECE Success</h3>
              <p className="text-sm text-gray-600">We pride ourselves on our consistent 100% pass rate, with many students gaining admission to top-tier Senior High Schools in Ghana.</p>
            </div>

            <Link to="/admissions">
              <Button size="lg">Join JHS Department</Button>
            </Link>
          </div>
        </div>
      </Section>

      <Section background="grey">
        <h2 className="text-3xl font-bold text-school-dark mb-12 text-center">Academic Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform">
            <div className="w-14 h-14 bg-school-dark rounded-full flex items-center justify-center text-white mb-6">
              <Microscope size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">STEM Education</h3>
            <p className="text-gray-600">Advanced Integrated Science and Mathematics with practical lab sessions to foster analytical thinking.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform">
            <div className="w-14 h-14 bg-school-gold rounded-full flex items-center justify-center text-white mb-6">
              <Briefcase size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Pre-Technical Skills</h3>
            <p className="text-gray-600">Basic Design and Technology (BDT) including Home Economics and Pre-Technical skills.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform">
            <div className="w-14 h-14 bg-gray-500 rounded-full flex items-center justify-center text-white mb-6">
              <ChevronRight size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Languages</h3>
            <p className="text-gray-600">Strong emphasis on English proficiency, French, and Ghanaian Language to build effective communicators.</p>
          </div>
        </div>
      </Section>
    </div>
  );
};