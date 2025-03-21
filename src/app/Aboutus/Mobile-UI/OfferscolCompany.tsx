import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

function Mobileoffers() {
  const [activeTab, setActiveTab] = useState('colleges');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`py-4 px-6 text-md font-medium flex-1 ${
              activeTab === 'colleges' 
                ? 'text-blue-500 border-b-2 border-blue-500' 
                : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('colleges')}
          >
            For Colleges
          </button>
          <button

            className={`py-4 px-6 text-md font-medium flex-1 ${
              activeTab === 'companies' 
                ? 'text-blue-500 border-b-2 border-blue-500' 
                : 'text-gray-600'
            }`}

            onClick={() => setActiveTab('companies')}
          >
            For Companies
          </button>
        </div>

        {/* Content */}
        <div className="p-6 bg-gray-50">
          {activeTab === 'colleges' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                What we offers for <span className="text-blue-500">colleges</span>
              </h2>
              <p className="mt-2 text-gray-700">
                Empowering institutions with innovative learning, industry connections, and success.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mt-1.5"></div>
                  <p className="text-gray-700">
                    Cybernaut Edu-Tech connects colleges with industry experts to foster innovation and career growth.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mt-1.5"></div>
                  <p className="text-gray-700">
                    We equip students with essential skills, certifications, and job readiness through VAC and placement training.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mt-1.5"></div>
                  <p className="text-gray-700">
                    Our expert team provides software solutions and tech support to enhance learning experiences.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <button className="bg-blue-500 text-white px-2 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors">
                  Contact us
                </button>
                <button className="text-blue-500 flex items-center gap-1 px-2 py-2 font-medium hover:text-blue-600 transition-colors">
                  Learn more <ChevronRight size={16} />
                </button>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Students in classroom" 
                  className="rounded-lg w-full h-32 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Students in auditorium" 
                  className="rounded-lg w-full h-32 object-cover"
                />
              </div>
            </div>
          )}

          {activeTab === 'companies' && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                What we offers for <span className="text-blue-500">companies</span>
              </h2>
              <p className="mt-2 text-gray-700">
                Connecting businesses with top talent and innovative solutions.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mt-1.5"></div>
                  <p className="text-gray-700">
                    Access to a pool of skilled graduates ready for industry challenges.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mt-1.5"></div>
                  <p className="text-gray-700">
                    Customized training programs to bridge skill gaps and enhance workforce capabilities.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-blue-500 mt-1.5"></div>
                  <p className="text-gray-700">
                    Collaborative research opportunities and innovation partnerships with academic institutions.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <button className="bg-blue-500 text-white px-2 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors">
                  Partner with us
                </button>
                <button className="text-blue-500 flex items-center gap-1 px-2 py-2 font-medium hover:text-blue-600 transition-colors">
                  Learn more <ChevronRight size={16} />
                </button>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Corporate meeting" 
                  className="rounded-lg w-full h-32 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Business team" 
                  className="rounded-lg w-full h-32 object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mobileoffers;