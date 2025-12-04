import React from 'react';
import { Section } from '../components/Section';
import { Target, Award, Heart, Users, ShieldCheck, Monitor, Smile, Star, BookOpen, Cpu, Calendar } from 'lucide-react';

export const About: React.FC = () => {
  const images = [
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwFUck7VzTYTk6UKhjgMD65UdE3QZ0OIF_h7_l9KnHQkk_VvX7bBD0w8vEy1uny1Hvq9HnYI0rYB8tGcj5ET1PhYoPT_9BOlH-M1b1EONGvZ7Nk4BIkma4tFZy81LLGmHC59d8=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzFOViK4rpJES9WomVcRMCKBLz3S8XvIdudsSzXQ_PRUO0k2d7U_OYV9PMmxXm2rbZ5nK-1ezGvdlsTgpAwaPh7YDMy1e8fOKyW4zax5g_NZy_vY1Sv8uCVSjJNflXq7dg5gOXzaA=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwMUUWkYBq9grQq7Yz3MSXx00ljMqi5xvhv_rnMsw5f3qtyPdf3gO2zAxu4nI2MYCcESDrqurBdq41b87pqmb00grwe5CKRHTFOVYqDFYbOKJKC--r5ds_A1m45Dzj3lbfwB0A=s680-w680-h510-rw"
  ];

  const milestones = [
    { year: '2008', title: 'Foundation', desc: 'Established with 15 students in a small facility.' },
    { year: '2012', title: 'First Graduation', desc: 'Graduated our first set of Nursery students to Primary.' },
    { year: '2015', title: 'Campus Expansion', desc: 'Moved to our permanent site at Oblogo Road with modern facilities.' },
    { year: '2018', title: 'BECE Success', desc: 'Recorded our first 100% distinction pass rate in the BECE.' },
    { year: '2023', title: 'ICT Integration', desc: 'Launched the new ultra-modern Computer Laboratory.' }
  ];

  return (
    <div>
      <div className="bg-school-grey text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-gray-300">Our History, Mission & Vision</p>
      </div>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-school-dark mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Brighter Vision School was founded with a singular purpose: to provide high-quality, accessible education to the children of Weija and its environs. Over the years, we have grown from a humble beginning into a center of excellence, known for our disciplined approach and academic success.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe every child is unique and capable of greatness. Our supportive environment fosters creativity, critical thinking, and moral integrity.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={images[0]} alt="School History" className="rounded-lg shadow-lg w-full h-48 object-cover" />
            <img src={images[1]} alt="Students Learning" className="rounded-lg shadow-lg w-full h-48 object-cover mt-8" />
            <div className="col-span-2">
               <img src={images[2]} alt="School Community" className="rounded-lg shadow-lg w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* Our Journey Timeline */}
      <Section background="grey">
        <div className="max-w-4xl mx-auto">
             <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-school-dark mb-4">Our Journey</h2>
              <div className="w-20 h-1 bg-school-gold mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gray-200">
                {milestones.map((item, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-school-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                            <Calendar size={16} className="text-white" />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-school-gold text-xl">{item.year}</div>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                            <div className="text-gray-600 text-sm">{item.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </Section>

      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-md hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-school-gold rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">To raise disciplined, intelligent, and creative future leaders through quality holistic education.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-school-dark rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">To be the preferred school of choice in Ghana for academic excellence and character molding.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">Core Values</h3>
            <p className="text-gray-600">Discipline, Integrity, Excellence, Respect, and Creativity form the bedrock of our culture.</p>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="grey">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-school-dark mb-4">What Makes Us Unique</h2>
          <div className="w-20 h-1 bg-school-gold mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">We go beyond textbooks to ensure every child thrives in a supportive and stimulating environment.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Qualified, Caring Teachers", icon: <Users size={24} />, desc: "Our educators are mentors who guide and nurture each student." },
            { title: "Moral & Character Training", icon: <ShieldCheck size={24} />, desc: "We emphasize discipline and strong moral values alongside academics." },
            { title: "Modern Facilities", icon: <Monitor size={24} />, desc: "State-of-the-art computer labs and libraries to support learning." },
            { title: "Small Class Sizes", icon: <Smile size={24} />, desc: "Ensuring personalized attention and better teacher-student engagement." },
            { title: "High Academic Performance", icon: <Star size={24} />, desc: "Consistently excellent results in internal and external examinations." },
            { title: "Practical Learning", icon: <BookOpen size={24} />, desc: "Hands-on approach to science and vocational skills." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white flex items-start gap-4 p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-yellow-50 text-school-gold p-3 rounded-lg group-hover:bg-school-gold group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Teaching Philosophy */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-school-dark mb-6">Our Teaching Philosophy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Brighter Vision School, we believe that education should be engaging, relevant, and transformative. Our teaching methods are designed to spark curiosity and foster a lifelong love for learning.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-school-gold shadow-sm"><Smile size={20} /></div>
                <span className="font-semibold text-gray-800">Child-Centered Learning</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-school-gold shadow-sm"><Cpu size={20} /></div>
                <span className="font-semibold text-gray-800">Technology-Enhanced Teaching</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-school-gold shadow-sm"><BookOpen size={20} /></div>
                <span className="font-semibold text-gray-800">Practical, Hands-On Experiences</span>
              </div>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-school-gold shadow-sm"><Star size={20} /></div>
                <span className="font-semibold text-gray-800">Focus on Academics + Character</span>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 p-8 rounded-2xl shadow-lg border-t-8 border-school-gold">
             <h3 className="text-xl font-bold text-school-dark mb-4">A Note on Discipline</h3>
             <p className="text-gray-600 italic">
               "We believe discipline is the bridge between goals and accomplishment. Our philosophy integrates firm, fair, and consistent discipline to help students develop self-control and respect for others."
             </p>
          </div>
        </div>
      </Section>

      {/* Leadership Team Section */}
      <Section background="grey">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-school-dark mb-4">Leadership Team</h2>
            <p className="text-gray-600">Guided by experience and passion</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
             {['Head of School', 'Assistant Head', 'Dean of Students', 'Bursar'].map((role, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center group hover:-translate-y-2 transition-transform duration-300">
                   <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                      <img src={`https://picsum.photos/200/200?random=${20+idx}`} alt={role} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                   </div>
                   <h3 className="font-bold text-gray-800">Mrs. Admin Staff</h3>
                   <p className="text-school-gold text-sm font-semibold">{role}</p>
                </div>
             ))}
          </div>
       </Section>

      {/* Staff Overview */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
           <div className="inline-block p-3 bg-gray-100 rounded-full text-school-grey mb-4"><Users size={24} /></div>
           <h2 className="text-3xl font-bold text-school-dark mb-6">Our Dedicated Staff</h2>
           <p className="text-gray-600 text-lg leading-relaxed mb-8">
             Our teaching faculty is the heart of Brighter Vision School. We pride ourselves on having a team of <strong>experienced, certified, and passionate educators</strong>. Each teacher undergoes regular professional development to stay updated with modern pedagogical trends, ensuring they are not just teachers, but mentors who truly care about your child's success.
           </p>
        </div>
      </Section>

      <Section background="white" className="pt-0">
        <div className="bg-school-dark text-white p-10 rounded-2xl border-l-8 border-school-gold shadow-2xl">
          <h2 className="text-2xl font-bold mb-4">Message from the Head of School</h2>
          <p className="text-gray-300 italic mb-6 text-lg">
            "Welcome to Brighter Vision School. We pride ourselves on creating a family atmosphere where every child feels safe to learn and explore. Our dedicated staff works tirelessly to ensure your child reaches their full potential. We invite you to join our community."
          </p>
          <p className="font-bold text-school-gold">- The Headmaster</p>
        </div>
      </Section>
    </div>
  );
};