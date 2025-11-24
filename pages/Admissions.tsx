import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Check, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Admissions: React.FC = () => {
  return (
    <div>
      <div className="bg-school-dark text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Admissions</h1>
        <p className="text-xl text-gray-300">Join the Brighter Vision Family</p>
      </div>

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-school-dark mb-8 text-center">Admission Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-school-gold mb-4">How to Apply</h3>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li className="pl-2"><span className="font-semibold">Visit Campus:</span> Come to our administration office to purchase an admission form.</li>
                <li className="pl-2"><span className="font-semibold">Submit Documents:</span> Return the completed form with the required documents.</li>
                <li className="pl-2"><span className="font-semibold">Assessment:</span> The child will undergo a brief assessment (for Primary/JHS).</li>
                <li className="pl-2"><span className="font-semibold">Admission Offer:</span> Successful applicants receive an admission letter.</li>
                <li className="pl-2"><span className="font-semibold">Payment:</span> Pay the admission and tuition fees to secure the spot.</li>
              </ol>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-school-dark mb-4">Required Documents</h3>
              <ul className="space-y-3">
                {['Completed Application Form', 'Photocopy of Birth Certificate', 'Two (2) Passport Pictures', 'Previous School Report (if applicable)', 'Copy of Immunization Card (for Creche/Nursery)'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <Check size={18} className="text-green-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gold">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-school-dark mb-8">Age Guidelines</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { level: 'Creche', age: '6 months - 2 yrs' },
              { level: 'Nursery', age: '2 - 4 yrs' },
              { level: 'KG', age: '4 - 6 yrs' },
              { level: 'Primary', age: '6 - 12 yrs' },
              { level: 'JHS', age: '12+ yrs' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-lg font-bold text-school-gold">{item.level}</div>
                <div className="text-gray-600">{item.age}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-school-dark mb-4">School Fees Policy</h2>
          <p className="text-gray-600 mb-8">
            At Brighter Vision, we strive to make quality education affordable. Fees are paid termly. Please contact the accounts office for the detailed fee structure for the current academic year.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button>Start Admission Process</Button>
            </Link>
            <Button variant="outline" className="flex items-center gap-2">
              <Download size={18} /> Download Info Packet
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};