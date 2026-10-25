import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

const quickLinks = [
  { label: "Features", to: "features" },
  { label: "How It Works", to: "how-it-works" },
  { label: "Why TaskFlow", to: "why-taskflow" },
];

const legalLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.6,
      delay: shouldReduceMotion ? 0 : delay,
    },
  });

  return (
    <motion.footer
      initial={
        shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full bg-[#F5F0FF] px-5 py-10 text-[#111638] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <motion.div {...fadeUp(0.1)} className="space-y-3">
            <ScrollLink
              to="home"
              smooth="easeInOutQuart"
              duration={800}
              offset={-90}
              className="inline-flex cursor-pointer items-center gap-2"
              aria-label="TaskFlow home"
            >
              <img src="/images/logo.png" alt="" className="h-auto w-[50px]" />
              <span className="text-xl font-semibold text-[#7C3AED]">
                TaskFlow
              </span>
            </ScrollLink>

            <p className="max-w-xs text-xs leading-6 text-slate-600">
              Organize your tasks. Build better habits. Achieve more with
              TaskFlow.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div {...fadeUp(0.2)}>
            <h3 className="mb-4 text-sm font-bold text-[#111638]">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth="easeInOutQuart"
                    duration={800}
                    offset={-90}
                    className="cursor-pointer text-xs text-slate-600 transition-colors duration-200 hover:text-[#7C3AED]"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div {...fadeUp(0.3)}>
            <h3 className="mb-4 text-sm font-bold text-[#111638]">Legal</h3>

            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <RouterLink
                    to={link.href}
                    className="text-xs text-slate-600 transition-colors duration-200 hover:text-[#7C3AED]"
                  >
                    {link.label}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div {...fadeUp(0.4)}>
            <h3 className="mb-4 text-sm font-bold text-[#111638]">Contact</h3>

            <a
              href="mailto:codeysis.1@gmail.com"
              className="break-all text-xs text-slate-600 transition-colors duration-200 hover:text-[#7C3AED]"
            >
              codeysis.1@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-[#DDD6FE] pt-5 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
