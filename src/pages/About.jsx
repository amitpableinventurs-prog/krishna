import { useState } from 'react';
import {
  TbBuildingHospital,
  TbCalendar,
  TbCircleCheck,
  TbHeartHandshake,
  TbMessageCircle,
  TbQuote,
  TbStethoscope,
  TbWalk,
} from 'react-icons/tb';
import { photos } from '../data/photos.js';

const tabs = [
  { id: 'about', label: 'About the Hospital', icon: TbBuildingHospital },
  { id: 'tour', label: 'A Walk Through Tour', icon: TbWalk },
  { id: 'stories', label: 'Patient Stories', icon: TbMessageCircle },
];

function About() {
  const [activeTab, setActiveTab] = useState('about'); // 'about' | 'tour' | 'stories'

  // Patient Stories Data
  const patientStories = [
    {
      id: 1,
      name: "Rahul Verma",
      condition: "Successful Open Heart Surgery",
      story: "Dr. Rajesh Sharma aur unki team ne meri life bachali. Mujhe severe heart blockage tha aur operation ke baad ab main bilkul fit hoon aur apni family ke sath normal life enjoy kar raha hoon.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
      date: "August 2025"
    },
    {
      id: 2,
      name: "Sneha Kulkarni",
      condition: "High-Risk Pregnancy Care",
      story: "Hospital ki maternity care aur Dr. Ananya Sen ka guidance sach mein amazing tha. Meri high-risk pregnancy thi lekin doctors aur nursing staff ne har step par mera dhyan rakha.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
      date: "November 2025"
    },
    {
      id: 3,
      name: "Amitabh Banerjee",
      condition: "Advanced Knee Replacement",
      story: "Saloon se chalna bhi mushkil ho gaya tha mere liye. Dr. Suresh Kulkarni ne robotic knee replacement kiya aur ab main bina kisi dard ke aram se walk kar pata hoon. Thank you team!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
      date: "January 2026"
    }
  ];

  // Walk Through Tour Gallery Data
  const tourImages = [
    {
      title: "Our Hospital Building",
      desc: "Shree Krishna Children Hospital on New Jail Road, Karond, Bhopal.",
      image: photos.buildingFront
    },
    {
      title: "Reception & Registration",
      desc: "A warm, child-friendly front desk for registration and appointments.",
      image: photos.reception
    },
    {
      title: "General Ward",
      desc: "Spacious, clean ward with numbered beds and bedside lockers.",
      image: photos.generalWard
    },
    {
      title: "General Ward (Another View)",
      desc: "Nursing station inside the ward for round-the-clock care.",
      image: photos.generalWard2
    },
    {
      title: "High Dependency Unit (HDU)",
      desc: "Piped oxygen and suction at every bed for closer monitoring.",
      image: photos.hduWard
    },
    {
      title: "Private AC Room",
      desc: "Air-conditioned private room for comfort and privacy.",
      image: photos.privateRoomAc
    },
    {
      title: "Private Room",
      desc: "Quiet single-bed room for a peaceful recovery.",
      image: photos.privateRoom
    },
    {
      title: "Water Treatment Plant",
      desc: "In-house softening and filtration for clean, safe water.",
      image: photos.waterTreatmentPlant2
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-sky-200 via-sky-100 to-blue-200 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-sky-300/40 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-blue-300/40 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/70 text-sky-900 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 border border-white shadow-md">
            Discover Our Legacy
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            About Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-cyan-700 to-blue-700">Healthcare Center</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-700 text-sm sm:text-base lg:text-lg font-medium">
            Dedicated to providing world-class medical excellence with compassion, cutting-edge technology, and trusted care.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-10 grid grid-cols-1 gap-3 sm:mb-12 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 shadow-md cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-sky-500/30'
                  : 'bg-white/70 text-slate-700 hover:bg-white border border-white'
              }`}
            >
              <tab.icon className="h-5 w-5" aria-hidden="true" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: ABOUT THE HOSPITAL */}
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-[fade-in_0.4s_ease-out]">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/80 group">
              <img 
                src={photos.buildingFront}
                alt="Shree Krishna Children Hospital building"
                className="w-full h-64 sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-sky-300 text-xs font-bold uppercase tracking-widest block mb-1">Established Excellence</span>
                  <h4 className="text-xl sm:text-2xl font-black">25+ Years of Trust & Healing</h4>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white shadow-xl space-y-4">
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block">Who We Are</span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Pioneering Compassionate Healthcare Solutions
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Founded with a vision to make high-end medical treatment accessible to everyone, our hospital brings together eminent specialists, advanced infrastructure, and patient-centric care protocols under one roof.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/80 border border-sky-100 shadow-sm">
                  <TbHeartHandshake className="mb-2 h-7 w-7 text-sky-600" aria-hidden="true" />
                  <h5 className="text-xl sm:text-2xl font-black text-sky-900">50,000+</h5>
                  <p className="text-xs text-slate-600 font-medium">Successful Surgeries</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/80 border border-sky-100 shadow-sm">
                  <TbStethoscope className="mb-2 h-7 w-7 text-sky-600" aria-hidden="true" />
                  <h5 className="text-xl sm:text-2xl font-black text-sky-900">100+</h5>
                  <p className="text-xs text-slate-600 font-medium">Expert Doctors</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: A WALK THROUGH TOUR */}
        {activeTab === 'tour' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-[fade-in_0.4s_ease-out]">
            {tourImages.map((item, index) => (
              <div 
                key={index}
                className="group relative p-[1px] rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Hover Border Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-400 to-green-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative h-full bg-white/70 backdrop-blur-xl rounded-[23px] p-4 border border-white shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="w-full h-48 rounded-2xl overflow-hidden mb-4 border border-sky-100 shadow-inner">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-700 text-xs sm:text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: PATIENT STORIES */}
        {activeTab === 'stories' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-[fade-in_0.4s_ease-out]">
            {patientStories.map((story) => (
              <div 
                key={story.id} 
                className="group relative p-[1px] rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
              >
                {/* Hover Border Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-400 to-green-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative h-full bg-white/70 backdrop-blur-xl rounded-[23px] p-5 border border-white shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-sky-500 shadow-md"
                      />
                      <div>
                        <h4 className="text-base font-bold text-slate-900">{story.name}</h4>
                        <span className="text-[11px] font-semibold text-sky-800 bg-sky-200/60 px-2.5 py-0.5 rounded-full inline-block mt-0.5">
                          {story.condition}
                        </span>
                      </div>
                    </div>
                    <TbQuote className="mb-2 h-6 w-6 text-sky-400" aria-hidden="true" />
                    <p className="text-slate-700 text-xs sm:text-sm italic mb-4 leading-relaxed">
                      "{story.story}"
                    </p>
                  </div>
                  <div className="pt-3 border-t border-sky-100 flex justify-between items-center text-[11px] text-slate-500 font-semibold">
                    <span className="inline-flex items-center gap-1 text-emerald-600">
                      <TbCircleCheck className="h-4 w-4" aria-hidden="true" />
                      Verified Patient
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <TbCalendar className="h-4 w-4" aria-hidden="true" />
                      {story.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default About;