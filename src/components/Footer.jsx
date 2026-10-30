import { NavLink } from 'react-router-dom'
import { TbArrowRight, TbClockHour4, TbMail, TbMapPin, TbPhoneCall } from 'react-icons/tb'
import hospital from '../assets/hospital.png'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Departments', to: '/departments' },
  { label: 'Our Doctors', to: '/doctors' },
  { label: 'Contact', to: '/contact' },
]

const FooterIcon = ({ children }) => (
  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/10 text-cyan-100 shadow-[0_4px_14px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-200/30 group-hover:bg-white/15 group-hover:text-white group-hover:shadow-[0_6px_18px_rgba(45,212,191,0.18)]">
    {children}
  </span>
)

const Footer = () => {
  return (
    <footer className="relative mt-16 overflow-hidden bg-gradient-to-br from-teal-950 via-teal-900 to-cyan-950 text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute left-0 top-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-teal-300/5 blur-3xl" />

      {/* Top Shine */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 lg:px-10">

        <div className="mb-12 grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:gap-20">

          {/* ================= BRAND ================= */}
          <div className="animate-[footer-rise_700ms_ease-out_both] sm:col-span-2 lg:col-span-1">

            {/* Logo + Hospital Name */}
            <div className="group mb-6 inline-flex items-center gap-4 sm:gap-5">

              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center sm:h-32 sm:w-32">

                {/* Logo Glow */}
                <div className="pointer-events-none absolute inset-3 rounded-full bg-cyan-300/5 blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-70" />

                {/* Logo */}
                <img
                  src={hospital}
                  alt="Shri Krishna Hospital Logo"
                  className="relative z-10 h-24 w-24 rounded-3xl border border-white/20 object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)] transition-all duration-500 ease-out group-hover:scale-105 group-hover:border-cyan-200/40 group-hover:drop-shadow-[0_10px_25px_rgba(103,232,249,0.3)] sm:h-32 sm:w-32"
                />

              </div>

              {/* Hospital Name */}
              <span className="leading-tight">

                <strong className="block text-xl font-extrabold tracking-tight text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-100 sm:text-2xl">
                  Shree Krishna
                </strong>

                <small className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-100 transition-colors duration-300 group-hover:text-cyan-200 sm:text-[11px]">
                  Hospital &amp; Care
                </small>

                <span className="mt-2 block h-0.5 w-8 rounded-full bg-gradient-to-r from-teal-300 to-cyan-200 transition-all duration-500 group-hover:w-full" />

              </span>

            </div>

            {/* Description */}
            <p className="max-w-sm text-sm leading-7 text-teal-100/75">
              Thoughtful healthcare, experienced doctors, and dependable support for every family.
            </p>

            {/* Emergency */}
            <a
              href="tel:+918269479995"
              className="group mt-6 inline-flex items-center gap-3 rounded-xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm font-bold text-amber-200 shadow-[0_5px_18px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-amber-300/20 hover:shadow-[0_8px_24px_rgba(251,191,36,0.12)]"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-300/10 text-lg transition-transform duration-300 group-hover:scale-110">
                <TbPhoneCall className="h-5 w-5" aria-hidden="true" />
              </span>

              <span>
                <small className="mr-2 text-[10px] font-medium uppercase tracking-wider text-amber-100/70">
                  Emergency
                </small>

                +91 82694 79995
              </span>
            </a>

          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="animate-[footer-rise_700ms_120ms_ease-out_both]">

            <h2 className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-amber-200">
              <span className="h-px w-6 bg-amber-300/70" />
              Quick Links
            </h2>

            <nav className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-teal-100/75">

              {quickLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="group flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <TbArrowRight className="h-3.5 w-3.5 text-amber-300/70 transition-all duration-300 group-hover:text-amber-300" aria-hidden="true" />

                  {link.label}
                </NavLink>
              ))}

            </nav>
          </div>

          {/* ================= VISIT US ================= */}
          <div className="animate-[footer-rise_700ms_240ms_ease-out_both]">

            <h2 className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-amber-200">
              <span className="h-px w-6 bg-amber-300/70" />
              Visit Us
            </h2>

            <div className="space-y-4 text-sm leading-6 text-teal-100/75">

              {/* Address */}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                <FooterIcon>
                  <TbMapPin className="h-5 w-5" aria-hidden="true" />
                </FooterIcon>

                <span>
                  <strong className="block font-semibold text-white/90">
                    Shree Krishna Hospital
                  </strong>

                  <span className="text-teal-100/70">
                    House No. 4, Near Post Office,
                    <br />
                    New Jail Road, Karond,
                    <br />
                    Bhopal, MP
                  </span>
                </span>
              </a>

              {/* Working Hours */}
              <div className="group flex items-center gap-3">
                <FooterIcon>
                  <TbClockHour4 className="h-5 w-5" aria-hidden="true" />
                </FooterIcon>

                <span>
                  Open 24 hours for emergency care
                </span>
              </div>

              {/* Phone */}
              <a
                href="tel:+918269479995"
                className="group flex items-center gap-3 transition-all duration-300 hover:translate-x-1 hover:text-white"
              >
                <FooterIcon>
                  <TbPhoneCall className="h-5 w-5" aria-hidden="true" />
                </FooterIcon>

                <span className="font-semibold text-white/90">
                  +91 82694 79995
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-teal-100/55 sm:flex-row">

          <p>
            © 2026 Shree Krishna Hospital. All rights reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="mailto:care@shrikrishnahospital.com"
              className="inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-amber-200"
            >
              <TbMail className="h-4 w-4" aria-hidden="true" />
              Email us
            </a>

            <a
              href="tel:+918269479995"
              className="inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-amber-200"
            >
              <TbPhoneCall className="h-4 w-4" aria-hidden="true" />
              Call hospital
            </a>

          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
