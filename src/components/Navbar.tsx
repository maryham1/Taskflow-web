const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why TaskFlow", href: "#why-taskflow" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/75 shadow-sm shadow-violet-950/[0.03] backdrop-blur-xl backdrop-saturate-150">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex  w-full items-center justify-between px-4 md:px-6 lg:px-10 py-3"
      >
        {/* TaskFlow logo */}
        <div className="">
          <a href="" className="flex flex-row items-center">
            <img src="images/logo.png" className="w-[50px] h-auto" />
            <span className="text-[#7C3AED] font-semibold text-sm md:text-[20px]">
              TaskFlow
            </span>
          </a>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm  md:text-[15px] font-semibold text-[#7C3AED] transition-colors hover:text-violet-700"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Download button: visible on desktop and mobile */}
        <a
          href="#app-preview"
          className="bg-[#7C3AED] text-white text-sm md:text-[15px] px-8 font-semibold py-2 rounded-md"
        >
          Get the app
        </a>
      </nav>
    </header>
  );
}
