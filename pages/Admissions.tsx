import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Check, Download, ShoppingBag, Banknote, Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Admissions: React.FC = () => {
  const [imageError, setImageError] = useState(false);

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

      {/* Uniform Specification Section */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-school-dark mb-4 flex items-center justify-center gap-2">
              <Scissors className="text-school-gold" /> Uniform Specification
            </h2>
            <div className="w-20 h-1 bg-school-gold mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">Standard dress code design specifications for students.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-gray-300 flex justify-center items-center">
                <div className="text-center w-full">
                    <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 relative group min-h-[400px] flex items-center justify-center">
                       <img 
                          src={imageError ? "https://placehold.co/600x800/f3f4f6/1f2937?text=Uniform+Design+Sketch" : "https://lh3.googleusercontent.com/gg/AIJ2gl_SG5Uho5MHqjjgvk-TvrABPo3OqtIdulJ16RGkBtg6YonhZc7P0vyyU-6I8MVIgrplic_6mGytzjEiO3W3kz2GKW8sOuTiw9VxVeaemxiWeb__AAOIjPpj5RQSSR0ucw1p4uipjB6-QSJlw6hYrrp04NqXspjogUTfwodteAzWZlkFpUGIqtFa9h5b_jf9lSP-vFOa5He3oWW74f9aRpWaxFzUMD8k07LNJ5D1msaF_g2l0ibj253k2hggNgeCrZGGBijmGGyb7tBxsEH9pwNfESp941mcSxSpiBTI67nQLOE-cz0GZa1JZm0dpf6YL59L25-lHHiP7-skj9Q5E2wN=s1024-rj"} 
                          alt="Uniform Sketch - Cape, Belt & Box Pleat" 
                          referrerPolicy="no-referrer"
                          onError={() => setImageError(true)}
                          className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <p className="text-sm text-gray-500 italic">Illustration: Cape, Belt & Box Pleat Design</p>
                </div>
             </div>
             
             <div>
               <h3 className="text-2xl font-bold text-school-dark mb-6">Design Features</h3>
               <div className="space-y-8">
                 <div className="flex items-start gap-4 group">
                   <div className="w-12 h-12 rounded-full bg-school-gold flex items-center justify-center shrink-0 text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">1</div>
                   <div>
                     <h4 className="font-bold text-lg text-gray-800">Cape Collar</h4>
                     <p className="text-gray-600 mt-1">The uniform features a distinctive <strong>cape-style collar</strong> that drapes elegantly over the shoulders, providing a classic and neat appearance.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4 group">
                   <div className="w-12 h-12 rounded-full bg-school-dark flex items-center justify-center shrink-0 text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">2</div>
                   <div>
                     <h4 className="font-bold text-lg text-gray-800">Waist Belt</h4>
                     <p className="text-gray-600 mt-1">A structured <strong>belt</strong> at the waistline ensures a fitted, smart look for all students.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4 group">
                   <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center shrink-0 text-school-dark font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">3</div>
                   <div>
                     <h4 className="font-bold text-lg text-gray-800">Box Pleats</h4>
                     <p className="text-gray-600 mt-1">The skirt section is designed with <strong>box pleats</strong>, offering both durability and freedom of movement.</p>
                   </div>
                 </div>
               </div>

               <div className="mt-8 p-5 bg-yellow-50 rounded-xl border border-yellow-100 text-school-dark shadow-sm">
                 <p className="font-bold mb-1">Important Note:</p>
                 <p className="text-sm opacity-90">Please ensure that the school branded fabric is used and the design specifications are followed strictly by your tailor.</p>
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