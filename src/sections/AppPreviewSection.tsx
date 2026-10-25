import { FaCheckCircle } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const highlights = [
  "Clean and simple interface",
  "Daily and weekly statistics",
  "Flexible and strict task modes",
  "Stay in control of your time",
];

export default function AppPreviewSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="app-preview"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-full bg-[#F5F0FF] px-5 py-10 md:px-8 lg:px-12 border border-gray-300/40 border-b-[0.5px]"
    >
      <div className="mx-auto flex w-full flex-col gap-8 md:gap-0 items-center justify-between md:flex-row">
        {/* App screenshots - slides in from the left */}
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -70 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            delay: shouldReduceMotion ? 0 : 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex w-[500px] items-center justify-center gap-3 sm:gap-5 lg:w-1/2"
        >
          {/* Add Task screen */}
          <div className="">
            <LazyLoadImage
              effect="blur"
              src="/images/taskflow-mockup.png"
              alt="TaskFlow Add New Task screen showing task scheduling fields"
              className="h-auto w-[400px] object-contain"
            />
          </div>
        </motion.div>

        {/* Section content - slides in from the right */}
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 70 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            delay: shouldReduceMotion ? 0 : 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full md:w-[450px] space-y-2"
        >
          <span className="text-xs font-bold uppercase text-[#7C3AED]">
            plan. track. achieve
          </span>

          <h2 className="text-xl leading-tight font-bold tracking-tight text-[#111638] md:text-2xl lg:text-4xl">
            A Clearer View of Your Day
          </h2>

          <p className="text-lg">
            See your tasks, schedule and progress all in one place. TaskFlow
            helps you focus on what matters most.
          </p>

          {/* Feature checklist */}
          <ul className="mt-5 space-y-4">
            {highlights.map((highlight, index) => (
              <motion.li
                key={highlight}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: 25 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : 0.25 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-3"
              >
                <FaCheckCircle
                  aria-hidden="true"
                  className="shrink-0 text-lg text-[#7C3AED]"
                />

                <span className="text-md md:text-md text-[#111638]">
                  {highlight}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
