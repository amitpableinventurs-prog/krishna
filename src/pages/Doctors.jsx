import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TbCalendarEvent,
  TbCalendarPlus,
  TbCertificate,
  TbClock,
  TbInfoCircle,
  TbStethoscope,
  TbUser,
  TbX,
} from 'react-icons/tb';
import { doctors as doctorsList, initials, OPD_DAY, OPD_TIMING } from '../data/doctors.js';

function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

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
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700">

          <span className="inline-block py-1.5 px-4 rounded-full bg-sky-300/60 text-sky-900 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 border border-sky-400/50 shadow-md hover:scale-105 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            Visiting Doctors Roster
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight hover:-translate-y-1 transition-transform duration-300">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-cyan-700 to-blue-700 inline-block hover:scale-105 transition-transform duration-300">
              Doctors
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-slate-700 text-sm sm:text-base lg:text-lg font-medium hover:text-slate-900 transition-colors duration-300">
            Our visiting specialists see patients on prior appointment. To book, please contact the Reception / OPD Desk.
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

                {/* Doctor Avatar */}
                <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100 flex items-center justify-center shadow-inner group-hover:shadow-lg transition-shadow duration-500">

                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-500 to-blue-700 text-white text-2xl font-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {initials(doc.name)}
                  </div>

                  <div className="absolute top-3 right-3 inline-flex items-center gap-1 bg-sky-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    <TbCalendarEvent className="h-3.5 w-3.5" aria-hidden="true" />
                    {OPD_DAY}
                  </div>

                </div>

                {/* Doctor Info */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 group-hover:translate-x-1 transition-all duration-300">
                  {doc.name}
                </h3>

                <p className="flex items-start gap-1.5 text-sky-700 font-semibold text-xs mt-0.5 group-hover:translate-x-1 transition-transform duration-300">
                  <TbStethoscope className="mt-px h-4 w-4 shrink-0" aria-hidden="true" />
                  {doc.speciality}
                </p>

                <p className="flex items-start gap-1.5 text-slate-500 text-xs mt-1 font-medium group-hover:translate-x-1 transition-transform duration-300">
                  <TbCertificate className="mt-px h-4 w-4 shrink-0" aria-hidden="true" />
                  {doc.qualification}
                </p>

                <p className="flex items-start gap-1.5 text-slate-600 text-xs mt-1 font-medium group-hover:translate-x-1 transition-transform duration-300">
                  <TbClock className="mt-px h-4 w-4 shrink-0" aria-hidden="true" />
                  {OPD_TIMING}
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

        {/* Roster Note */}
        <div className="mt-10 sm:mt-12 max-w-3xl mx-auto flex items-start gap-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-md p-4 sm:p-5">
          <TbInfoCircle className="h-6 w-6 shrink-0 text-sky-700" aria-hidden="true" />
          <ul className="text-sm text-slate-700 font-medium space-y-1">
            <li>All visiting consultations are on prior appointment only.</li>
            <li>For appointment, please contact the Reception / OPD Desk.</li>
          </ul>
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

              <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 text-white text-xl font-black flex items-center justify-center shadow-md">
                {initials(selectedDoctor.name)}
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900">
                  {selectedDoctor.name}
                </h3>

                <p className="text-sky-700 text-xs font-semibold">
                  {selectedDoctor.speciality}
                </p>

                <p className="text-slate-500 text-xs">
                  Visiting Consultant
                </p>
              </div>

            </div>

            <div className="space-y-3 text-slate-700 text-sm">

              <div>
                <span className="font-bold text-xs uppercase tracking-wider text-slate-400 block mb-1">
                  Qualification
                </span>
                <p className="font-medium text-slate-900">
                  {selectedDoctor.qualification}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="font-bold text-xs uppercase tracking-wider text-slate-400 block mb-1">
                    OPD Day
                  </span>
                  <p className="font-medium text-slate-900">{OPD_DAY}</p>
                </div>
                <div>
                  <span className="font-bold text-xs uppercase tracking-wider text-slate-400 block mb-1">
                    OPD Timing
                  </span>
                  <p className="font-medium text-slate-900">{OPD_TIMING}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed bg-sky-50 border border-sky-100 rounded-xl p-3">
                Consultation is on prior appointment only. Please contact the Reception / OPD Desk to book.
              </p>

            </div>

            <div className="mt-6">

              <Link
                to="/contact"
                onClick={() => setSelectedDoctor(null)}
                className="inline-flex w-full items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] active:scale-95 transition-all duration-300"
              >
                <TbCalendarPlus className="h-5 w-5" aria-hidden="true" />
                Contact Reception to Book
              </Link>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}

export default Doctors;
