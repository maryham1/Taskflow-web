import { Link } from "react-router-dom";
import { FaArrowLeft, FaFileContract, FaShieldAlt } from "react-icons/fa";

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "service", title: "2. About TaskFlow" },
  { id: "accounts", title: "3. Your Account" },
  { id: "responsibilities", title: "4. Your Responsibilities" },
  { id: "features", title: "5. Tasks, Alarms and Reminders" },
  { id: "availability", title: "6. Service Availability" },
  { id: "intellectual-property", title: "7. Intellectual Property" },
  { id: "termination", title: "8. Account Suspension and Termination" },
  { id: "disclaimers", title: "9. Disclaimers" },
  { id: "liability", title: "10. Limitation of Liability" },
  { id: "changes", title: "11. Changes to These Terms" },
  { id: "contact", title: "12. Contact Us" },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white text-[#111638]">
      {/* Page header */}
      <section className="border-b border-[#E9DDFD] bg-[#F5F0FF] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7C3AED] transition hover:text-[#5B21B6]"
          >
            <FaArrowLeft aria-hidden="true" />
            Back to TaskFlow
          </Link>

          <div className="mt-8 flex size-14 items-center justify-center rounded-2xl bg-[#7C3AED] text-2xl text-white shadow-lg shadow-[#7C3AED]/20">
            <FaFileContract aria-hidden="true" />
          </div>

          <p className="mt-6 text-xs font-bold tracking-[0.2em] text-[#7C3AED]">
            LEGAL
          </p>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Please read these terms carefully before using TaskFlow. They
            explain the rules and conditions that apply when you use our
            productivity app and related services.
          </p>

          <p className="mt-5 text-xs text-slate-500">
            Last updated: October 25, 2026
          </p>
        </div>
      </section>

      {/* Terms content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16 lg:px-12">
        {/* Table of contents */}
        <aside className="h-fit rounded-2xl border border-[#E9DDFD] bg-[#FCFAFF] p-5 lg:sticky lg:top-8">
          <h2 className="text-sm font-bold">On this page</h2>

          <nav aria-label="Terms of Service sections" className="mt-4">
            <ul className="space-y-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm leading-5 text-slate-600 transition-colors hover:text-[#7C3AED]"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 rounded-xl bg-[#F0E7FF] p-4">
            <FaShieldAlt
              aria-hidden="true"
              className="text-xl text-[#7C3AED]"
            />
            <p className="mt-2 text-xs leading-5 text-slate-600">
              Your use of TaskFlow is also subject to our Privacy Policy.
            </p>
            <Link
              to="/privacy"
              className="mt-2 inline-block text-xs font-bold text-[#7C3AED] hover:text-[#5B21B6]"
            >
              Read Privacy Policy →
            </Link>
          </div>
        </aside>

        {/* Main terms */}
        <article className="min-w-0 space-y-10">
          <section id="acceptance" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              1. Acceptance of Terms
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              By downloading, accessing, or using TaskFlow, you agree to these
              Terms of Service. If you do not agree with these terms, please do
              not use the app or related services. If you use TaskFlow on behalf
              of another person or organization, you confirm that you have the
              authority to accept these terms on their behalf.
            </p>
          </section>

          <section id="service" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">2. About TaskFlow</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              TaskFlow is a productivity and task-management application
              designed to help users organize tasks, schedule activities, set
              alarms and reminders, and monitor their progress. Features may
              vary depending on the version of the app and the device being
              used.
            </p>
          </section>

          <section id="accounts" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">3. Your Account</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Some TaskFlow features require an account. When creating an
              account, you agree to provide accurate information and keep your
              account details up to date. You are responsible for maintaining
              the confidentiality of your login credentials and for activities
              carried out through your account.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              If you believe someone has accessed your account without
              permission, contact us promptly so the issue can be reviewed.
            </p>
          </section>

          <section id="responsibilities" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              4. Your Responsibilities
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              You agree to use TaskFlow lawfully and responsibly. You must not
              attempt to interfere with the app's operation, gain unauthorized
              access to its systems, distribute malicious code, or use the
              service in a way that infringes another person's rights.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              You are responsible for the tasks, descriptions, and other
              information you enter into the app.
            </p>
          </section>

          <section id="features" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              5. Tasks, Alarms and Reminders
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              TaskFlow provides tools for scheduling tasks and receiving alarm
              reminders. You are responsible for entering accurate task details,
              including dates and start times, and for checking that your device
              settings allow alarms to operate.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Alarm delivery may be affected by device permissions, battery
              optimization, operating-system settings, connectivity where
              applicable, or other factors outside our control. TaskFlow should
              not be relied on as the sole method for critical deadlines,
              emergencies, or time-sensitive obligations.
            </p>
          </section>

          <section id="availability" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              6. Service Availability
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We aim to keep TaskFlow useful and available, but we cannot
              guarantee uninterrupted access or that every feature will always
              operate without errors. We may update, modify, suspend, or
              discontinue parts of the service when reasonably necessary.
            </p>
          </section>

          <section id="intellectual-property" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              7. Intellectual Property
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              TaskFlow and its associated branding, design, software, and
              content are protected by applicable intellectual-property laws.
              These terms do not transfer ownership of those rights to you. You
              may use the app for its intended purpose, subject to these terms
              and applicable law.
            </p>
          </section>

          <section id="termination" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              8. Account Suspension and Termination
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We may restrict or suspend access where reasonably necessary to
              protect the service, its users, or comply with applicable law,
              including where these terms are seriously or repeatedly violated.
              Where appropriate and legally permitted, we will take reasonable
              steps to explain the reason for such action.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              You may stop using TaskFlow at any time. For account deletion or
              questions about personal data, consult our Privacy Policy or
              contact us.
            </p>
          </section>

          <section id="disclaimers" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">9. Disclaimers</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              TaskFlow is provided as a productivity tool. To the extent
              permitted by applicable law, we do not guarantee that using the
              app will achieve a particular result or that the service will
              always be error-free. You remain responsible for managing your
              schedule and verifying important task deadlines.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Nothing in these terms excludes a consumer right or legal
              protection that cannot lawfully be excluded.
            </p>
          </section>

          <section id="liability" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              10. Limitation of Liability
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              To the extent permitted by applicable law, TaskFlow will not be
              liable for indirect or consequential losses arising from the use
              of the service, including losses caused by missed reminders,
              device issues, or interruptions. Nothing in these terms limits
              liability where doing so would be unlawful.
            </p>
          </section>

          <section id="changes" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              11. Changes to These Terms
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We may update these terms as TaskFlow develops or when legal
              requirements change. When updates are made, we will revise the
              date shown at the top of this page. Your continued use of TaskFlow
              after updated terms take effect means you accept the revised
              terms, where permitted by law.
            </p>
          </section>

          <section id="contact" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">12. Contact Us</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              If you have questions about these Terms of Service, please contact
              the TaskFlow team through the official contact channel provided on
              our website.
            </p>
          </section>

          {/* Bottom notice */}
          <div className="rounded-2xl border border-[#E9DDFD] bg-[#F5F0FF] p-5 sm:p-6">
            <h2 className="text-base font-bold text-[#7C3AED]">
              Thank you for using TaskFlow
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              We built TaskFlow to help you plan your time, organize your tasks,
              and make progress toward your goals.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
