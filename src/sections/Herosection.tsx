import { FaApple, FaAndroid } from "react-icons/fa";

const APK_DOWNLOAD_URL = "/downloads/taskflow.apk";
//fix
export default function HeroSection() {
  return (
    <header
      id="home"
      className="relative w-full bg-[#F5F0FF] px-6 pt-10 border-gray-300/40 border-b-[0.5px] md:px-8 lg:px-12"
    >
      <div className="mx-auto mt-18 flex w-full flex-col items-center justify-between gap-15 md:mt-18 md:flex-row md:items-stretch">
        {/* Left: Hero content */}
        <div className="space-y-4 md:w-1/2 md:self-center md:pb-10 lg:space-y-6">
          <span className="text-[#7C3AED] uppercase text-xs md:text-sm font-bold">
            your tasks. your time. your flow.
          </span>

          <h1 className="text-3xl font-bold leading-[1.3] text-[#111111] md:text-4xl lg:text-5xl lg:leading-[1.2]">
            Stay Organized
            <br />
            <span className="text-4xl md:text-5xl lg:text-7xl text-[#111111]">
              Get
            </span>{" "}
            <span className="text-[#7C3AED] text-4xl md:text-5xl lg:text-7xl">
              More Done
            </span>
          </h1>

          <p className="text-md font-medium leading-6 text-[#202020] lg:max-w-[600px] lg:text-xl">
            TaskFlow helps you plan, track,and complete your tasks with ease.
            Simple, smart and built for everyday Productivity.
          </p>

          {/* Action buttons */}
          <div className="flex  gap-4  text-white md:gap-5 md:pb-0">
            <a
              href={APK_DOWNLOAD_URL}
              download
              className="bg-[#7C3AED] flex items-center gap-2 rounded-md px-6 py-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <FaAndroid aria-hidden="true" className="text-xl lg:text-2xl" />
              <span className="font-semibold text-[12px] md:text-md">
                Download APK
              </span>
            </a>

            <div className="bg-[#7C3AED] flex items-center gap-2 rounded-md px-6 py-4 text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <FaApple aria-hidden="true" className="text-xl lg:text-2xl" />
              <span className="text-[12px] font-semibold md:text-md">
                Coming soon on
                <br />
                On App store
              </span>
            </div>
          </div>
        </div>

        {/* Right: Woman holding the TaskFlow app */}
        <div className="animate-hero-right relative flex w-full items-end justify-center md:w-1/2 md:self-stretch md:justify-end">
          <img
            src="/images/homepage-image.png"
            alt="ShiftMate user holding the app"
            className="h-auto w-[380px] object-contain object-bottom md:mt-auto md:w-full lg:w-[380px]"
          />
        </div>
      </div>
    </header>
  );
}
