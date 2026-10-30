import { TbClockHour4, TbMapPin, TbPhoneCall } from 'react-icons/tb'

const infoItems = [
  {
    label: 'Emergency 24/7',
    value: '+91 82694 79995',
    href: 'tel:+918269479995',
    icon: 'phone',
  },

  {
    label: 'Working hours',
    value: 'Mon - Sun, 24 hours',
    icon: 'clock',
  },

  {
    label: 'Location',
    value: 'House No. 4, Near Post Office, New Jail Road, Karond, Bhopal, MP',
    href: 'https://maps.google.com',
    icon: 'pin',
  },
]

const infoIcons = {
  phone: TbPhoneCall,
  clock: TbClockHour4,
  pin: TbMapPin,
}

const InfoIcon = ({ type }) => {
  const Icon = infoIcons[type]

  return Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null
}

const HospitalTopBar = () => {
  return (
    <>
      {/* Desktop Top Bar */}
      <div className="hidden animate-[topbar-drop_450ms_ease-out_both] bg-gradient-to-r from-teal-800 via-teal-700 to-cyan-700 text-white shadow-md lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-2 text-xs sm:px-8 lg:px-10 xl:justify-between">
          
          <p className="hidden font-medium tracking-wide text-teal-50/90 xl:block">
            Your health, our priority
          </p>

          <div className="flex items-center gap-5">
            {infoItems.map((item) => {
              const content = (
                <>
                  <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg border border-white/15 bg-white/15 text-cyan-100 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-white/20">
                    <InfoIcon type={item.icon} />
                  </span>

                  <span>
                    <span className="block text-[9px] font-semibold uppercase tracking-wider text-cyan-100/70">
                      {item.label}
                    </span>

                    <span className={`block whitespace-nowrap font-semibold text-white ${item.icon === 'pin' ? 'max-w-[220px] truncate xl:max-w-[340px]' : ''}`} title={item.value}>
                      {item.value}
                    </span>
                  </span>
                </>
              )

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.icon === 'pin' ? '_blank' : undefined}
                  rel={item.icon === 'pin' ? 'noreferrer' : undefined}
                  className="group flex items-center gap-2 transition-all duration-300 hover:text-cyan-100"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="group flex items-center gap-2"
                >
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="flex animate-[topbar-drop_450ms_ease-out_both] items-center justify-center gap-2 bg-gradient-to-r from-teal-800 via-teal-700 to-cyan-700 px-4 py-2 text-[11px] text-white shadow-md lg:hidden">
        
        <span className="grid h-6 w-6 place-items-center rounded-full border border-white/20 bg-white/15 text-cyan-100">
          <InfoIcon type="phone" />
        </span>

        <span className="font-medium text-cyan-50">
          Emergency 24/7
        </span>

        <a
          href="tel:+918269479995"
          className="font-bold text-white transition-colors hover:text-cyan-100"
        >
          +91 82694 79995
        </a>
      </div>
    </>
  )
}

export default HospitalTopBar
