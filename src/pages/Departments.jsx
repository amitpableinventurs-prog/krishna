import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  TbAmbulance,
  TbArrowRight,
  TbBuildingHospital,
  TbHeartHandshake,
  TbPhoneCall,
  TbSearch,
  TbStethoscope,
} from 'react-icons/tb'
import {
  EMERGENCY_PHONE,
  EMERGENCY_PHONE_LABEL,
  categories,
  categoryLabel,
  departments as departmentsList,
} from '../data/departments.js'
import { focusOf } from '../data/photos.js'

const matchesSearch = (dept, query) => {
  if (!query) return true

  const text = [dept.name, dept.desc, dept.head, ...dept.facilities, ...dept.conditions]
    .join(' ')
    .toLowerCase()

  return text.includes(query)
}

// Broken remote images fall back to the gradient + icon behind them
const hideBrokenImage = (event) => {
  event.currentTarget.style.display = 'none'
}

const ArrowIcon = () => <TbArrowRight className="h-4 w-4" aria-hidden="true" />

const SearchIcon = () => <TbSearch className="h-5 w-5" aria-hidden="true" />

function Departments() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [search, setSearch] = useState('')

  const query = search.trim().toLowerCase()

  const visibleDepartments = departmentsList.filter(
    (dept) =>
      (activeCategory === 'all' || dept.category === activeCategory) &&
      matchesSearch(dept, query)
  )

  const countFor = (id) =>
    id === 'all'
      ? departmentsList.length
      : departmentsList.filter((dept) => dept.category === id).length

  const resetFilters = () => {
    setActiveCategory('all')
    setSearch('')
  }

  return (
    <div className="bg-[#f0f9ff]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-950 text-white">

        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1800&q=85"
          alt=""
          onError={hideBrokenImage}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-sky-950/40" />

        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-28 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-32">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-white/70"
          >
            <Link to="/" className="transition hover:text-cyan-300">
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-cyan-300">
              Departments
            </span>
          </nav>

          <div className="mt-8 max-w-3xl animate-[hero-copy_0.8s_ease-out_both]">

            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
              Medical Excellence
            </span>

            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Specialist care,{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-sky-300 bg-clip-text text-transparent">
                all under one roof.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {departmentsList.length} departments backed by experienced
              specialists, modern infrastructure and a patient-first approach,
              so you and your family get the right care at the right time.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#department-list"
                className="group inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_10px_35px_rgba(34,211,238,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
              >
                Find a department
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </a>

              <a
                href={`tel:${EMERGENCY_PHONE}`}
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-black/20 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/15"
              >
                <TbPhoneCall className="h-5 w-5 text-cyan-300" aria-hidden="true" />
                24/7 Emergency
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          QUICK STATS
      ====================================================== */}
      <section className="relative z-10 mx-auto -mt-14 max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid overflow-hidden rounded-3xl border border-sky-200 bg-white shadow-[0_20px_60px_rgba(2,132,199,0.16)] grid-cols-2 lg:grid-cols-4">

          {[
            { icon: TbBuildingHospital, value: departmentsList.filter((dept) => dept.category !== 'units').length, label: 'Specialities' },
            { icon: TbAmbulance, value: '24/7', label: 'Emergency & ICU' },
            { icon: TbStethoscope, value: categories.length - 1, label: 'Care groups' },
            { icon: TbHeartHandshake, value: '1', label: 'Coordinated care team' },
          ].map((item, index) => (
            <div
              key={item.label}
              className={`group flex items-center gap-3 px-4 py-6 transition-colors hover:bg-sky-50 sm:gap-4 sm:px-6 ${
                index % 2 === 0 ? 'border-r border-sky-100' : ''
              } ${index < 2 ? 'border-b border-sky-100 lg:border-b-0' : ''} ${
                index === 1 ? 'lg:border-r' : ''
              }`}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-2xl text-white shadow-lg shadow-sky-500/25 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6 sm:h-14 sm:w-14 sm:text-[1.75rem]">
                <item.icon aria-hidden="true" />
              </span>

              <span>
                <strong className="block text-xl font-black text-slate-900 sm:text-2xl">
                  {item.value}
                </strong>
                <small className="text-xs font-medium text-slate-600 sm:text-sm">
                  {item.label}
                </small>
              </span>
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          FILTERS + GRID
      ====================================================== */}
      <section
        id="department-list"
        className="mx-auto max-w-7xl scroll-mt-32 px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
      >

        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Browse by speciality
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Find the right care for you
            </h2>
          </div>

          {/* Search */}
          <label className="relative block w-full lg:max-w-sm">
            <span className="sr-only">Search departments</span>

            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <SearchIcon />
            </span>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search a department, doctor or treatment"
              className="w-full rounded-full border border-sky-200 bg-white py-3.5 pl-12 pr-5 text-sm font-medium text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            />
          </label>

        </div>

        {/* Category chips */}
        <div className="-mx-5 mt-8 flex gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">

          {categories.map((category) => {
            const isActive = category.id === activeCategory

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={isActive}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'border-sky-600 bg-sky-600 text-white shadow-lg shadow-sky-600/25'
                    : 'border-sky-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-700'
                }`}
              >
                {category.label}

                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    isActive ? 'bg-white/20' : 'bg-sky-50 text-sky-700'
                  }`}
                >
                  {countFor(category.id)}
                </span>
              </button>
            )
          })}

        </div>

        <p className="mt-6 text-sm font-medium text-slate-500" aria-live="polite">
          Showing {visibleDepartments.length} of {departmentsList.length} departments
        </p>

        {/* Grid */}
        {visibleDepartments.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {visibleDepartments.map((dept, index) => (
              <Link
                key={dept.slug}
                to={`/departments/${dept.slug}`}
                style={{ animationDelay: `${Math.min(index, 8) * 50}ms` }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-sky-200/80 bg-white text-left shadow-md transition-all duration-500 animate-[home-card_0.5s_ease-out_both] hover:-translate-y-2 hover:border-sky-400 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
              >

                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-sky-400 to-cyan-500">

                  <span className="absolute inset-0 grid place-items-center text-7xl text-white/60">
                    <dept.icon aria-hidden="true" />
                  </span>

                  <img
                    src={dept.image.replace('w=1600', 'w=800')}
                    alt={dept.name}
                    loading="lazy"
                    onError={hideBrokenImage}
                    style={{ objectPosition: focusOf(dept.image) }}
                    className="relative h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/90 text-2xl text-sky-600 shadow-md backdrop-blur-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <dept.icon aria-hidden="true" />
                  </span>

                  {dept.emergency && (
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-rose-600 px-3 py-1 text-xs font-bold text-white shadow-md">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                      24/7
                    </span>
                  )}

                  <span className="absolute bottom-3 left-4 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {categoryLabel(dept.category)}
                  </span>

                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">

                  <h3 className="text-lg font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-sky-700">
                    {dept.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {dept.desc}
                  </p>

                  <div className="mb-6 mt-4 flex flex-wrap gap-2">
                    {dept.facilities.slice(0, 2).map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-sky-100 pt-4">

                    <span className="text-xs text-slate-500">
                      Head
                      <strong className="block text-sm font-bold text-slate-800">
                        {dept.head}
                      </strong>
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 transition-transform duration-300 group-hover:translate-x-1">
                      View department
                      <ArrowIcon />
                    </span>

                  </div>

                </div>

              </Link>
            ))}

          </div>
        ) : (
          <div className="mt-6 rounded-3xl border border-dashed border-sky-300 bg-white px-6 py-16 text-center">

            <TbSearch className="mx-auto h-12 w-12 text-sky-400" aria-hidden="true" />

            <h3 className="mt-4 text-xl font-extrabold text-slate-900">
              No department found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
              Try another keyword, or call us and our care team will guide
              you to the right specialist.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-700"
            >
              Clear filters
            </button>

          </div>
        )}

      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section className="bg-gradient-to-b from-sky-100/70 to-cyan-50/80 py-16 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Your visit, simplified
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Getting care in 3 easy steps
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              {
                step: '01',
                title: 'Choose a department',
                text: 'Browse or search above to find the speciality that matches your concern.',
              },
              {
                step: '02',
                title: 'Book an appointment',
                text: 'Reach us through the contact page or a quick call to pick a convenient time.',
              },
              {
                step: '03',
                title: 'Meet your specialist',
                text: 'Get a clear diagnosis and a treatment plan explained in simple words.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-3xl border border-sky-200/80 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-5xl font-black text-sky-100">
                  {item.step}
                </span>

                <h3 className="mt-2 text-lg font-extrabold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-sky-700 via-sky-600 to-cyan-600 px-6 py-12 text-white shadow-2xl shadow-sky-900/20 sm:px-12">

          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-2xl">
              <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                Not sure which department you need?
              </h2>

              <p className="mt-3 leading-7 text-sky-100">
                Tell us your symptoms and our care team will connect you with
                the right specialist.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-sky-700 shadow-lg transition hover:-translate-y-1"
              >
                Contact care team
                <ArrowIcon />
              </Link>

              <a
                href={`tel:${EMERGENCY_PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                <TbPhoneCall className="h-5 w-5" aria-hidden="true" />
                {EMERGENCY_PHONE_LABEL}
              </a>

            </div>

          </div>

        </div>
      </section>


    </div>
  )
}

export default Departments
