import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  TbAmbulance,
  TbArrowLeft,
  TbArrowRight,
  TbBed,
  TbBone,
  TbBrain,
  TbCheck,
  TbHeartbeat,
  TbHeartHandshake,
  TbMicroscope,
  TbPhoneCall,
  TbPill,
  TbStarFilled,
  TbStethoscope,
} from 'react-icons/tb'
import { photos } from '../data/photos.js'

const heroSlides = [
  {
    eyebrow: 'Care that puts you first',
    title: 'A healthier tomorrow starts with the right care today.',
    text: 'Expert doctors, thoughtful support, and modern facilities come together under one trusted roof.',
    image: photos.buildingFront,
  },
  {
    eyebrow: 'Trusted specialists',
    title: 'Good health deserves a team that truly listens.',
    text: 'From preventive care to complex treatment, our specialists stay with you at every step.',
    image: photos.reception,
  },
  {
    eyebrow: 'Here when you need us',
    title: 'Round-the-clock support for your family.',
    text: 'With 24/7 emergency care and a compassionate team, help is always closer than you think.',
    image: photos.generalWard2,
  },
]

const highlights = [
  {
    value: 24,
    decimals: 0,
    suffix: '/7',
    label: 'Emergency support',
    icon: TbAmbulance,
  },
  {
    value: 25,
    decimals: 0,
    suffix: '+',
    label: 'Expert specialists',
    icon: TbStethoscope,
  },
  {
    value: 15,
    decimals: 0,
    suffix: 'k+',
    label: 'Families cared for',
    icon: TbHeartHandshake,
  },
  {
    value: 4.9,
    decimals: 1,
    suffix: '/5',
    label: 'Patient experience',
    icon: TbStarFilled,
  },
]

const departments = [
  {
    name: 'Cardiology',
    slug: 'cardiology',
    detail: 'Heart care, diagnostics and preventive cardiac support.',
    icon: TbHeartbeat,
    color: 'from-sky-100 to-cyan-50',
  },
  {
    name: 'Orthopaedics',
    slug: 'orthopaedics',
    detail: 'Bones, joints, mobility and advanced rehabilitation.',
    icon: TbBone,
    color: 'from-sky-200/80 to-blue-100',
  },
  {
    name: 'Neurology',
    slug: 'neurosurgery',
    detail: 'Specialist care for brain, nerves and neurological health.',
    icon: TbBrain,
    color: 'from-cyan-100 to-sky-50',
  },
  {
    name: 'General Medicine',
    slug: 'general-medicine',
    detail: 'Complete support for everyday and long-term health.',
    icon: TbStethoscope,
    color: 'from-blue-100 to-sky-100',
  },
]

const doctors = [
  {
    name: 'Dr. Ananya Sharma',
    role: 'Senior Cardiologist',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Dr. Rahul Mehta',
    role: 'Orthopaedic Specialist',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Dr. Kavya Rao',
    role: 'General Physician',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=85',
  },
]

const facilities = [
  {
    title: 'Advanced diagnostics',
    detail:
      'Reliable reports and modern testing support faster and clearer healthcare decisions.',
    icon: TbMicroscope,
  },
  {
    title: 'Pharmacy support',
    detail:
      'Convenient access to essential medicines during your care journey.',
    icon: TbPill,
  },
  {
    title: 'Comfortable recovery',
    detail:
      'Calm, hygienic spaces designed around patient comfort and recovery.',
    icon: TbBed,
  },
]

const testimonials = [
  {
    quote:
      'The doctors explained everything clearly and made our family feel supported at every step.',
    name: 'Priya Malhotra',
    detail: 'Patient family member',
  },
  {
    quote:
      'From the reception desk to the nursing team, the care felt organised, kind, and genuinely human.',
    name: 'Amit Verma',
    detail: 'Outpatient visitor',
  },
]

const ArrowIcon = ({ direction = 'right' }) =>
  direction === 'left' ? (
    <TbArrowLeft className="h-5 w-5" aria-hidden="true" />
  ) : (
    <TbArrowRight className="h-5 w-5" aria-hidden="true" />
  )

const LiveStat = ({ value, decimals, suffix }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 1400
    const startedAt = performance.now()
    let frameId

    const updateCount = (currentTime) => {
      const progress = Math.min(
        (currentTime - startedAt) / duration,
        1
      )

      const easedProgress = 1 - (1 - progress) ** 3

      setCount(
        Number((value * easedProgress).toFixed(decimals))
      )

      if (progress < 1) {
        frameId = window.requestAnimationFrame(updateCount)
      }
    }

    frameId = window.requestAnimationFrame(updateCount)

    return () => window.cancelAnimationFrame(frameId)
  }, [decimals, value])

  return (
    <>
      {count.toFixed(decimals)}
      {suffix}
    </>
  )
}

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide(
        (current) => (current + 1) % heroSlides.length
      )
    }, 6000)

    return () => window.clearInterval(timer)
  }, [])

  const slide = heroSlides[activeSlide]

  const showPreviousSlide = () => {
    setActiveSlide(
      (current) =>
        (current - 1 + heroSlides.length) %
        heroSlides.length
    )
  }

  const showNextSlide = () => {
    setActiveSlide(
      (current) => (current + 1) % heroSlides.length
    )
  }

  return (
    <div className="overflow-hidden bg-[#f0f9ff]">

      {/* =====================================================
          HERO SLIDER
      ====================================================== */}
      <section className="relative min-h-[600px] overflow-hidden bg-slate-950 text-white sm:min-h-[650px] lg:min-h-[700px]">

        {/* Background Slides */}
        {heroSlides.map((item, index) => (
          <div
            key={item.title}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide
                ? 'opacity-100'
                : 'pointer-events-none opacity-0'
            }`}
          >
            <img
              src={item.image}
              alt="Hospital care"
              className={`h-full w-full object-cover transition-transform duration-[7000ms] ease-out ${
                index === activeSlide
                  ? 'scale-105'
                  : 'scale-100'
              }`}
            />

            {/* Left side dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/10" />

            {/* Bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-slate-950/60 to-transparent" />
          </div>
        ))}

        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-5 pb-28 pt-16 sm:min-h-[650px] sm:pt-20 sm:px-8 lg:min-h-[700px] lg:px-10">

          <div
            key={slide.title}
            className="max-w-3xl animate-[fadeIn_0.8s_ease-out]"
          >

            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-100 shadow-lg backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
              {slide.eyebrow}
            </span>

            {/* Heading */}
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100 drop-shadow-lg sm:text-lg">
              {slide.text}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-bold text-slate-950 shadow-[0_10px_35px_rgba(34,211,238,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_15px_45px_rgba(34,211,238,0.5)]"
              >
                Book an appointment

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>

              <a
                href="tel:+918269479995"
                className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-black/20 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/15"
              >
                <TbPhoneCall className="h-5 w-5 text-cyan-300 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />

                Call emergency
              </a>

            </div>

            {/* Trust Points */}
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/90">

              <span className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-cyan-400/20 text-xs font-bold text-cyan-300">
                  <TbCheck aria-hidden="true" />
                </span>
                Experienced specialists
              </span>

              <span className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-cyan-400/20 text-xs font-bold text-cyan-300">
                  <TbCheck aria-hidden="true" />
                </span>
                Modern facilities
              </span>

              <span className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-cyan-400/20 text-xs font-bold text-cyan-300">
                  <TbCheck aria-hidden="true" />
                </span>
                Patient-first care
              </span>

            </div>

          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-8 left-5 right-5 flex items-center justify-between sm:left-8 sm:right-8 lg:left-10 lg:right-10">

            {/* Counter */}
            <div className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold text-white/90 backdrop-blur-md">
              <span className="text-cyan-300">
                0{activeSlide + 1}
              </span>

              <span className="mx-2 text-white/40">
                /
              </span>

              <span>
                0{heroSlides.length}
              </span>
            </div>

            <div className="flex items-center gap-3">

              {/* Previous */}
              <button
                type="button"
                aria-label="Previous slide"
                onClick={showPreviousSlide}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-black/20 text-xl text-white backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
              >
                <ArrowIcon direction="left" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 backdrop-blur-md">

                {heroSlides.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    aria-label={`Show slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === activeSlide
                        ? 'w-9 bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.7)]'
                        : 'w-2 bg-white/50 hover:bg-white'
                    }`}
                  />
                ))}

              </div>

              {/* Next */}
              <button
                type="button"
                aria-label="Next slide"
                onClick={showNextSlide}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-black/20 text-xl text-white backdrop-blur-md transition-all duration-300 hover:translate-x-1 hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
              >
                <ArrowIcon />
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid overflow-hidden rounded-3xl border border-sky-200 bg-white shadow-[0_20px_60px_rgba(2,132,199,0.16)] grid-cols-2 lg:grid-cols-4">

          {highlights.map((item, index) => (
            <div
              key={item.label}
              className={`group flex flex-col items-start gap-3 border-sky-100 px-4 py-5 transition-all duration-300 hover:bg-sky-50 sm:flex-row sm:items-center sm:gap-4 sm:px-5 sm:py-7 lg:px-6 ${
                index % 2 === 0 ? 'border-r' : ''
              } ${index < 2 ? 'border-b lg:border-b-0' : ''} ${
                index === 1 ? 'lg:border-r' : ''
              }`}
            >

              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-2xl font-bold sm:h-14 sm:w-14 text-white shadow-lg shadow-sky-500/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
                <item.icon aria-hidden="true" />
              </span>

              <span>
                <strong className="block text-2xl font-black text-slate-900">
                  <LiveStat
                    value={item.value}
                    decimals={item.decimals}
                    suffix={item.suffix}
                  />
                </strong>

                <small className="text-sm font-medium text-slate-600">
                  {item.label}
                </small>
              </span>

            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          <div className="relative">

            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-3xl bg-sky-200/70" />

            <div className="absolute -bottom-5 -right-5 h-28 w-28 rounded-full bg-cyan-200/50 blur-2xl" />

            <img
              src={photos.generalWard}
              alt="General ward at Shree Krishna Children Hospital"
              className="relative h-72 w-full rounded-[2rem] sm:h-[420px] object-cover shadow-2xl shadow-sky-900/15 transition-all duration-700 hover:scale-[1.02]"
            />

            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-sky-100 bg-white/95 px-6 py-4 shadow-xl backdrop-blur-xl sm:right-6">

              <strong className="block text-3xl font-black text-sky-600">
                15+
              </strong>

              <span className="text-xs font-semibold text-slate-600">
                Years of trusted care
              </span>

            </div>

          </div>

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Why families choose us
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Care that feels personal, expertise you can trust.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              At Shri Krishna Hospital, we believe great healthcare starts
              with listening. Our team combines clinical expertise with
              warmth, clarity, and respect for every patient.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {[
                'Experienced specialists',
                'Advanced diagnostics',
                'Transparent guidance',
                'Patient-first support',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-sky-200/80 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-md"
                >

                  <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-100 text-sm font-bold text-sky-600">
                    <TbCheck aria-hidden="true" />
                  </span>

                  {item}

                </div>
              ))}

            </div>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 font-bold text-sky-600 transition-colors hover:text-sky-800"
            >
              Discover our story

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>

          </div>

        </div>
      </section>

      {/* =====================================================
          DEPARTMENTS
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 to-cyan-50/80 py-16 sm:py-24">

        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
                Care under one roof
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                Explore our departments
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-slate-600">
                Specialist teams working together to provide complete,
                coordinated healthcare for you and your family.
              </p>

            </div>

            <Link
              to="/departments"
              className="inline-flex items-center gap-1.5 font-bold text-sky-600 transition-colors hover:text-sky-800"
            >
              View all departments
              <TbArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {departments.map((item) => (
              <Link
                to={`/departments/${item.slug}`}
                key={item.name}
                className={`group rounded-3xl border border-sky-200/80 bg-gradient-to-br ${item.color} p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-sky-400 hover:shadow-xl`}
              >

                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-[1.75rem] text-white shadow-md shadow-sky-500/30 transition-all duration-500 group-hover:rotate-6 group-hover:scale-105">
                  <item.icon aria-hidden="true" />
                </span>

                <h3 className="mt-6 text-lg font-extrabold text-slate-900">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.detail}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 transition-transform duration-300 group-hover:translate-x-1">
                  Learn more
                  <TbArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>

              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          DOCTORS
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Meet your care team
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Specialists who listen
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Experienced professionals focused on clear communication,
              personalised treatment and compassionate care.
            </p>

          </div>

          <Link
            to="/doctors"
            className="inline-flex items-center gap-1.5 font-bold text-sky-600 transition-colors hover:text-sky-800"
          >
            Meet all doctors
            <TbArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {doctors.map((doctor) => (
            <Link
              to="/doctors"
              key={doctor.name}
              className="group overflow-hidden rounded-3xl border border-sky-200/80 bg-gradient-to-br from-white via-sky-50/50 to-cyan-50 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-sky-400 hover:shadow-xl"
            >

              <div className="relative h-72 overflow-hidden bg-sky-100">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover object-top grayscale-[15%] transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              </div>

              <div className="p-6">

                <h3 className="text-lg font-extrabold text-slate-900">
                  {doctor.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-sky-600">
                  {doctor.role}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sky-600">
                  View profile
                  <TbArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>

              </div>

            </Link>
          ))}

        </div>
      </section>

      {/* =====================================================
          FACILITIES
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-cyan-50/60 to-blue-50 py-16 sm:py-24">

        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Designed for better care
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              Everything you need, close at hand.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              From your first consultation to recovery, our facilities are
              planned to make healthcare simpler, calmer, and more comfortable.
            </p>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">

            {facilities.map((facility) => (
              <div
                key={facility.title}
                className="group rounded-3xl border border-sky-200/80 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-sky-400 hover:shadow-xl"
              >

                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-2xl font-bold text-white shadow-md shadow-sky-500/30 transition-all duration-300 group-hover:rotate-6 group-hover:scale-105">
                  <facility.icon aria-hidden="true" />
                </span>

                <h3 className="mt-6 text-lg font-extrabold text-slate-900">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {facility.detail}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          PATIENT JOURNEY
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              A simpler healthcare journey
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              From consultation to recovery, we stay with you.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              Our approach keeps every step clear and comfortable, so you
              can focus on what matters most — getting better.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-3">

            {[
              {
                number: '01',
                title: 'Consult',
                text: 'Meet the right specialist for your needs.',
              },
              {
                number: '02',
                title: 'Treat',
                text: 'Get a clear and personalised treatment plan.',
              },
              {
                number: '03',
                title: 'Recover',
                text: 'Continue care and support throughout recovery.',
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group rounded-3xl border border-sky-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-sky-400 hover:shadow-xl"
              >

                <span className="text-sm font-black text-sky-500">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-black text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}
      <section className="bg-white py-16 sm:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
                Patient voices
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                Care people remember.
              </h2>

            </div>

            <span className="text-sm font-semibold text-slate-600">
              Real comfort. Clear communication.
            </span>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="group rounded-3xl border border-sky-200/80 bg-gradient-to-br from-white via-sky-50/40 to-cyan-50/60 p-7 shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl"
              >

                <div className="flex gap-1 text-amber-500" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <TbStarFilled key={star} className="h-5 w-5" aria-hidden="true" />
                  ))}
                </div>

                <blockquote className="mt-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-6 flex items-center gap-3">

                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 font-bold text-white shadow-md">
                    {testimonial.name.charAt(0)}
                  </span>

                  <span>

                    <strong className="block text-sm text-slate-900">
                      {testimonial.name}
                    </strong>

                    <small className="text-xs text-slate-600">
                      {testimonial.detail}
                    </small>

                  </span>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10">

        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-sky-950 via-sky-900 to-cyan-900 px-6 py-14 text-white shadow-2xl shadow-sky-900/30 sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16">

          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-sky-300/20 bg-sky-400/10" />

          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
              Your health matters
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-black sm:text-4xl">
              Ready to take the next step?
            </h2>

            <p className="mt-4 max-w-lg leading-7 text-sky-100">
              Talk to our care team and find the right department or
              specialist for your healthcare needs.
            </p>

          </div>

          <Link
            to="/contact"
            className="group relative mt-8 inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-sky-400 px-7 py-4 text-sm font-bold text-sky-950 shadow-xl shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-300 hover:shadow-2xl lg:mt-0"
          >
            Book an appointment

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowIcon />
            </span>

          </Link>

        </div>
      </section>

    </div>
  )
}

export default Home