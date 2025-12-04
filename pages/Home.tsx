import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Shield, Star, Users, CheckCircle, ChevronLeft, ChevronRight, Calendar, Award, Trophy } from 'lucide-react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwFUck7VzTYTk6UKhjgMD65UdE3QZ0OIF_h7_l9KnHQkk_VvX7bBD0w8vEy1uny1Hvq9HnYI0rYB8tGcj5ET1PhYoPT_9BOlH-M1b1EONGvZ7Nk4BIkma4tFZy81LLGmHC59d8=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzFOViK4rpJES9WomVcRMCKBLz3S8XvIdudsSzXQ_PRUO0k2d7U_OYV9PMmxXm2rbZ5nK-1ezGvdlsTgpAwaPh7YDMy1e8fOKyW4zax5g_NZy_vY1Sv8uCVSjJNflXq7dg5gOXzaA=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwMUUWkYBq9grQq7Yz3MSXx00ljMqi5xvhv_rnMsw5f3qtyPdf3gO2zAxu4nI2MYCcESDrqurBdq41b87pqmb00grwe5CKRHTFOVYqDFYbOKJKC--r5ds_A1m45Dzj3lbfwB0A=s680-w680-h510-rw"
  ];

  const upcomingEvents = [
    { date: '15 Aug', title: 'Entrance Examinations', desc: 'Admission exams for new students.' },
    { date: '05 Sep', title: 'PTA Meeting', desc: 'Discussing term projects & welfare.' },
    { date: '12 Oct', title: 'Career Day', desc: 'Students explore future professions.' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden bg-school-dark">
        {/* Background Slider */}
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide} 
              alt={`Brighter Vision School ${index + 1}`} 
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-school-dark/90 via-school-dark/60 to-school-dark/30"></div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 z-20 text-white/50 hover:text-white hover:bg-black/20 p-2 rounded-full transition-all hidden md:block"
          aria-label="Previous slide"
        >
          <ChevronLeft size={40} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 z-20 text-white/50 hover:text-white hover:bg-black/20 p-2 rounded-full transition-all hidden md:block"
          aria-label="Next slide"
        >
          <ChevronRight size={40} />
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-school-gold w-8' : 'bg-white/50 w-3 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-shadow animate-fade-in-up">
              Shaping Brighter Futures Through <span className="text-school-gold">Excellence & Discipline</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 font-light animate-fade-in-up animation-delay-200">
              Quality education from early childhood to upper levels in a safe, modern environment in Weija.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start animate-fade-in-up animation-delay-400">
              <Link to="/admissions">
                <Button size="lg" className="w-full md:w-auto">Enroll Now</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full md:w-auto !text-white !border-white hover:!bg-white hover:!text-school-dark">
                  Visit Our Campus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="bg-school-gold py-12 relative z-20">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div className="space-y-2">
                 <div className="text-4xl md:text-5xl font-bold">15+</div>
                 <div className="text-sm md:text-base uppercase tracking-wider font-semibold opacity-90">Years of Excellence</div>
              </div>
              <div className="space-y-2">
                 <div className="text-4xl md:text-5xl font-bold">100%</div>
                 <div className="text-sm md:text-base uppercase tracking-wider font-semibold opacity-90">BECE Pass Rate</div>
              </div>
              <div className="space-y-2">
                 <div className="text-4xl md:text-5xl font-bold">40+</div>
                 <div className="text-sm md:text-base uppercase tracking-wider font-semibold opacity-90">Qualified Teachers</div>
              </div>
              <div className="space-y-2">
                 <div className="text-4xl md:text-5xl font-bold">500+</div>
                 <div className="text-sm md:text-base uppercase tracking-wider font-semibold opacity-90">Happy Students</div>
              </div>
           </div>
        </div>
      </div>

      {/* Welcome Section */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="relative">
              <img 
                 src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzFOViK4rpJES9WomVcRMCKBLz3S8XvIdudsSzXQ_PRUO0k2d7U_OYV9PMmxXm2rbZ5nK-1ezGvdlsTgpAwaPh7YDMy1e8fOKyW4zax5g_NZy_vY1Sv8uCVSjJNflXq7dg5gOXzaA=s680-w680-h510-rw" 
                 alt="Students" 
                 className="rounded-3xl shadow-2xl w-full object-cover h-[400px] md:h-[500px]" 
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block border-l-4 border-school-gold">
                 <div className="flex items-center gap-4">
                    <div className="bg-gray-100 p-3 rounded-full text-school-gold">
                       <Award size={32} />
                    </div>
                    <div>
                       <div className="font-bold text-school-dark text-lg">Best School</div>
                       <div className="text-gray-500 text-sm">In Weija District</div>
                    </div>
                 </div>
              </div>
           </div>
           <div>
              <h4 className="text-school-gold font-bold uppercase tracking-widest mb-2 text-sm">Welcome to Brighter Vision</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-school-dark mb-6">A Place Where Every Child Shines</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                 At Brighter Vision School, we believe that education is not just about filling a bucket, but lighting a fire. Located in the heart of Weija, we provide a serene, safe, and stimulating environment where children can discover their talents and reach their full potential.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                 From our nurturing Creche to our rigorous Junior High School program, we blend academic excellence with strong moral values to raise disciplined leaders of tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <Link to="/about"><Button variant="secondary">About Us</Button></Link>
                 <Link to="/contact"><Button variant="outline">Schedule a Tour</Button></Link>
              </div>
           </div>
        </div>
      </Section>

      {/* Overview / Core Features */}
      <Section background="grey">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-school-dark mb-4">Why Choose Brighter Vision?</h2>
          <div className="w-20 h-1 bg-school-gold mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">We provide a holistic educational experience that balances academic rigor with character development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Users size={40} />, title: 'Qualified Teachers', desc: 'Experienced educators dedicated to nurturing every child’s potential.' },
            { icon: <Shield size={40} />, title: 'Strong Discipline', desc: 'Instilling values of respect, integrity, and responsibility.' },
            { icon: <BookOpen size={40} />, title: 'Modern Learning', desc: 'Equipped with computer labs and science resources for STEM education.' },
            { icon: <Star size={40} />, title: 'Holistic Growth', desc: 'Extracurriculars that develop creativity, sportsmanship, and leadership.' },
            { icon: <CheckCircle size={40} />, title: 'Safe Environment', desc: 'CCTV monitored premises ensuring a secure space for your child.' },
            { icon: <div className="text-2xl font-bold">₵</div>, title: 'Affordable Fees', desc: 'Premium quality education at competitive rates.' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border-b-4 border-transparent hover:border-school-gold group">
              <div className="text-school-gold mb-6 group-hover:scale-110 transition-transform duration-300 bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Latest Events Preview */}
      <Section background="white">
         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
               <h2 className="text-3xl md:text-4xl font-bold text-school-dark mb-4">Latest News & Events</h2>
               <div className="w-20 h-1 bg-school-gold rounded-full mb-4"></div>
               <p className="text-gray-600">Stay updated with the latest happenings on our campus.</p>
            </div>
            <Link to="/news">
               <Button variant="outline" className="gap-2 group">View All Events <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></Button>
            </Link>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((evt, idx) => (
               <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="bg-school-dark p-6 text-white relative overflow-hidden h-32 flex flex-col justify-center">
                     <div className="relative z-10 flex justify-between items-start">
                        <Calendar className="text-school-gold" size={24} />
                        <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/20">Upcoming</span>
                     </div>
                     <div className="absolute -bottom-6 -right-6 text-white/5 rotate-12 transform scale-150">
                        <Calendar size={120} />
                     </div>
                  </div>
                  <div className="p-8">
                     <div className="text-school-gold font-bold text-sm mb-3 tracking-wide">{evt.date}</div>
                     <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-school-gold transition-colors">{evt.title}</h3>
                     <p className="text-gray-600 mb-6 text-sm leading-relaxed">{evt.desc}</p>
                     <Link to="/news" className="text-school-dark font-bold text-sm hover:text-school-gold flex items-center gap-1">Read Details <ArrowRight size={14}/></Link>
                  </div>
               </div>
            ))}
         </div>
      </Section>

      {/* Departments Strip */}
      <div className="bg-school-dark py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Our Departments</h2>
            <p className="text-gray-400">Comprehensive education for every stage</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['Creche', 'Nursery', 'Kindergarten', 'Primary', 'JHS'].map((dept) => (
              <span key={dept} className="px-6 py-3 rounded-full border border-gray-700 text-lg font-semibold text-gray-300 hover:text-school-dark hover:bg-school-gold hover:border-school-gold cursor-default transition-all duration-300">
                {dept}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Section background="gold">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://picsum.photos/600/600?random=2" 
                alt="Happy Student" 
                className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white/20" 
              />
            </div>
            <div>
              <div className="mb-8">
                <div className="flex gap-1 text-white mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
                </div>
                <h2 className="text-3xl font-bold text-school-dark mb-8">What Parents Say</h2>
                <blockquote className="text-xl md:text-2xl text-school-dark/80 italic mb-8 leading-relaxed font-serif">
                  "Since enrolling my son at Brighter Vision, I've seen a tremendous improvement in his confidence and academic performance. The teachers genuinely care."
                </blockquote>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm p-1">
                  <img src="https://picsum.photos/100/100?random=3" alt="Parent" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-school-dark text-lg">Mrs. Mensah</p>
                  <p className="text-sm text-school-dark/70 font-semibold">Parent of JHS Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA / Location */}
      <Section background="white">
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl text-white relative">
           <div className="absolute inset-0 opacity-20">
              <img src="https://picsum.photos/1200/400?random=4" className="w-full h-full object-cover" alt="Background" />
           </div>
           <div className="relative z-10 p-12 md:p-20 text-center">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Brighter Vision Family Today</h2>
             <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
               We are located at Oblogo Road, Weija. Visit us for a tour or start your application online. Give your child the head start they deserve.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/admissions"><Button size="lg" className="shadow-lg shadow-school-gold/20">Apply Now</Button></Link>
               <Link to="/contact"><Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-gray-900">Get Directions</Button></Link>
             </div>
           </div>
        </div>
      </Section>
    </div>
  );
};