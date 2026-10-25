import { FaDownload, FaUser, FaCheckCircle } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Download APK",
    description:
      "Download the TaskFlow APK to your Android device and install the app. Once installation is complete, open TaskFlow to begin organizing your tasks and managing your time.",
    icon: FaDownload,
  },
  {
    number: "02",
    title: "Create an Account",
    description:
      "Sign up with your details and set up your profile. Creating an account gives you access to TaskFlow so you can start adding tasks, setting schedules, and organizing your daily activities.",
    icon: FaUser,
  },
  {
    number: "03",
    title: "Start Managing",
    description:
      "Create tasks, set their start and end times, and TaskFlow will automatically ring alarm reminders 30 minutes and 15 minutes before the scheduled start time, helping you prepare and stay on track.",
    icon: FaCheckCircle,
  },
];

export default function HowItWorksSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="how-it-works"
      initial={
        shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-white w-full px-5 py-10 md:px-8 lg:px-12 border border-gray-300/40 border-b-[0.5px]"
    >
      <div className="mx-auto w-full">
        {/* Section heading */}
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-[0.2em] text-[#7C3AED]">
            HOW IT WORKS
          </span>

          <h2 className="text-xl font-bold tracking-tight text-[#111638] md:text-2xl lg:text-3xl">
            Get Started in 3 Simple Steps
          </h2>

          <p className="text-sm leading-6 text-slate-500 sm:text-base">
            TaskFlow is designed to be simple and easy to use.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => {
            return (
              <motion.div
                key={step.number}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 35 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.7,
                  delay: shouldReduceMotion ? 0 : index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative mt-5 flex flex-col border-t-[1px] border-[#7C3AED] p-4"
              >
                {/* Step icon */}
                <div className="flex items-center gap-2 font-bold">
                  0{index + 1}.{/* Step number and title */}
                  <h3 className="text-base font-bold text-[#111638] sm:text-lg">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
