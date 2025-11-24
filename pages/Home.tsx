import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Shield, Star, Users, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwFUck7VzTYTk6UKhjgMD65UdE3QZ0OIF_h7_l9KnHQkk_VvX7bBD0w8vEy1uny1Hvq9HnYI0rYB8tGcj5ET1PhYoPT_9BOlH-M1b1EONGvZ7Nk4BIkma4tFZy81LLGmHC59d8=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzFOViK4rpJES9WomVcRMCKBLz3S8XvIdudsSzXQ_PRUO0k2d7U_OYV9PMmxXm2rbZ5nK-1ezGvdlsTgpAwaPh7YDMy1e8fOKyW4zax5g_NZy_vY1Sv8uCVSjJNflXq7dg5gOXzaA=s680-w680-h510-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwMUUWkYBq9grQq7Yz3MSXx00ljMqi5xvhv_rnMsw5f3qtyPdf3gO2zAxu4nI2MYCcESDrqurBdq41b87pqmb00grwe5CKRHTFOVYqDFYbOKJKC--r5ds_A1m45Dzj3lbfwB0A=s680-w680-h510-rw"
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

      {/* Overview / Core Features */}
      <Section background="white">
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
            <div key={idx} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border-b-4 border-transparent hover:border-school-gold group">
              <div className="text-school-gold mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Departments Strip */}
      <div className="bg-school-dark py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['Creche', 'Nursery', 'Kindergarten', 'Primary', 'JHS'].map((dept) => (
              <span key={dept} className="text-lg md:text-2xl font-bold text-gray-400 hover:text-school-gold cursor-default transition-colors">
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
                className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" 
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-school-dark mb-8">What Parents Say</h2>
              <blockquote className="text-xl text-gray-700 italic mb-6">
                "Since enrolling my son at Brighter Vision, I've seen a tremendous improvement in his confidence and academic performance. The teachers genuinely care."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src="https://picsum.photos/100/100?random=3" alt="Parent" />
                </div>
                <div>
                  <p className="font-bold text-school-dark">Mrs. Mensah</p>
                  <p className="text-sm text-gray-600">Parent of JHS Student</p>
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
           <div className="relative z-10 p-12 text-center">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Brighter Vision Family Today</h2>
             <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
               We are located at Oblogo Road, Weija. Visit us for a tour or start your application online.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/admissions"><Button size="lg">Apply Now</Button></Link>
               <Link to="/contact"><Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-white hover:!text-gray-900">Get Directions</Button></Link>
             </div>
           </div>
        </div>
      </Section>
    </div>
  );
};
