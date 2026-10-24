import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaHeart,
} from "react-icons/fa6";

const quickLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why TaskFlow", href: "#why-taskflow" },
];

const legalLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/",
    icon: FaXTwitter,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: FaLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F5F0FF] px-5 py-10 text-[#111638] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <a
              href="#home"
              aria-label="TaskFlow home"
              className="inline-flex items-center gap-2 text-[#7C3AED]"
            >
              <div className="">
                <a href="" className="flex flex-row items-center">
                  <img src="images/logo.png" className="w-[50px] h-auto" />
                  <span className="text-[#7C3AED] font-semibold text-sm md:text-[20px]">
                    TaskFlow
                  </span>
                </a>
              </div>
            </a>

            <p className="mt-4 max-w-xs text-xs leading-6 text-slate-600">
              Organize your tasks. Build better habits. Achieve more with
              TaskFlow.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold text-[#111638]">Quick Links</h3>

            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-600 transition-colors duration-200 hover:text-[#7C3AED]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-bold text-[#111638]">Legal</h3>

            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-600 transition-colors duration-200 hover:text-[#7C3AED]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-sm font-bold text-[#111638]">Follow Us</h3>

            <div className="mt-4 flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-base text-[#111638] transition-all duration-200 hover:-translate-y-1 hover:text-[#7C3AED]"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
