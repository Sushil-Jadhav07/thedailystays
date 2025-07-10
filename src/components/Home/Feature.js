export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21l4-4 4 4" />
        </svg>
      ),
      title: "Community with Purpose",
      description:
        "Union is designed to encourage organic connections, offering more than just a place to stay, it’s a space where people can interact, collaborate, and feel at home.",
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Seamless Living",
      description:
        "From digital entry to reliable Wi-Fi and helpful on-call support, our tech-enabled setup makes daily life easier and more convenient.",
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: "Thoughtful Design",
      description:
        "Each unit is carefully planned to offer a blend of comfort, functionality, and clean aesthetics, making the most of space without compromising on style.",
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "Wellness Everyday",
      description:
        "We offer simple, nourishing meals, peaceful environments, and community activities that support both mental and physical well-being.",
    },
  ]

  return (
    <section className="bg-gray-50 lg:py-[30px] px-6 py-[60px] pb-8 md:py-24 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center lg:text-left">
              {/* Icon */}
              <div className="mb-6 flex justify-center lg:justify-start">{feature.icon}</div>

              {/* Title */}
              <h3 className="mb-4 text-[1.3rem] font-[QuicksandMedium] text-gray-900 md:text-2xl">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-600 font-[MontserratRegular] text-[0.8rem] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
