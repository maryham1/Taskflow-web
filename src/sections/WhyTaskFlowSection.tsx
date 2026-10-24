import { FaBolt, FaHeart, FaStar } from "react-icons/fa";

const benefits = [
  {
    title: "Boost Productivity",
    description: "Get more done with less effort.",
    icon: FaBolt,
    iconColor: "text-[#F97316]",
    iconBg: "bg-[#FFF0E5]",
  },
  {
    title: "Stay Organized",
    description: "Keep your tasks, schedules, and reminders in one place.",
    icon: FaHeart,
    iconColor: "text-[#EF4444]",
    iconBg: "bg-[#FEE2E2]",
  },
  {
    title: "Achieve Your Goals",
    description: "Stay consistent and make real progress.",
    icon: FaStar,
    iconColor: "text-[#EAB308]",
    iconBg: "bg-[#FEF3C7]",
  },
];

export default function WhyTaskFlowSection() {
  return (
    <section
      id="why-taskflow"
      className="bg-white w-full px-5 py-10 sm:px-8 lg:px-12 border border-gray-300/50 border-b-[0.5px]"
    >
      <div className="mx-auto w-full ">
        {/* Section heading */}
        <div className="mx-auto  space-y-2 text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-[#7C3AED]">
            WHY TASKFLOW
          </span>

          <h2 className="text-2xl font-bold tracking-tight text-[#111638] md:text-3xl">
            More Than Just a To-Do List
          </h2>

          <p className="mx-auto  text-sm leading-6 text-slate-500 sm:text-base">
            TaskFlow is built to help you build better habits, reduce stress and
            achieve your goals.
          </p>
        </div>

        {/* Benefits */}
        <div className=" grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 mt-10">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group flex flex-col items-center rounded-2xl border border-[#F0E9FF] bg-white px-5 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#DDD6FE] hover:shadow-lg hover:shadow-[#7C3AED]/10"
              >
                {/* Benefit icon */}
                <div
                  className={`flex size-12 items-center justify-center rounded-full ${benefit.iconBg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon
                    aria-hidden="true"
                    className={`text-xl ${benefit.iconColor}`}
                  />
                </div>

                {/* Benefit title */}
                <h3 className="mt-4 text-base font-bold text-[#111638]">
                  {benefit.title}
                </h3>

                {/* Benefit description */}
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
