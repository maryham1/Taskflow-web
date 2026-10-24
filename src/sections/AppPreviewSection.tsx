import { FaCheckCircle } from "react-icons/fa";

const highlights = [
  "Clean and simple interface",
  "Daily and weekly statistics",
  "Flexible and strict task modes",
  "Stay in control of your time",
];

export default function AppPreviewSection() {
  return (
    <section
      id="app-preview"
      className="relative w-full  bg-[#F5F0FF] px-5 py-10 md:px-8  lg:px-12 border border-gray-300/40 border-b-[0.5px]"
    >
      <div className="mx-auto flex w-full flex-col gap-8 md:gap-0 items-center justify-between md:flex-row ">
        {/* App screenshots */}
        <div className="relative flex w-[500px] items-center justify-center gap-3 sm:gap-5 lg:w-1/2">
          {/* Add Task screen */}
          <div className="">
            <img
              src="/images/taskflow-mockup.png"
              alt="TaskFlow Add New Task screen showing task scheduling fields"
              className="h-auto w-[400px] object-contain"
            />
          </div>
        </div>

        {/* Section content */}
        <div className="w-full md:w-[450px] space-y-2 ">
          <span className="text-xs font-bold  uppercase text-[#7C3AED]">
            plan. track. achieve
          </span>

          <h2 className=" text-xl leading-tight font-bold tracking-tight text-[#111638] md:text-2xl lg:text-4xl">
            A Clearer View of Your Day
          </h2>

          <p className="text-lg">
            See your tasks, schedule and progress all in one place. TaskFlow
            helps you focus on what matters most.
          </p>

          {/* Feature checklist */}
          <ul className=" mt-5 space-y-4">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-3">
                <FaCheckCircle
                  aria-hidden="true"
                  className="shrink-0 text-lg text-[#7C3AED]"
                />
                <span className="text-md md:text-md text-[#111638]">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
