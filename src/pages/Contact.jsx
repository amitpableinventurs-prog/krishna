import { TbArrowRight, TbClockHour4, TbExternalLink, TbMapPin, TbPhoneCall } from 'react-icons/tb'

const Contact = () => {
  // Exact location shared through WhatsApp
  const hospitalLocation =
    'https://maps.app.goo.gl/YV1KpjTErAvL6v747'

  // Exact coordinates of the shared location
  const mapEmbed =
    'https://www.google.com/maps?q=23.3033567,77.3943224&output=embed'

  return (
    <section className="bg-slate-50">

      {/* ================= CONTACT BANNER ================= */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-900 via-teal-700 to-cyan-700 px-5 py-8 text-white sm:px-8 lg:px-10">

        {/* Soft Glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center sm:gap-6">

          {/* Left */}
          <div>

            <div className="mb-2 flex items-center gap-2">

              <span className="h-px w-7 bg-cyan-200" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100">
                Shri Krishna Hospital & Care
              </span>

            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Contact Us
            </h1>

            <p className="mt-2 max-w-xl text-xs leading-5 text-teal-50/80 sm:text-sm">
              We are here to help you with trusted healthcare and dependable
              support.
            </p>

          </div>

          {/* Emergency Card */}
          <a
            href="tel:+918269479995"
            className="group flex shrink-0 items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
          >

            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/15 text-cyan-100">

              <TbPhoneCall className="h-5 w-5" aria-hidden="true" />

            </span>

            <span>

              <span className="block text-[9px] font-medium uppercase tracking-wider text-cyan-100/70">
                Emergency 24/7
              </span>

              <span className="text-sm font-bold text-white">
                +91 82694 79995
              </span>

            </span>

          </a>

        </div>

      </div>

      {/* ================= CONTACT INFORMATION ================= */}
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10">

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* ================= LEFT CONTENT ================= */}
          <div>

            <span className="text-sm font-bold uppercase tracking-[0.18em] text-teal-600">
              Contact Information
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              We're here for you
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              For appointments, emergency assistance, or general enquiries,
              you can directly contact Shri Krishna Hospital & Care.
            </p>

            <div className="mt-8 space-y-4">

              {/* ================= PHONE ================= */}
              <a
                href="tel:+918269479995"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_15px_35px_rgba(13,148,136,0.12)]"
              >

                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-600 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">

                  <TbPhoneCall className="h-6 w-6" aria-hidden="true" />

                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Phone
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    +91 82694 79995
                  </p>

                  <p className="mt-1 text-xs text-teal-600">
                    Tap to call
                  </p>

                </div>

              </a>

              {/* ================= ADDRESS ================= */}
              <a
                href={hospitalLocation}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_15px_35px_rgba(13,148,136,0.12)]"
              >

                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-600 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">

                  <TbMapPin className="h-6 w-6" aria-hidden="true" />

                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Address
                  </p>

                  <p className="mt-1 leading-6 font-semibold text-slate-800">
                    House No. 4, Near Post Office,
                    <br />
                    New Jail Road, Karond,
                    <br />
                    Bhopal, MP
                  </p>

                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal-600">
                    Open exact location
                    <TbArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>

                </div>

              </a>

              {/* ================= WORKING HOURS ================= */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">

                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-600">

                  <TbClockHour4 className="h-6 w-6" aria-hidden="true" />

                </div>

                <div>

                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Working Hours
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    Mon - Sun, 24 hours
                  </p>

                  <p className="mt-1 text-xs text-amber-600">
                    Emergency care available
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* ================= MAP ================= */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-[0_15px_45px_rgba(15,23,42,0.08)]">

            <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl sm:min-h-[480px]">

              <iframe
                title="Shri Krishna Hospital Exact Location"
                src={mapEmbed}
                className="h-full min-h-[320px] w-full border-0 sm:min-h-[480px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Button */}
              <a
                href={hospitalLocation}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-xl bg-white px-5 py-3 text-sm font-bold text-teal-700 shadow-[0_8px_25px_rgba(15,23,42,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-teal-700 hover:text-white"
              >
                <TbExternalLink className="h-4 w-4" aria-hidden="true" />
                Open in Google Maps
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact