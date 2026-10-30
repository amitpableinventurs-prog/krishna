import { useState } from 'react';
import {
  TbAward,
  TbCalendarPlus,
  TbCertificate,
  TbStethoscope,
  TbUser,
  TbX,
} from 'react-icons/tb';

function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctorsList = [
    {
      id: 1,
      name: "Dr. Rajesh Sharma",
      specialization: "Cardiology & Cardiothoracic Surgery",
      qualifications: "MBBS, MD, DM (Cardiology), FACC",
      experience: "18+ Years Experience",
      desc: "Expert in complex angioplasty, pacemaker implantations, and advanced heart failure interventions.",
      details: "Dr. Rajesh Sharma has successfully performed over 5,000 cardiac procedures. He specializes in primary angioplasty, structural heart disease management, and minimally invasive cardiothoracic surgeries.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Dr. Priya Nair",
      specialization: "Urology",
      qualifications: "MBBS, MS (General Surgery), MCh (Urology)",
      experience: "14+ Years Experience",
      desc: "Specialized in laser stone surgeries, endourology, and advanced prostate treatments.",
      details: "Dr. Priya Nair is renowned for her expertise in minimal access urological surgeries, pediatric urology, and managing complex renal stone disorders with high precision laser technology.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Dr. Amit Verma",
      specialization: "Nephrology & Dialysis",
      qualifications: "MBBS, MD (Medicine), DNB (Nephrology)",
      experience: "12+ Years Experience",
      desc: "Expert in critical care nephrology, hemodialysis, and kidney transplant medicine.",
      details: "Dr. Amit Verma focuses on chronic kidney disease management, glomerular disorders, peritoneal dialysis, and comprehensive pre- and post-transplant patient care protocols.",
      image: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      id: 4,
      name: "Dr. Ananya Sen",
      specialization: "Obstetrics & Gynaecology",
      qualifications: "MBBS, MS (OBG), MRCOG (UK)",
      experience: "15+ Years Experience",
      desc: "High-risk pregnancy care, painless deliveries, and advanced laparoscopic gynecology.",
      details: "Dr. Ananya Sen is dedicated to women’s health, offering compassionate care through high-risk pregnancies, infertility counseling, and advanced gynecological keyhole surgeries.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      id: 5,
      name: "Dr. Vikram Malhotra",
      specialization: "Paediatrics & Neonatology",
      qualifications: "MBBS, MD (Paediatrics), Fellowship in Neonatology",
      experience: "11+ Years Experience",
      desc: "Specialized newborn intensive care, developmental pediatrics, and childhood vaccinations.",
      details: "Dr. Vikram Malhotra manages Level-III NICU cases with extreme care, focusing on premature infant development, pediatric nutrition, and chronic childhood respiratory conditions.",
      image: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    {
      id: 6,
      name: "Dr. Neha Kapoor",
      specialization: "Paediatric Surgery",
      qualifications: "MBBS, MS, MCh (Paediatric Surgery)",
      experience: "10+ Years Experience",
      desc: "Neonatal malformations, congenital anomalies correction, and pediatric minimal invasive surgery.",
      details: "Dr. Neha Kapoor provides specialized surgical solutions for infants and young children, ensuring delicate operations with maximum safety and fast post-operative recovery.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 7,
      name: "Dr. Suresh Kulkarni",
      specialization: "Orthopaedics & Joint Replacement",
      qualifications: "MBBS, MS (Ortho), Fellowship in Joint Replacement (Germany)",
      experience: "20+ Years Experience",
      desc: "Robotic total knee and hip replacement specialist alongside complex arthroscopy.",
      details: "Dr. Suresh Kulkarni has performed thousands of successful joint replacement surgeries using state-of-the-art robotic assistance and advanced trauma management techniques.",
      image: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      id: 8,
      name: "Dr. Alok Bannerjee",
      specialization: "Neurosurgery & Spine Surgery",
      qualifications: "MBBS, MCh (Neurosurgery), FRCS",
      experience: "16+ Years Experience",
      desc: "Expert brain tumor resection, acute stroke interventions, and complex spine surgeries.",
      details: "Dr. Alok Bannerjee specializes in advanced neuro-oncology, minimally invasive spine instrumentation, and treatment of severe neurotrauma backed by a dedicated Neuro-ICU.",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 9,
      name: "Dr. Maneesh Gupta",
      specialization: "General & Laparoscopic Surgery",
      qualifications: "MBBS, MS (General Surgery), FIACS",
      experience: "13+ Years Experience",
      desc: "Advanced keyhole surgeries for gall bladder, hernias, appendices, and acute abdomen.",
      details: "Dr. Maneesh Gupta is an expert in single-incision laparoscopic operations, ensuring patients experience minimal scarring, shorter hospital stays, and quick pain-free recovery.",
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      id: 10,
      name: "Dr. Ritu Saxena",
      specialization: "Pulmonology",
      qualifications: "MBBS, MD (Respiratory Medicine), FCCP",
      experience: "12+ Years Experience",
      desc: "Asthma, COPD management, interventional bronchoscopy, and sleep disorder labs.",
      details: "Dr. Ritu Saxena provides comprehensive pulmonary care, specializing in pulmonary function testing, allergy immunotherapy, and diagnostic bronchoscopy for complex lung conditions.",
      image: "https://randomuser.me/api/portraits/women/50.jpg"
    },
    {
      id: 11,
      name: "Dr. Sandeep Deshmukh",
      specialization: "Gastroenterology",
      qualifications: "MBBS, MD, DM (Gastroenterology)",
      experience: "14+ Years Experience",
      desc: "Diagnostic and therapeutic endoscopies, liver disorders, and inflammatory bowel care.",
      details: "Dr. Sandeep Deshmukh specializes in advanced therapeutic ERCP, colonoscopy interventions, and management of chronic liver disease, pancreatitis, and gastrointestinal bleeding.",
      image: "https://randomuser.me/api/portraits/men/64.jpg"
    },
    {
      id: 12,
      name: "Dr. Kavita Iyer",
      specialization: "Ophthalmology",
      qualifications: "MBBS, MS (Ophthalmology), Phaco Fellowship",
      experience: "11+ Years Experience",
      desc: "Micro-incision cataract surgery, LASIK vision correction, and glaucoma care.",
      details: "Dr. Kavita Iyer offers advanced eye care including stitchless phacoemulsification cataract surgeries, laser vision correction, and comprehensive retinal screening evaluations.",
      image: "https://randomuser.me/api/portraits/women/49.jpg"
    },
    {
      id: 13,
      name: "Dr. Rohan Mehra",
      specialization: "Ear, Nose & Throat (ENT)",
      qualifications: "MBBS, MS (ENT), DNB",
      experience: "9+ Years Experience",
      desc: "Microscopic ear surgery, FESS sinus operations, and vertigo disorder clinics.",
      details: "Dr. Rohan Mehra specializes in functional endoscopic sinus surgeries, tympanoplasty, hearing restoration procedures, and comprehensive management of balance and voice disorders.",
      image: "https://randomuser.me/api/portraits/men/68.jpg"
    },
    {
      id: 14,
      name: "Dr. Smita Kothari",
      specialization: "Medical & Surgical Oncology",
      qualifications: "MBBS, MS, MCh (Surgical Oncology)",
      experience: "17+ Years Experience",
      desc: "Comprehensive cancer tumor board coordination, precision surgery, and chemotherapy protocols.",
      details: "Dr. Smita Kothari leads multi-disciplinary cancer treatment plans, focusing on breast oncoplastic surgery, gastrointestinal oncology, and targeted immunotherapy regimens.",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      id: 15,
      name: "Dr. Vinay Joshi",
      specialization: "General Medicine",
      qualifications: "MBBS, MD (General Medicine)",
      experience: "15+ Years Experience",
      desc: "Chronic lifestyle disorder management, geriatric care, and infectious disease diagnostics.",
      details: "Dr. Vinay Joshi specializes in primary care diagnostics, complex fever evaluations, diabetes management, hypertension control, and preventive health executive screenings.",
      image: "https://randomuser.me/api/portraits/men/56.jpg"
    },
    {
      id: 16,
      name: "Dr. Pooja Agarwal",
      specialization: "Anaesthesia & Critical Care",
      qualifications: "MBBS, MD (Anaesthesiology), IDCCM",
      experience: "12+ Years Experience",
      desc: "Multidisciplinary critical care units, advanced hemodynamic monitoring, and pain management.",
      details: "Dr. Pooja Agarwal oversees high-dependency surgical ICUs, managing trauma stabilization, ventilator protocols, and acute post-operative pain relief therapies.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 17,
      name: "Dr. Kunal Bhardwaj",
      specialization: "Emergency & Trauma",
      qualifications: "MBBS, MEM (Emergency Medicine), MRCEM",
      experience: "10+ Years Experience",
      desc: "24/7 rapid triage protocols, life-support stabilization, and acute trauma surgery.",
      details: "Dr. Kunal Bhardwaj leads the emergency response wing, managing life-threatening medical emergencies, polytrauma cases, and critical poisoning or cardiac arrest resuscitations.",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      id: 18,
      name: "Dr. Deepali Rastogi",
      specialization: "Dental & Oral Surgery",
      qualifications: "BDS, MDS (Oral & Maxillofacial Surgery)",
      experience: "11+ Years Experience",
      desc: "Dental implants, painless root canals, cosmetic smile design, and maxillofacial trauma.",
      details: "Dr. Deepali Rastogi provides comprehensive dental care with an emphasis on single-visit root canals, full mouth rehabilitations, and corrective jaw surgeries.",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      id: 19,
      name: "Dr. Nikhil Pande",
      specialization: "Physiotherapy",
      qualifications: "BPT, MPT (Orthopedic & Sports Rehab)",
      experience: "9+ Years Experience",
      desc: "Post-surgical joint rehabilitation, sports injury management, and spinal posture correction.",
      details: "Dr. Nikhil Pande utilizes advanced electrotherapy equipment and customized biomechanical exercises to restore patient mobility and accelerate post-injury functional recovery.",
      image: "https://randomuser.me/api/portraits/men/33.jpg"
    },
    {
      id: 20,
      name: "Dr. Shweta Thakur",
      specialization: "Plastic Surgery",
      qualifications: "MBBS, MS, MCh (Plastic & Reconstructive Surgery)",
      experience: "13+ Years Experience",
      desc: "Aesthetic procedures, post-trauma reconstruction, scar revisions, and burn care.",
      details: "Dr. Shweta Thakur specializes in both aesthetic cosmetic enhancements and complex reconstructive microsurgeries following oncological tumor removals or physical accidents.",
      image: "https://randomuser.me/api/portraits/women/58.jpg"
    },
    {
      id: 21,
      name: "Dr. Girish Patidar",
      specialization: "Cardiology",
      qualifications: "MBBS, MD, DM (Cardiology)",
      experience: "14+ Years Experience",
      desc: "Coronary interventions, electrophysiology, and advanced heart screening.",
      details: "Expert in diagnostic cardiac catheterizations, heart failure clinics, and preventative cardiology care for high-risk patients.",
      image: "https://randomuser.me/api/portraits/men/70.jpg"
    },
    {
      id: 22,
      name: "Dr. Monika Singhal",
      specialization: "Dermatology",
      qualifications: "MBBS, MD (Dermatology, Venereology & Leprosy)",
      experience: "10+ Years Experience",
      desc: "Clinical dermatology, anti-aging treatments, laser skin resurfacing, and acne care.",
      details: "Specialized in medical and aesthetic dermatology, treating chronic skin conditions, pigmentary disorders, and providing advanced non-surgical skin rejuvenation.",
      image: "https://randomuser.me/api/portraits/women/35.jpg"
    },
    {
      id: 23,
      name: "Dr. Tarun Agrawal",
      specialization: "Orthopaedics",
      qualifications: "MBBS, MS (Orthopaedics)",
      experience: "12+ Years Experience",
      desc: "Sports injury arthroscopy, complex fracture fixation, and joint preservation.",
      details: "Focused on ligament reconstructions, knee arthroscopy, and modern orthobiologic therapies for early cartilage degeneration and sports trauma.",
      image: "https://randomuser.me/api/portraits/men/39.jpg"
    },
    {
      id: 24,
      name: "Dr. Pallavi Joshi",
      specialization: "Paediatrics",
      qualifications: "MBBS, DCH, DNB (Paediatrics)",
      experience: "11+ Years Experience",
      desc: "Child growth tracking, newborn care, and adolescent counseling.",
      details: "Dedicated child specialist providing comprehensive developmental monitoring, immunization schedules, and management of seasonal pediatric infections.",
      image: "https://randomuser.me/api/portraits/women/51.jpg"
    },
    {
      id: 25,
      name: "Dr. Alok Shrivastava",
      specialization: "General Medicine",
      qualifications: "MBBS, MD (Internal Medicine)",
      experience: "19+ Years Experience",
      desc: "Metabolic syndrome management, geriatric health, and infectious illnesses.",
      details: "Extensive experience in treating multi-system complex disorders, uncontrolled diabetes, resistant hypertension, and acute infectious outbreaks.",
      image: "https://randomuser.me/api/portraits/men/61.jpg"
    },
    {
      id: 26,
      name: "Dr. Archana Dubey",
      specialization: "Obstetrics & Gynaecology",
      qualifications: "MBBS, MS (OBG)",
      experience: "13+ Years Experience",
      desc: "Painless normal delivery, laparoscopic cystectomy, and fertility treatments.",
      details: "Expert in managing low- and high-risk pregnancies, hormonal imbalances, menstrual disorders, and minimally invasive gynecological surgeries.",
      image: "https://randomuser.me/api/portraits/women/26.jpg"
    },
    {
      id: 27,
      name: "Dr. Sameer Khan",
      specialization: "Neurology",
      qualifications: "MBBS, MD, DM (Neurology)",
      experience: "15+ Years Experience",
      desc: "Stroke thrombolysis, epilepsy management, headache clinics, and movement disorders.",
      details: "Specialized in advanced neurological testing, nerve conduction studies, Parkinson's disease care, and comprehensive acute stroke management.",
      image: "https://randomuser.me/api/portraits/men/43.jpg"
    },
    {
      id: 28,
      name: "Dr. Nidhi Chawla",
      specialization: "Psychiatry",
      qualifications: "MBBS, MD (Psychiatry)",
      experience: "9+ Years Experience",
      desc: "Depression and anxiety management, cognitive behavioral therapy, and de-addiction.",
      details: "Compassionate mental health professional offering counseling, stress management workshops, and evidence-based psychiatric pharmacotherapy.",
      image: "https://randomuser.me/api/portraits/women/54.jpg"
    },
    {
      id: 29,
      name: "Dr. Raghavendra Rao",
      specialization: "Urology",
      qualifications: "MBBS, MS, MCh (Urology)",
      experience: "16+ Years Experience",
      desc: "Laser prostate surgery, renal transplant donor procedures, and urinary incontinence.",
      details: "Expert in advanced endoscopic stone management (RIRS/PCNL), laser enucleation of the prostate (HoLEP), and male infertility workups.",
      image: "https://randomuser.me/api/portraits/men/59.jpg"
    },
    {
      id: 30,
      name: "Dr. Geeta Pillai",
      specialization: "Pathology",
      qualifications: "MBBS, MD (Pathology)",
      experience: "18+ Years Experience",
      desc: "Diagnostic histopathology, cytopathology, and molecular hematology testing.",
      details: "Leads the central diagnostic laboratory ensuring precise blood sample analytics, biopsy evaluations, and rapid frozen section reporting during surgeries.",
      image: "https://randomuser.me/api/portraits/women/76.jpg"
    },
    {
      id: 31,
      name: "Dr. Hemant Tiwari",
      specialization: "Radiology",
      qualifications: "MBBS, MD (Radiology), DMRD",
      experience: "14+ Years Experience",
      desc: "Advanced MRI, CT scans, Doppler studies, and ultrasound-guided interventions.",
      details: "Specializes in high-resolution neuroimaging, multi-slice cardiac CT scans, and diagnostic sonography with precision reporting.",
      image: "https://randomuser.me/api/portraits/men/47.jpg"
    },
    {
      id: 32,
      name: "Dr. Reena Sen",
      specialization: "Endocrinology",
      qualifications: "MBBS, MD, DM (Endocrinology)",
      experience: "11+ Years Experience",
      desc: "Diabetes reversal programs, thyroid disorders, and metabolic bone disease clinics.",
      details: "Expert in treating hormonal imbalances, gestational diabetes, pediatric growth delays, and adrenal or pituitary gland dysfunctions.",
      image: "https://randomuser.me/api/portraits/women/38.jpg"
    },
    {
      id: 33,
      name: "Dr. Manish Lodha",
      specialization: "Gastroenterology",
      qualifications: "MBBS, MD, DM (Gastroenterology)",
      experience: "13+ Years Experience",
      desc: "Therapeutic GI endoscopies, IBS care, and fatty liver management clinics.",
      details: "Specializes in diagnostic and therapeutic procedures for ulcer bleeding, biliary tract stones, and chronic inflammatory bowel diseases.",
      image: "https://randomuser.me/api/portraits/men/73.jpg"
    },
    {
      id: 34,
      name: "Dr. Sunita Bajaj",
      specialization: "Ophthalmology",
      qualifications: "MBBS, MS (Ophthalmology)",
      experience: "15+ Years Experience",
      desc: "Cataract phacoemulsification, dry eye treatments, and diabetic retinopathy care.",
      details: "Extensive surgical background in premium multifocal lens implants, glaucoma laser management, and routine comprehensive vision checks.",
      image: "https://randomuser.me/api/portraits/women/66.jpg"
    },
    {
      id: 35,
      name: "Dr. Ajay Rathore",
      specialization: "Pulmonology",
      qualifications: "MBBS, MD (Respiratory Medicine)",
      experience: "12+ Years Experience",
      desc: "Sleep study analysis, COPD care, pulmonary rehabilitation, and allergy testing.",
      details: "Expert in evaluating chronic cough, sleep apnea management via CPAP titrations, and comprehensive spirometry pulmonary testing.",
      image: "https://randomuser.me/api/portraits/men/35.jpg"
    },
    {
      id: 36,
      name: "Dr. Bhavana Dixit",
      specialization: "ENT",
      qualifications: "MBBS, MS (ENT)",
      experience: "10+ Years Experience",
      desc: "Endoscopic sinus procedures, pediatric tonsillectomies, and voice therapy.",
      details: "Specialized in micro-ear surgeries, nasal septal deviations, allergy desensitization, and vertigo assessment protocols.",
      image: "https://randomuser.me/api/portraits/women/42.jpg"
    },
    {
      id: 37,
      name: "Dr. Vinod Somani",
      specialization: "General Surgery",
      qualifications: "MBBS, MS (General Surgery)",
      experience: "17+ Years Experience",
      desc: "Laparoscopic hernia repairs, appendix surgery, and diabetic foot care.",
      details: "Focuses on minimal access abdominal wall hernia repairs, varicose vein laser treatments, and acute emergency surgical care.",
      image: "https://randomuser.me/api/portraits/men/31.jpg"
    },
    {
      id: 38,
      name: "Dr. Madhuri Chouksey",
      specialization: "Dietetics & Nutrition",
      qualifications: "M.Sc. (Clinical Nutrition & Dietetics), RD",
      experience: "9+ Years Experience",
      desc: "Renal nutrition planning, bariatric post-op diets, and diabetic meal counseling.",
      details: "Provides personalized medical nutrition therapy tailored for clinical conditions like chronic kidney disease, cardiac recovery, and metabolic obesity.",
      image: "https://randomuser.me/api/portraits/women/52.jpg"
    },
    {
      id: 39,
      name: "Dr. Rakesh Khandelwal",
      specialization: "Cardiothoracic Surgery",
      qualifications: "MBBS, MS, MCh (CTVS)",
      experience: "21+ Years Experience",
      desc: "CABG bypass surgeries, valve replacements, and thoracic aortic interventions.",
      details: "Senior cardiothoracic surgeon with vast experience in beating-heart coronary artery bypass grafting, congenital heart anomaly corrections, and major vascular operations.",
      image: "https://randomuser.me/api/portraits/men/60.jpg"
    },
    {
      id: 40,
      name: "Dr. Alok Varma",
      specialization: "General & Laparoscopic Surgery",
      qualifications: "MBBS, MS (General Surgery)",
      experience: "12+ Years Experience",
      desc: "Advanced laparoscopic procedures, hernia repairs, and emergency abdominal surgeries.",
      details: "Specializes in minimally invasive keyhole surgeries ensuring faster recovery and minimal postoperative discomfort for patients.",
      image: "https://randomuser.me/api/portraits/men/49.jpg"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-sky-200 via-sky-100 to-blue-200 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Background Soft Sky Blue Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-sky-300/40 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <div
        className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-blue-300/40 rounded-full blur-[120px] pointer-events-none animate-pulse"
        style={{ animationDuration: '4s' }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 animate-in fade-in slide-in-from-bottom-6 duration-700">

          <span className="inline-block py-1.5 px-4 rounded-full bg-sky-300/60 text-sky-900 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 border border-sky-400/50 shadow-md hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            Expert Medical Professionals
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight hover:-translate-y-1 transition-transform duration-300">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-cyan-700 to-blue-700 inline-block hover:scale-105 transition-transform duration-300">
              Doctors
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-slate-700 text-sm sm:text-base lg:text-lg font-medium hover:text-slate-900 transition-colors duration-300">
            Consult with our highly qualified, experienced multi-disciplinary specialists dedicated to your health and recovery.
          </p>
        </div>

        {/* Fully Responsive Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">

          {doctorsList.map((doc) => (
            <div
              key={doc.id}
              className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-5 border border-white/80 shadow-lg hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden animate-in fade-in slide-in-from-bottom-5"
            >

              {/* Subtle Top Highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>

                {/* Doctor Image */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 shadow-inner group-hover:shadow-lg transition-shadow duration-500">

                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                  />

                  <div className="absolute top-3 right-3 inline-flex items-center gap-1 bg-sky-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300">
                    <TbAward className="h-3.5 w-3.5" aria-hidden="true" />
                    {doc.experience}
                  </div>

                </div>

                {/* Doctor Info */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 group-hover:translate-x-1 transition-all duration-300">
                  {doc.name}
                </h3>

                <p className="flex items-start gap-1.5 text-sky-700 font-semibold text-xs mt-0.5 group-hover:translate-x-1 transition-transform duration-300">
                  <TbStethoscope className="mt-px h-4 w-4 shrink-0" aria-hidden="true" />
                  {doc.specialization}
                </p>

                <p className="flex items-start gap-1.5 text-slate-500 text-xs mt-1 font-medium group-hover:translate-x-1 transition-transform duration-300">
                  <TbCertificate className="mt-px h-4 w-4 shrink-0" aria-hidden="true" />
                  {doc.qualifications}
                </p>

                <p className="text-slate-600 text-xs mt-2.5 line-clamp-2 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                  {doc.desc}
                </p>

              </div>

              {/* Action Button */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">

                <button
                  onClick={() => setSelectedDoctor(doc)}
                  className="inline-flex w-full items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-sky-600/30 hover:-translate-y-1 hover:scale-[1.02] active:scale-95 text-center"
                >
                  <TbUser className="h-4 w-4" aria-hidden="true" />
                  View Profile & Book
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Doctor Details Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm" onClick={() => setSelectedDoctor(null)}>

          <div role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()} className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 sm:p-6 relative shadow-2xl animate-[fade-in_0.3s_ease-out]">

            {/* Close Button */}
            <button
              type="button"
              aria-label="Close"
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 hover:scale-110 hover:rotate-90 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300"
            >
              <TbX className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-4 mb-4 pr-10">

              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                className="w-16 h-16 rounded-2xl object-cover shadow-md hover:scale-110 hover:rotate-2 transition-all duration-500"
              />

              <div>
                <h3 className="text-xl font-black text-slate-900 hover:text-sky-700 transition-colors duration-300">
                  {selectedDoctor.name}
                </h3>

                <p className="text-sky-700 text-xs font-semibold">
                  {selectedDoctor.specialization}
                </p>

                <p className="text-slate-500 text-xs">
                  {selectedDoctor.experience}
                </p>
              </div>

            </div>

            <div className="space-y-3 text-slate-700 text-sm">

              <div className="hover:-translate-y-1 transition-transform duration-300">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-400 block mb-1">
                  Qualifications
                </span>

                <p className="font-medium text-slate-900">
                  {selectedDoctor.qualifications}
                </p>
              </div>

              <div className="hover:-translate-y-1 transition-transform duration-300">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-400 block mb-1">
                  About Specialist
                </span>

                <p className="leading-relaxed text-xs sm:text-sm">
                  {selectedDoctor.details}
                </p>
              </div>

            </div>

            <div className="mt-6">

              <button
                onClick={() =>
                  alert(`Appointment booking initiated for ${selectedDoctor.name}`)
                }
                className="inline-flex w-full items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] active:scale-95 transition-all duration-300"
              >
                <TbCalendarPlus className="h-5 w-5" aria-hidden="true" />
                Book Appointment Now
              </button>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}

export default Doctors;