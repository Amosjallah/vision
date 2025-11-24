import React from 'react';
import { Section } from '../components/Section';
import { Calendar, Bell } from 'lucide-react';
import { EventItem } from '../types';

export const NewsEvents: React.FC = () => {
  const events: EventItem[] = [
    { id: 1, title: 'Entrance Examinations', date: 'August 15, 2024', description: 'Entrance exams for the new academic year for Primary and JHS students.', category: 'Academic' },
    { id: 2, title: 'PTA Meeting', date: 'September 5, 2024', description: 'General PTA meeting to discuss term projects and welfare.', category: 'PTA' },
    { id: 3, title: 'Career Day', date: 'October 12, 2024', description: 'Students dress up as their future career professionals.', category: 'Social' },
    { id: 4, title: 'Sports Week', date: 'November 20, 2024', description: 'Inter-class sports competition and athletics.', category: 'Sports' },
  ];

  return (
    <div>
      <div className="bg-gray-50 py-20 text-center">
        <h1 className="text-4xl font-bold text-school-dark mb-4">News & Events</h1>
        <p className="text-xl text-gray-600">Keep up with the latest happenings</p>
      </div>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Events List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-school-dark mb-6 flex items-center gap-2">
              <Calendar className="text-school-gold" /> Upcoming Events
            </h2>
            {events.map((event) => (
              <div key={event.id} className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                 <div className="bg-school-gold text-white p-4 rounded-xl text-center min-w-[100px] flex flex-col justify-center">
                   <span className="text-3xl font-bold leading-none">{event.date.split(' ')[1].replace(',', '')}</span>
                   <span className="text-sm uppercase">{event.date.split(' ')[0]}</span>
                 </div>
                 <div>
                   <span className="text-xs font-bold text-school-grey uppercase tracking-wider mb-1 block">{event.category}</span>
                   <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                   <p className="text-gray-600">{event.description}</p>
                 </div>
              </div>
            ))}
          </div>

          {/* Sidebar / Announcements */}
          <div>
            <div className="bg-school-dark text-white p-8 rounded-2xl sticky top-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Bell className="text-school-gold" /> Announcements
              </h2>
              <div className="space-y-6">
                <div className="border-b border-gray-700 pb-4">
                  <h4 className="font-bold text-school-gold mb-2">Admission Open</h4>
                  <p className="text-sm text-gray-300">Admissions for the 2024/2025 academic year are currently ongoing for all departments.</p>
                </div>
                <div className="border-b border-gray-700 pb-4">
                  <h4 className="font-bold text-school-gold mb-2">New Computer Lab</h4>
                  <p className="text-sm text-gray-300">We have upgraded our ICT center with 20 new desktop computers for practical learning.</p>
                </div>
                 <div className="pb-4">
                  <h4 className="font-bold text-school-gold mb-2">BECE Results</h4>
                  <p className="text-sm text-gray-300">Congratulations to our JHS graduates for achieving 100% pass rate in the recent BECE.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};