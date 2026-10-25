import { Link } from "react-scroll";

const navLinks = [
  { label: "Features", href: "features" },
  { label: "How It Works", href: "how-it-works" },
  { label: "Why TaskFlow", href: "why-taskflow" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/60 bg-white/75 shadow-sm shadow-violet-950/[0.03] backdrop-blur-xl backdrop-saturate-150">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full items-center justify-between px-4 py-3 md:px-6 lg:px-10"
      >
        {/* Logo */}
        <Link
          to="home"
          smooth="easeInOutQuart"
          duration={800}
          offset={-90}
          className="flex cursor-pointer items-center"
          aria-label="TaskFlow home"
        >
          <img src="/images/logo.png" alt="" className="h-auto w-[50px]" />
          <span className="text-sm font-semibold text-[#7C3AED] md:text-[20px]">
            TaskFlow
          </span>
        </Link>

        {/* Navigation links */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              smooth="easeInOutQuart"
              duration={800}
              offset={-90}
              spy
              className="cursor-pointer text-sm font-semibold text-[#7C3AED] transition-colors hover:text-violet-700 md:text-[15px]"
              activeClass="text-violet-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="download"
          smooth="easeInOutQuart"
          duration={800}
          offset={-90}
          className="cursor-pointer rounded-md bg-[#7C3AED] px-4 py-2 text-sm font-semibold text-white md:px-8 md:text-[15px]"
        >
          Get the app
        </Link>
      </nav>
    </header>
  );
}
