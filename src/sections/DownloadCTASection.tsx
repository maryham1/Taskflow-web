import { FaAndroid, FaApple } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const APK_DOWNLOAD_URL =
  "https://github.com/maryham1/Taskflow-web/releases/download/v1.0.0/TaskFlow.apk";

export default function DownloadCTASection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="download"
      initial={
        shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-white w-full px-5 py-10 sm:px-8 lg:px-12 border-gray-300/40 border-b-[0.5px]"
    >
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 overflow-hidden rounded-2xl bg-[#7C3AED] px-6 pt-8 sm:px-10 md:flex-row md:justify-between md:gap-6 md:pl-10 md:pr-6 md:pt-0 lg:px-14">
        {/* CTA content */}
        <div className="relative z-10 flex w-full flex-col items-center py-4 text-center md:w-3/5 md:items-start md:py-10 md:text-left">
          <span className="text-[10px] font-bold tracking-[0.25em] text-violet-200 sm:text-xs">
            READY TO TAKE CONTROL?
          </span>

          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Download TaskFlow Today
          </h2>

          <p className="max-w-lg text-sm leading-6 text-violet-100 sm:text-base">
            Start organizing your tasks and make every day count.
          </p>

          {/* Download buttons */}
          <div className="mt-6 flex items-center justify-center gap-3 md:justify-start">
            <a
              href={APK_DOWNLOAD_URL}
              download
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-gray-900 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <FaAndroid aria-hidden="true" className="text-lg" />
              Download APK
            </a>

            {/* App Store coming soon */}
            <div className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-black px-5 py-3 text-white">
              <FaApple aria-hidden="true" className="text-xl" />

              <div className="text-left">
                <p className="text-xs font-bold">Coming soon on</p>
                <p className="text-[10px]">App Store</p>
              </div>
            </div>
          </div>
        </div>
        {/* fixxxx */}
        {/* Onboarding image */}
        <div className="flex w-full items-end justify-center md:w-2/5 md:self-stretch">
          <LazyLoadImage
            effect="blur"
            src="/images/onboarding-image.png"
            alt="TaskFlow app onboarding screen"
            loading="lazy"
            className="h-auto max-h-[230px] w-auto max-w-full object-contain object-bottom md:max-h-[230px]"
          />
        </div>
      </div>
    </motion.section>
  );
}
