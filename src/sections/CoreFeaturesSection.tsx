import {
  FaCheckCircle,
  FaChartBar,
  FaMobileAlt,
  FaRegClock,
} from "react-icons/fa";

const features = [
  {
    title: "Easy Task Management",
    description: "Add, edit, and organize your tasks in seconds.",
    icon: FaCheckCircle,
    iconColor: "text-[#7C3AED]",
    iconBg: "bg-[#EDE9FE]",
  },
  {
    title: "Smart Reminders",
    description: "Never miss an important task again.",
    icon: FaRegClock,
    iconColor: "text-[#2563EB]",
    iconBg: "bg-[#DBEAFE]",
  },
  {
    title: "Track Your Progress",
    description: "Stay motivated with detailed statistics.",
    icon: FaChartBar,
    iconColor: "text-[#9333EA]",
    iconBg: "bg-[#F3E8FF]",
  },
  {
    title: "Access Anywhere",
    description: "Your tasks sync across your device.",
    icon: FaMobileAlt,
    iconColor: "text-[#0284C7]",
    iconBg: "bg-[#E0F2FE]",
  },
];

export default function CoreFeaturesSection() {
  return (
    <section
      id="features"
      className="bg-[#F5F0FF] px-5 py-10 md:px-8 lg:px-12 border border-gray-300/10 border-b-[0.5px]"
    >
      <div className="flex flex-col items-center gap-10">
        {/* Section heading */}
        <div className="space-y-2 text-center">
          <span className="text-xs font-bold text-[#7C3AED]">
            CORE FEATURES
          </span>

          <h2 className="text-md font-bold md:text-xl lg:text-2xl">
            Everything You Need to Stay on Productictive
          </h2>

          <p className="text-sm md:text-lg">
            TaskFlow gives you the right tools to oragnize your tasks and manage
            your time better.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group space-y-2 rounded-xl border border-transparent bg-white p-4 text-center text-black shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-[#7C3AED] hover:shadow-xl hover:shadow-[#7C3AED]/15"
              >
                <div className="flex items-center justify-center">
                  <div
                    className={`flex size-12 items-center justify-center rounded-full ${feature.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon
                      className={`text-2xl ${feature.iconColor}`}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <h4 className="mt-5 text-md font-bold text-black">
                  {feature.title}
                </h4>

                <p className="text-xs text-black">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
