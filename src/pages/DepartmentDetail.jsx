import { Link, NavLink, useParams } from 'react-router-dom'
import {
  TbArrowRight,
  TbChevronRight,
  TbCircleCheck,
  TbClockHour4,
  TbPhoneCall,
  TbStethoscope,
} from 'react-icons/tb'
import {
  EMERGENCY_PHONE,
  EMERGENCY_PHONE_LABEL,
  categoryLabel,
  departments,
  getDepartmentBySlug,
} from '../data/departments.js'
import { focusOf } from '../data/photos.js'

// Broken remote images fall back to the gradient behind them
const hideBrokenImage = (event) => {
  event.currentTarget.style.display = 'none'
}

const ChevronIcon = () => <TbChevronRight className="h-4 w-4" aria-hidden="true" />

const ArrowIcon = () => <TbArrowRight className="h-4 w-4" aria-hidden="true" />

const CheckIcon = () => (
  <TbCircleCheck className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
)

function DepartmentNotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <TbStethoscope className="mx-auto h-16 w-16 text-sky-500" aria-hidden="true" />

      <h1 className="mt-6 text-3xl font-black text-slate-950">
        Department not found
      </h1>

      <p className="mt-3 text-slate-600">
        The department you are looking for does not exist or may have moved.
      </p>

      <Link
        to="/departments"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-700"
      >
        View all departments
        <ArrowIcon />
      </Link>
    </section>
  )
}

function DepartmentDetail() {
  const { slug } = useParams()
  const dept = getDepartmentBySlug(slug)

  if (!dept) return <DepartmentNotFound />

  const related = departments
    .filter((item) => item.category === dept.category && item.slug !== dept.slug)
    .slice(0, 3)

  return (
    <div className="bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-900 text-white">

        <div className="absolute inset-0 bg-gradient-to-br from-sky-800 to-cyan-900">
          <img
            key={dept.slug}
            src={dept.image}
            alt=""
            onError={hideBrokenImage}
            style={{ objectPosition: focusOf(dept.image) }}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-950/25" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm text-white/60"
          >
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronIcon />
            <Link to="/departments" className="transition hover:text-white">
              Departments
            </Link>
            <ChevronIcon />
            <span className="font-semibold text-white/90" aria-current="page">
              {dept.name}
            </span>
          </nav>

          <div
            key={dept.slug}
            className="mt-8 max-w-3xl animate-[hero-copy_0.6s_ease-out_both]"
          >

            <div className="flex items-center gap-4 sm:gap-5">

              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/10 text-3xl shadow-lg backdrop-blur-md sm:h-20 sm:w-20 sm:text-4xl">
                <dept.icon aria-hidden="true" />
              </span>

              <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {dept.name}
              </h1>

            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {dept.desc}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-100 backdrop-blur-md">
                {categoryLabel(dept.category)}
              </span>

              {dept.emergency && (
                <span className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  24/7 Available
                </span>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CONTENT + SIDEBAR
      ====================================================== */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_360px] lg:px-10 lg:py-16">

        <div className="min-w-0">

          {/* Overview */}
          <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
            About the department
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            {dept.overview}
          </p>

          {/* Facilities */}
          <h2 className="mt-12 text-2xl font-black text-slate-950 sm:text-3xl">
            Facilities &amp; services
          </h2>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {dept.facilities.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 font-medium text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md"
              >
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>

          {/* Conditions */}
          <h2 className="mt-12 text-2xl font-black text-slate-950 sm:text-3xl">
            {dept.conditionsTitle ?? 'Conditions we treat'}
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {dept.conditions.map((item) => (
              <span
                key={item}
                className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Head of department */}
          <div className="mt-12 flex flex-col gap-5 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6 sm:flex-row sm:items-center">

            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-2xl font-black text-white shadow-lg shadow-sky-500/25">
              {dept.head.replace('Dr. ', '').charAt(0)}
            </span>

            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-sky-600">
                Head of Department
              </p>

              <p className="mt-1 text-xl font-extrabold text-slate-900">
                {dept.head}
              </p>

              <p className="mt-1 text-sm text-slate-600">
                {dept.name}
              </p>
            </div>

            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:gap-3"
            >
              Meet the team
              <ArrowIcon />
            </Link>

          </div>

        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:sticky lg:top-36 lg:self-start">

          {/* Appointment card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-sky-950 p-7 text-white shadow-xl">

            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl" />

            <h2 className="relative text-xl font-black">
              Need a consultation?
            </h2>

            <p className="relative mt-2 text-sm leading-6 text-slate-300">
              Book an appointment with our {dept.name.split(' & ')[0]} team,
              or call us for any urgent help.
            </p>

            <Link
              to="/contact"
              className="relative mt-6 flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Book appointment
              <ArrowIcon />
            </Link>

            <a
              href={`tel:${EMERGENCY_PHONE}`}
              className="relative mt-3 flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <TbPhoneCall className="h-4 w-4" aria-hidden="true" />
              {EMERGENCY_PHONE_LABEL}
            </a>

            <p className="relative mt-5 flex items-center gap-2 text-xs font-semibold text-emerald-300">
              <TbClockHour4 className="h-4 w-4" aria-hidden="true" />
              Emergency open 24×7
            </p>

          </div>

          {/* All departments */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">

            <h2 className="px-2 text-sm font-bold uppercase tracking-[0.15em] text-slate-500">
              All departments
            </h2>

            <ul className="mt-3 max-h-80 space-y-1 overflow-y-auto pr-1">
              {departments.map((item) => (
                <li key={item.slug}>
                  <NavLink
                    to={`/departments/${item.slug}`}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                        isActive
                          ? 'bg-sky-600 text-white'
                          : 'text-slate-700 hover:bg-sky-50 hover:text-sky-700'
                      }`
                    }
                  >
                    <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span className="flex-1">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>

          </div>

        </aside>

      </section>

      {/* =====================================================
          RELATED
      ====================================================== */}
      {related.length > 0 && (
        <section className="bg-gradient-to-b from-sky-50 to-white py-14 sm:py-16">

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
                  {categoryLabel(dept.category)}
                </p>

                <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
                  Related departments
                </h2>
              </div>

              <Link
                to="/departments"
                className="inline-flex items-center gap-1.5 font-bold text-sky-600 transition hover:text-sky-800"
              >
                View all departments
                <ArrowIcon />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/departments/${item.slug}`}
                  className="group flex items-start gap-4 rounded-3xl border border-sky-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-50 text-2xl text-sky-600 transition-transform duration-300 group-hover:rotate-6">
                    <item.icon aria-hidden="true" />
                  </span>

                  <span>
                    <strong className="block font-extrabold text-slate-900 group-hover:text-sky-700">
                      {item.name}
                    </strong>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">
                      {item.desc}
                    </span>
                  </span>
                </Link>
              ))}
            </div>

          </div>
        </section>
      )}

    </div>
  )
}

export default DepartmentDetail
