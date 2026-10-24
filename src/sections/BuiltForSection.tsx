import {
  FaGraduationCap,
  FaLaptop,
  FaBriefcase,
  FaBullseye,
} from "react-icons/fa";

const audiences = [
  {
    title: "Students",
    description:
      "Plan study time, track assignments, and stay ahead of deadlines.",
    icon: FaGraduationCap,
  },
  {
    title: "Virtual Assistants",
    description:
      "Manage client tasks, set reminders, and keep every deadline in view.",
    icon: FaLaptop,
  },
  {
    title: "Freelancers",
    description:
      "Organize projects, prioritize work, and keep tasks moving forward.",
    icon: FaBriefcase,
  },
  {
    title: "Busy Professionals",
    description:
      "Balance work, personal activities, and daily goals in one place.",
    icon: FaBullseye,
  },
];

export default function BuiltForSection() {
  return (
    <section
      id="who-its-for"
      className="bg-white w-full px-5 py-10 sm:px-8 md:py-10 lg:px-12  border border-gray-300/40 border-b-[0.5px]"
    >
      <div className="mx-auto w-full flex flex-col gap-8 md:gap-10 items-center justify-center ">
        {/* Section heading */}
        <div className="text-center space-y-4">
          <h2 className="text-md md:text-xl lg:text-2xl  font-bold">
            Built for People Who
            <br />
            <span className="text-[#7C3AED] text-2xl md:text:3xl lg:text-4xl">
              Value Their Time
            </span>
          </h2>

          <p className="text-sm md:text-xl">
            Whether you're studying, managing clients, or balancing work and
            life, TaskFlow helps you stay organized and focused.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => {
            const Icon = audience.icon;

            return (
              <article
                key={audience.title}
                className="group rounded-2xl border border-[#F0E9FF] bg-white p-6 text-center transition duration-300 shadow-lg hover:-translate-y-1 hover:border-[#D8B4FE] hover:shadow-xl hover:shadow-[#7C3AED]/[0.07]"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#F3E8FF] text-2xl text-[#7C3AED] transition duration-300 group-hover:bg-[#7C3AED] group-hover:text-white">
                  <Icon aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#111638]">
                  {audience.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {audience.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
