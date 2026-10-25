import { FaApple, FaAndroid } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion, useReducedMotion } from "motion/react";
import "react-lazy-load-image-component/src/effects/blur.css";

const APK_DOWNLOAD_URL =
  "https://github.com/maryham1/Taskflow-web/releases/tag/v1.0.0";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
        when: "beforeChildren" as const,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <header
      id="home"
      className="relative w-full border-b-[0.5px] border-gray-300/40 bg-[#F5F0FF] px-6 pt-10 md:px-8 lg:px-12"
    >
      <div className="mx-auto mt-18 flex w-full flex-col items-center justify-between gap-15 md:mt-18 md:flex-row md:items-stretch">
        {/* Left: Content slides in from the left */}
        <motion.div
          variants={contentVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4 md:w-1/2 md:self-center md:pb-10 lg:space-y-6"
        >
          <motion.span
            variants={itemVariants}
            className="text-xs font-bold uppercase text-[#7C3AED] md:text-sm"
          >
            your tasks. your time. your flow.
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold leading-[1.3] text-[#111111] md:text-4xl lg:text-5xl lg:leading-[1.2]"
          >
            Stay Organized
            <br />
            <span className="text-4xl text-[#111111] md:text-5xl lg:text-7xl">
              Get
            </span>{" "}
            <span className="text-4xl text-[#7C3AED] md:text-5xl lg:text-7xl">
              More Done
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-md font-medium leading-6 text-[#202020] lg:max-w-[600px] lg:text-xl"
          >
            TaskFlow helps you plan, track, and complete your tasks with ease.
            Simple, smart and built for everyday productivity.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 text-white md:gap-5 md:pb-0"
          >
            <a
              href={APK_DOWNLOAD_URL}
              download
              className="flex items-center gap-2 rounded-md bg-[#7C3AED] px-6 py-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <FaAndroid aria-hidden="true" className="text-xl lg:text-2xl" />
              <span className="text-[12px] font-semibold md:text-md">
                Download APK
              </span>
            </a>

            <div className="flex items-center gap-2 rounded-md bg-[#7C3AED] px-6 py-4 text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <FaApple aria-hidden="true" className="text-xl lg:text-2xl" />
              <span className="text-[12px] font-semibold md:text-md">
                Coming soon on
                <br />
                App store
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Woman holding the TaskFlow app */}
        <div className="animate-hero-right relative flex w-full items-end justify-center md:w-1/2 md:self-stretch md:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex w-full items-end justify-center md:mt-auto md:justify-end"
          >
            <LazyLoadImage
              effect="blur"
              src="/images/homepage-image.png"
              alt="Person holding a phone displaying the TaskFlow app"
              className="h-auto w-[380px] object-contain object-bottom md:w-full lg:w-[380px]"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
