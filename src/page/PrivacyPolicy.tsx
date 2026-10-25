import { Link } from "react-router-dom";
import { FaArrowLeft, FaShieldAlt, FaLock } from "react-icons/fa";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "information", title: "2. Information We Collect" },
  { id: "usage", title: "3. How We Use Information" },
  { id: "tasks", title: "4. Tasks, Schedules and Alarms" },
  { id: "account", title: "5. Account and Security" },
  { id: "storage", title: "6. Data Storage and Protection" },
  { id: "sharing", title: "7. Sharing Your Information" },
  { id: "permissions", title: "8. Device Permissions" },
  { id: "retention", title: "9. Data Retention and Deletion" },
  { id: "rights", title: "10. Your Privacy Rights" },
  { id: "children", title: "11. Children's Privacy" },
  { id: "changes", title: "12. Changes to This Policy" },
  { id: "contact", title: "13. Contact Us" },
];

export default function PrivacyPolicy() {
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
            <FaShieldAlt aria-hidden="true" />
          </div>

          <p className="mt-6 text-xs font-bold tracking-[0.2em] text-[#7C3AED]">
            LEGAL
          </p>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Your privacy matters. This policy explains how TaskFlow may collect,
            use, store, and protect information when you use our productivity
            app and related services.
          </p>

          <p className="mt-5 text-xs text-slate-500">
            Last updated: October 25, 2026
          </p>
        </div>
      </section>

      {/* Policy content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16 lg:px-12">
        {/* Table of contents */}
        <aside className="h-fit rounded-2xl border border-[#E9DDFD] bg-[#FCFAFF] p-5 lg:sticky lg:top-8">
          <h2 className="text-sm font-bold">On this page</h2>

          <nav aria-label="Privacy Policy sections" className="mt-4">
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
            <FaLock aria-hidden="true" className="text-xl text-[#7C3AED]" />
            <p className="mt-2 text-xs leading-5 text-slate-600">
              Learn the rules that apply when using TaskFlow.
            </p>
            <Link
              to="/terms"
              className="mt-2 inline-block text-xs font-bold text-[#7C3AED] hover:text-[#5B21B6]"
            >
              Read Terms of Service →
            </Link>
          </div>
        </aside>

        {/* Main policy */}
        <article className="min-w-0 space-y-10">
          <section id="introduction" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">1. Introduction</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              TaskFlow is a productivity application designed to help you
              organize tasks, schedule activities, receive alarms and reminders,
              and monitor your progress. This Privacy Policy describes how
              information may be handled when you use TaskFlow.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              By using TaskFlow, you acknowledge this policy. Please review it
              carefully before creating an account or entering personal
              information into the app.
            </p>
          </section>

          <section id="information" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              2. Information We Collect
            </h2>

            <h3 className="mt-4 font-bold">Account information</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
              Depending on the features you use, this may include your name,
              email address, account credentials, and information you provide
              when registering or managing your account.
            </p>

            <h3 className="mt-4 font-bold">Task and schedule information</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
              Tasks, descriptions, scheduled dates and times, completion status,
              priorities, and related information you enter into TaskFlow may be
              processed to provide task-management features.
            </p>

            <h3 className="mt-4 font-bold">Technical information</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
              Depending on the app's implementation and services it uses,
              technical information such as device or operating-system details,
              diagnostic information, and service logs may be processed to
              operate, secure, and troubleshoot the app.
            </p>
          </section>

          <section id="usage" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              3. How We Use Information
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Information may be used to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-slate-600 sm:text-base">
              <li>Create and manage your account.</li>
              <li>Save and organize tasks and schedules.</li>
              <li>Provide task alarms, reminders, and progress statistics.</li>
              <li>Maintain app functionality and account security.</li>
              <li>Diagnose errors and improve reliability.</li>
              <li>Respond to support requests and meet legal obligations.</li>
            </ul>
          </section>

          <section id="tasks" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              4. Tasks, Schedules and Alarms
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              TaskFlow uses task and scheduling details to provide the features
              you request. Depending on how alarms are implemented, reminder
              schedules may be stored or processed on your device or through app
              services.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Alarm functionality may require device permissions. Your
              operating-system settings, battery restrictions, and other device
              conditions can affect whether an alarm sounds at the expected
              time.
            </p>
          </section>

          <section id="account" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              5. Account and Security
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              TaskFlow may use account verification and authentication
              mechanisms to protect accounts. You should keep your credentials
              private and notify us if you suspect unauthorized access.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              We take reasonable measures intended to protect information, but
              no electronic storage or transmission method can be guaranteed to
              be completely secure.
            </p>
          </section>

          <section id="storage" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              6. Data Storage and Protection
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Information may be stored locally on your device or on
              infrastructure used to provide TaskFlow, depending on the feature
              and app configuration. We aim to use reasonable technical and
              organizational safeguards to protect information against
              unauthorized access, loss, misuse, or alteration.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              The actual storage locations, service providers, and security
              controls depend on TaskFlow's current technical implementation.
            </p>
          </section>

          <section id="sharing" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              7. Sharing Your Information
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We do not describe your information as public simply because you
              use TaskFlow. Information may be processed by service providers
              that help operate the app, where applicable, or disclosed when
              required by law, necessary to protect rights and security, or
              otherwise permitted by applicable law.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              The specific providers involved depend on the services integrated
              into the version of TaskFlow you use.
            </p>
          </section>

          <section id="permissions" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              8. Device Permissions
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              TaskFlow may request device permissions needed for features such
              as scheduling alarms or reminders. You can review or change
              available permissions in your device settings. Turning off a
              permission may affect the corresponding feature.
            </p>
          </section>

          <section id="retention" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              9. Data Retention and Deletion
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Information should be retained only for as long as necessary for
              the purposes described in this policy, subject to applicable
              legal, security, and operational requirements.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              If you want to delete your account or request deletion of personal
              information, contact the TaskFlow team through its official
              support channel. Some information may need to be retained where
              the law requires it.
            </p>
          </section>

          <section id="rights" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              10. Your Privacy Rights
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Depending on your location and applicable law, you may have rights
              to request access to, correction of, deletion of, or restrictions
              on the processing of your personal information. You may also have
              the right to object to certain processing or withdraw consent
              where processing is based on consent.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              To exercise an applicable right, contact us through the official
              support channel. We may need to verify your identity before
              responding.
            </p>
          </section>

          <section id="children" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              11. Children's Privacy
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              TaskFlow is not intended to collect personal information from
              children in violation of applicable law. If you believe a child
              has provided personal information inappropriately, contact us so
              we can review the situation and take appropriate action.
            </p>
          </section>

          <section id="changes" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">
              12. Changes to This Policy
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We may update this Privacy Policy when TaskFlow changes or when
              legal or operational requirements change. We will update the date
              at the top of this page when we publish a revision. Please review
              the policy periodically.
            </p>
          </section>

          <section id="contact" className="scroll-mt-8">
            <h2 className="text-xl font-bold sm:text-2xl">13. Contact Us</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              If you have questions about this Privacy Policy, your personal
              information, or a privacy request, contact the TaskFlow team
              through the official contact channel listed on our website.
            </p>
          </section>

          {/* Bottom notice */}
          <div className="rounded-2xl border border-[#E9DDFD] bg-[#F5F0FF] p-5 sm:p-6">
            <h2 className="text-base font-bold text-[#7C3AED]">
              Your privacy matters
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              We want you to feel confident using TaskFlow to organize your day.
              If you have a privacy question, please contact our team.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
