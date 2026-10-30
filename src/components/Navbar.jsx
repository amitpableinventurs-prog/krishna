import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { TbArrowRight, TbCalendarPlus, TbChevronDown } from 'react-icons/tb'
import hospital from '../assets/hospital.png'
import { departments } from '../data/departments.js'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Departments', to: '/departments' },
  { label: 'Doctors', to: '/doctors' },
  { label: 'Contact', to: '/contact' },
]

const MenuIcon = ({ isOpen }) => {
  return (
    <span
      className="relative block h-5 w-6"
      aria-hidden="true"
    >
      <span
        className={`absolute left-0 top-1 block h-0.5 w-6 rounded-full bg-teal-900 transition-all duration-300 ${
          isOpen ? 'top-2.5 rotate-45' : ''
        }`}
      />

      <span
        className={`absolute left-0 top-2.5 block h-0.5 w-6 rounded-full bg-teal-900 transition-all duration-200 ${
          isOpen ? 'scale-x-0 opacity-0' : ''
        }`}
      />

      <span
        className={`absolute left-0 top-4 block h-0.5 w-6 rounded-full bg-teal-900 transition-all duration-300 ${
          isOpen ? 'top-2.5 -rotate-45' : ''
        }`}
      />
    </span>
  )
}

const ChevronDown = ({ isOpen }) => (
  <TbChevronDown
    className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
    aria-hidden="true"
  />
)

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDeptMenuOpen, setIsDeptMenuOpen] = useState(false)
  const [isMobileDeptOpen, setIsMobileDeptOpen] = useState(false)
  const closeTimer = useRef(null)

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsMobileDeptOpen(false)
  }

  // Small delay lets the pointer cross the gap between the nav item and the panel
  const openDeptMenu = () => {
    clearTimeout(closeTimer.current)
    setIsDeptMenuOpen(true)
  }

  const scheduleDeptMenuClose = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setIsDeptMenuOpen(false), 200)
  }

  const closeDeptMenu = () => {
    clearTimeout(closeTimer.current)
    setIsDeptMenuOpen(false)
  }

  useEffect(() => {
    if (!isDeptMenuOpen) return undefined

    const handleKey = (event) => {
      if (event.key === 'Escape') setIsDeptMenuOpen(false)
    }

    document.addEventListener('keydown', handleKey)

    return () => document.removeEventListener('keydown', handleKey)
  }, [isDeptMenuOpen])

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  // Keep the menu open while focus moves between the nav item and the panel
  const handleDeptMenuBlur = (event) => {
    if (!event.relatedTarget?.closest('[data-dept-menu]')) closeDeptMenu()
  }

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* ================= NAVBAR ================= */}
      <nav className="group/nav relative flex min-h-[84px] w-full items-center justify-between overflow-hidden border-b border-teal-100 bg-gradient-to-r from-white via-[#f8fffe] to-[#f1fbfa] px-4 shadow-[0_6px_30px_rgba(15,118,110,0.10)] sm:min-h-[102px] sm:px-6 lg:min-h-[116px] lg:px-8 xl:px-10">

        {/* ================= TOP MEDICAL ACCENT ================= */}
        <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-teal-700 via-cyan-500 to-teal-600" />

        <div className="absolute left-0 top-0 h-[3px] w-32 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-all duration-1000 group-hover/nav:translate-x-[900%]" />

        {/* ================= SUBTLE BACKGROUND ================= */}
        <div className="pointer-events-none absolute left-[20%] top-0 h-full w-56 bg-gradient-to-b from-teal-50/60 to-transparent blur-2xl" />

        <div className="pointer-events-none absolute right-[15%] top-0 h-full w-64 bg-gradient-to-b from-cyan-50/40 to-transparent blur-2xl" />

        {/* ================= BRAND ================= */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="group relative z-10 flex shrink-0 items-center gap-3 sm:gap-4 lg:gap-5"
        >

          {/* ================= LOGO ================= */}
          <div className="relative flex h-[66px] w-[66px] items-center justify-center sm:h-[92px] sm:w-[92px] lg:h-[96px] lg:w-[96px] xl:h-[108px] xl:w-[108px]">

            {/* Very subtle logo aura */}
            <div className="pointer-events-none absolute inset-2 rounded-full bg-teal-100/30 opacity-0 blur-lg transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />

            {/* Logo */}
            <img
              src={hospital}
              alt="Shri Krishna Hospital Logo"
              className="relative z-10 h-full w-full object-contain drop-shadow-[0_4px_7px_rgba(15,23,42,0.16)] transition-all duration-500 ease-out group-hover:scale-[1.06] group-hover:drop-shadow-[0_7px_14px_rgba(13,148,136,0.22)]"
            />
          </div>

          {/* ================= BRAND TEXT ================= */}
          <span className="relative leading-tight">

            <span className="block text-lg font-extrabold tracking-tight text-slate-900 transition-all duration-300 group-hover:text-teal-800 sm:text-xl xl:text-2xl">
              Shree Krishna
            </span>

            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.20em] text-teal-600 sm:text-[10px] lg:text-[11px]">
              Hospital &amp; Care
            </span>

            {/* Brand Accent */}
            <span className="mt-2 block h-[2px] w-9 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 transition-all duration-500 group-hover:w-20" />

          </span>
        </NavLink>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden items-center gap-0.5 lg:flex xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:gap-1">

          {navItems.map((item) => {
            const hasDeptMenu = item.to === '/departments'

            return (
            <div
              key={item.to}
              {...(hasDeptMenu && {
                'data-dept-menu': true,
                onMouseEnter: openDeptMenu,
                onMouseLeave: scheduleDeptMenuClose,
                onFocus: openDeptMenu,
                onBlur: handleDeptMenuBlur,
              })}
            >
            <NavLink
              to={item.to}
              onClick={hasDeptMenu ? closeDeptMenu : undefined}
              aria-haspopup={hasDeptMenu ? 'true' : undefined}
              aria-expanded={hasDeptMenu ? isDeptMenuOpen : undefined}
              className={({ isActive }) =>
                `group relative block rounded-lg px-3 py-3 text-sm font-semibold xl:px-4 transition-all duration-300 ${
                  isActive
                    ? 'bg-teal-50 text-teal-800'
                    : 'text-slate-600'
                } hover:-translate-y-0.5 hover:bg-teal-50 hover:text-teal-800`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10 inline-flex items-center gap-1">
                    {item.label}
                    {hasDeptMenu && <ChevronDown isOpen={isDeptMenuOpen} />}
                  </span>

                  {/* Clean Medical Underline */}
                  <span
                    className={`absolute bottom-1.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 transition-all duration-300 ${
                      isActive
                        ? 'w-7 opacity-100'
                        : 'w-0 opacity-0 group-hover:w-7 group-hover:opacity-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
            </div>
            )
          })}

        </div>

        {/* ================= APPOINTMENT ================= */}
        <div className="relative z-10 hidden xl:flex">

          <NavLink
            to="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-teal-700 to-cyan-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_7px_20px_rgba(13,148,136,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(13,148,136,0.32)] active:scale-95"
          >

            {/* Shine */}
            <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-[18deg] bg-white/35 blur-sm transition-transform duration-700 group-hover:translate-x-[500%]" />

            <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-12">
              <TbCalendarPlus className="h-3.5 w-3.5" aria-hidden="true" />
            </span>

            <span className="relative">
              Book Appointment
            </span>

            <TbArrowRight
              className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />

          </NavLink>

        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          onClick={() => setIsMenuOpen((open) => !open)}
          className="relative z-10 rounded-xl border border-teal-200 bg-white/80 p-3 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50 active:scale-90 lg:hidden"
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>

      </nav>

      {/* ================= DEPARTMENTS MEGA MENU (DESKTOP) ================= */}
      <div
        data-dept-menu
        onMouseEnter={openDeptMenu}
        onMouseLeave={scheduleDeptMenuClose}
        onBlur={handleDeptMenuBlur}
        className={`absolute left-1/2 top-full hidden w-[min(820px,calc(100vw-2rem))] -translate-x-1/2 pt-2 transition-all duration-300 lg:block ${
          isDeptMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.18)]">

          <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-teal-50 to-cyan-50 px-6 py-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
              Our departments
            </p>

            <NavLink
              to="/departments"
              onClick={closeDeptMenu}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-700 transition hover:text-teal-900"
            >
              View all
              <TbArrowRight className="h-4 w-4" aria-hidden="true" />
            </NavLink>
          </div>

          <ul className="grid max-h-[60vh] grid-cols-2 gap-x-6 gap-y-1 overflow-y-auto p-4">
            {departments.map((dept) => (
              <li key={dept.slug}>
                <NavLink
                  to={`/departments/${dept.slug}`}
                  onClick={closeDeptMenu}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-teal-50 text-teal-800'
                        : 'text-slate-700 hover:translate-x-1 hover:bg-teal-50 hover:text-teal-800'
                    }`
                  }
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-50 text-lg text-teal-600 transition group-hover:bg-white">
                    <dept.icon aria-hidden="true" />
                  </span>
                  {dept.name}
                </NavLink>
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`w-full overflow-hidden border-b border-teal-100 bg-white/95 shadow-[0_12px_30px_rgba(15,23,42,0.10)] backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMenuOpen
            ? 'max-h-[100vh] translate-y-0 opacity-100'
            : 'max-h-0 -translate-y-2 border-transparent opacity-0'
        }`}
      >

        <div className="flex max-h-[calc(100vh-110px)] flex-col overflow-y-auto px-5 pb-5 pt-2 sm:px-8">

          {navItems.map((item, index) => {
            const hasDeptMenu = item.to === '/departments'

            return (
            <div key={item.to} className="relative">
            <NavLink
              to={item.to}
              onClick={closeMenu}
              style={{
                animationDelay: `${index * 60}ms`,
              }}
              className={({ isActive }) =>
                `group block border-b border-slate-100 px-3 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  isMenuOpen
                    ? 'animate-[fade-in_300ms_ease-out_both]'
                    : ''
                } ${
                  isActive
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-slate-600'
                } hover:translate-x-1 hover:bg-teal-50 hover:text-teal-700`
              }
            >
              {({ isActive }) => (
                <div className="flex items-center justify-between">

                  <span>
                    {item.label}
                  </span>

                  <TbArrowRight
                    aria-hidden="true"
                    className={`h-4 w-4 transition-all duration-300 ${hasDeptMenu ? 'hidden' : ''} ${
                      isActive
                        ? 'translate-x-0 opacity-100 text-teal-600'
                        : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-teal-600'
                    }`}
                  />

                </div>
              )}
            </NavLink>

            {hasDeptMenu && (
              <>
                <button
                  type="button"
                  onClick={() => setIsMobileDeptOpen((open) => !open)}
                  aria-expanded={isMobileDeptOpen}
                  aria-label={isMobileDeptOpen ? 'Hide departments' : 'Show departments'}
                  className="absolute right-1 top-1.5 grid h-10 w-10 place-items-center rounded-lg text-slate-500 transition hover:bg-teal-50 hover:text-teal-700"
                >
                  <ChevronDown isOpen={isMobileDeptOpen} />
                </button>

                {isMobileDeptOpen && (
                  <ul className="max-h-72 overflow-y-auto border-b border-slate-100 bg-slate-50/70 py-2 animate-[fade-in_250ms_ease-out_both]">
                    {departments.map((dept) => (
                      <li key={dept.slug}>
                        <NavLink
                          to={`/departments/${dept.slug}`}
                          onClick={closeMenu}
                          className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2.5 text-sm transition ${
                              isActive
                                ? 'font-semibold text-teal-700'
                                : 'text-slate-600 hover:text-teal-700'
                            }`
                          }
                        >
                          <dept.icon className="h-4 w-4 shrink-0 text-teal-600" aria-hidden="true" />
                          {dept.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
            </div>
            )
          })}

          {/* Mobile Appointment */}
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="group relative mt-4 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-teal-700 to-cyan-600 px-5 py-3.5 text-sm font-bold text-white shadow-[0_7px_20px_rgba(13,148,136,0.20)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
          >

            <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-[18deg] bg-white/30 blur-sm transition-transform duration-700 group-hover:translate-x-[500%]" />

            <span className="relative grid h-5 w-5 place-items-center rounded-full bg-white/15">
              <TbCalendarPlus className="h-3.5 w-3.5" aria-hidden="true" />
            </span>

            <span className="relative">
              Book Appointment
            </span>

            <TbArrowRight
              className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />

          </NavLink>

        </div>
      </div>

    </header>
  )
}

export default Navbar

