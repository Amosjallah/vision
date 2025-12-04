import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Check, Download, ShoppingBag, Banknote } from 'lucide-react';
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

      {/* Requirements Section */}
      <Section background="grey" id="requirements">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-school-dark mb-4">Preschool Admission Requirements</h2>
            <div className="w-20 h-1 bg-school-gold mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">Fee structure and required items for new Preschool entrants.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fees Structure */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-school-gold relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5">
                 <Banknote size={100} />
               </div>
               <h3 className="text-2xl font-bold text-school-dark mb-6 flex items-center gap-2">
                 <Banknote className="text-school-gold" /> Fee Breakdown
               </h3>
               
               <div className="space-y-4 text-gray-700">
                 <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                   <span>Admission Form</span>
                   <span className="font-bold">GH₵ 100.00</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                   <span>Admission Fee</span>
                   <span className="font-bold">GH₵ 400.00</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                   <span>Tuition Fee</span>
                   <span className="font-bold">GH₵ 815.00</span>
                 </div>
                 <div className="flex justify-between items-start border-b border-gray-100 pb-2">
                   <span className="pr-4 text-sm">Uniform (T-shirt, Branded Fabric, Change Over) & PTA</span>
                   <span className="font-bold whitespace-nowrap">GH₵ 770.00</span>
                 </div>
                 
                 <div className="flex justify-between items-center pt-4 text-lg bg-school-dark text-white p-4 rounded-xl shadow-md transform scale-105 mx-2 mt-4">
                   <span className="font-bold">Total Due</span>
                   <span className="font-bold text-school-gold">GH₵ 2,085.00</span>
                 </div>
               </div>

               <div className="mt-8 bg-yellow-50 p-4 rounded-lg text-sm text-school-dark border border-yellow-100">
                 <p className="font-bold mb-2">Additional Costs:</p>
                 <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                   <li>Canteen: <strong>GH₵ 12.00 / day</strong></li>
                   <li>T&T (Transport): Depends on location</li>
                 </ul>
                 <p className="text-center italic text-school-gold font-bold">Thank you for choosing Brighter Vision School</p>
               </div>
            </div>

            {/* Admission List Items */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-8 border-school-dark relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5">
                 <ShoppingBag size={100} />
               </div>
               <h3 className="text-2xl font-bold text-school-dark mb-6 flex items-center gap-2">
                 <ShoppingBag className="text-school-gold" /> Preschool Admission List
               </h3>
               
               <div className="bg-gray-50 rounded-xl p-6 h-full">
                 <ul className="space-y-3 text-sm md:text-base">
                   {[
                     { item: 'Kitchen Napkin', qty: '1' },
                     { item: 'Yazz Wipe / Softcare Wipe', qty: '2 pcs' },
                     { item: 'Hand Sanitizer (500ml)', qty: '1' },
                     { item: 'Washing Powder (500g)', qty: '2' },
                     { item: 'Toilet Soap', qty: '2' },
                     { item: 'Toilet Roll', qty: '1 pack' },
                     { item: 'Bine (1 litre)', qty: '1' },
                     { item: 'Camel or Dettol', qty: '2' },
                     { item: 'Key Soap', qty: '1 bar' },
                     { item: 'Bleach (1 litre)', qty: '1' },
                     { item: 'Rubber Spoon', qty: '1' },
                   ].map((row, idx) => (
                     <li key={idx} className="flex justify-between items-center border-b border-gray-200 pb-2 last:border-0 last:pb-0 hover:bg-white p-1 rounded transition-colors">
                       <span className="text-gray-700 font-medium">{row.item}</span>
                       <span className="font-bold text-school-dark bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm min-w-[3rem] text-center text-xs">{row.qty}</span>
                     </li>
                   ))}
                 </ul>
               </div>
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
            At Brighter Vision, we strive to make quality education affordable. Fees are paid termly. Please contact the accounts office for the detailed fee structure for the current academic year for other departments.
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