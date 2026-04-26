/**
 * Case Study Page — Understanding Connected Fitness Drop-Off
 * Warm Research Studio design
 * Sections: Hero, Overview & Outcomes, Approach (3 phases), Key Findings, Recommendations, My Role, Reflections
 */
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// ─── Section wrapper with scroll animation ──────────────────────────────────

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useScrollAnimation();
  return (
    <section id={id} ref={ref} className={`py-20 ${className}`}>
      {children}
    </section>
  );
}

// ─── Section label ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px w-8 bg-[#C4A882]" />
      <span className="font-['Source_Sans_3'] text-[#6B7A8D] text-xs tracking-[0.2em] uppercase">
        {children}
      </span>
    </div>
  );
}

// ─── Phase card ──────────────────────────────────────────────────────────────

function PhaseCard({
  number,
  title,
  children,
  delay = 0,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <div
      className="fade-up bg-white border border-[#E8E2D9] rounded-sm p-6 shadow-sm"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <span className="font-['Cormorant_Garamond'] text-[#C4A882] text-4xl font-bold leading-none">
          {number}
        </span>
        <h3 className="font-['Cormorant_Garamond'] text-[#2C3A52] text-xl font-semibold leading-snug pt-1">
          {title}
        </h3>
      </div>
      <div className="font-['Source_Sans_3'] text-[#2C3A52]/75 text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

// ─── Finding card ────────────────────────────────────────────────────────────

function FindingCard({
  title,
  items,
  delay = 0,
}: {
  title: string;
  items: string[];
  delay?: number;
}) {
  return (
    <div
      className="fade-up bg-white border border-[#E8E2D9] rounded-sm p-6 shadow-sm"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="font-['Cormorant_Garamond'] text-[#2C3A52] text-xl font-semibold mb-4 pb-3 border-b border-[#E8E2D9]">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 font-['Source_Sans_3'] text-sm text-[#2C3A52]/80 leading-relaxed">
            <span className="text-[#C4A882] flex-shrink-0 mt-0.5">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Recommendation card ─────────────────────────────────────────────────────

function RecommendationCard({
  label,
  title,
  items,
  delay = 0,
}: {
  label: string;
  title: string;
  items: string[];
  delay?: number;
}) {
  return (
    <div
      className="fade-up border-l-4 border-[#C4A882] pl-6 py-2"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="font-['Source_Sans_3'] text-[#6B7A8D] text-xs tracking-[0.15em] uppercase font-semibold">
        {label}
      </span>
      <h3 className="font-['Cormorant_Garamond'] text-[#2C3A52] text-xl font-semibold mt-1 mb-3">
        {title}
      </h3>
      <ol className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 font-['Source_Sans_3'] text-sm text-[#2C3A52]/80 leading-relaxed">
            <span className="text-[#C4A882] font-semibold flex-shrink-0">{i + 1}.</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

// ─── Reflection card ─────────────────────────────────────────────────────────

function ReflectionCard({
  number,
  title,
  details,
  learning,
  delay = 0,
}: {
  number: number;
  title: string;
  details: string[];
  learning: string;
  delay?: number;
}) {
  return (
    <div
      className="fade-up bg-white border border-[#E8E2D9] rounded-sm p-6 shadow-sm"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3 mb-3">
        <span className="w-6 h-6 rounded-full bg-[#2C3A52] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
          {number}
        </span>
        <h3 className="font-['Cormorant_Garamond'] text-[#2C3A52] text-xl font-semibold">
          {title}
        </h3>
      </div>
      <ul className="space-y-1 mb-4 ml-9">
        {details.map((d, i) => (
          <li key={i} className="font-['Source_Sans_3'] text-sm text-[#2C3A52]/70 leading-relaxed">
            · {d}
          </li>
        ))}
      </ul>
      <div className="ml-9 bg-[#FAF8F4] border border-[#E8E2D9] rounded-sm p-3">
        <span className="font-['Source_Sans_3'] text-[#C4A882] text-xs font-semibold uppercase tracking-wide">
          Learning
        </span>
        <p className="mt-1 font-['Source_Sans_3'] text-sm text-[#2C3A52]/80 leading-relaxed italic">
          {learning}
        </p>
      </div>
    </div>
  );
}

// ─── Case Study Page ─────────────────────────────────────────────────────────

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <Navigation />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[60vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663602431604/Q6uMhoERvhZVBV5BAGKn9S/case-study-bg-3avd3PDNfNwmdbcnYmqqHF.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C3A52] via-[#2C3A52]/70 to-[#2C3A52]/40" />
        <div className="relative z-10 container mx-auto px-6 max-w-6xl pb-16 pt-32">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-['Source_Sans_3'] text-white/60 hover:text-[#C4A882] text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#C4A882]" />
            <span className="font-['Source_Sans_3'] text-[#C4A882] text-xs tracking-[0.2em] uppercase">
              Case Study
            </span>
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-white text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight max-w-3xl">
            Understanding Connected
            <br />
            <span className="italic text-[#C4A882]">Fitness Drop-Off</span>
          </h1>
        </div>
      </section>

      {/* ── Quick stats bar ───────────────────────────────────────────── */}
      <div className="bg-[#2C3A52]">
        <div className="container mx-auto px-6 max-w-6xl py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "25", label: "Interviews" },
              { value: "3", label: "Research Phases" },
              { value: "4 months", label: "Duration" },
              { value: "Contract", label: "Engagement Type" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="font-['Cormorant_Garamond'] text-[#C4A882] text-3xl font-bold">
                  {stat.value}
                </div>
                <div className="font-['Source_Sans_3'] text-white/50 text-xs tracking-wide mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Overview & Outcomes ───────────────────────────────────────── */}
      <Section id="overview" className="bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Overview */}
            <div className="fade-up">
              <SectionLabel>Overview</SectionLabel>
              <h2 className="font-['Cormorant_Garamond'] text-[#2C3A52] text-4xl font-semibold mb-6">
                The Challenge
              </h2>
              <p className="font-['Source_Sans_3'] text-[#2C3A52]/80 text-base leading-relaxed mb-4">
                A connected fitness company launched a $2,000+ rowing machine with gamified workout
                software in May 2020. Several months after launch, they noticed concerning trends in
                workout metrics, with monthly usage per account declining steadily.
              </p>
              <p className="font-['Source_Sans_3'] text-[#2C3A52]/70 text-base leading-relaxed mb-6">
                The COO initiated research to understand:
              </p>
              <ul className="space-y-2">
                {[
                  "Patterns in user activity before dropping off",
                  "Reasons for decreased or discontinued usage",
                  "Users' broader fitness routines outside the platform",
                  "Potential motivators for increased engagement",
                ].map((item) => (
                  <li key={item} className="flex gap-3 font-['Source_Sans_3'] text-sm text-[#2C3A52]/80 leading-relaxed">
                    <span className="text-[#C4A882] flex-shrink-0 mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div className="fade-up" style={{ transitionDelay: "150ms" }}>
              <SectionLabel>Outcomes</SectionLabel>
              <h2 className="font-['Cormorant_Garamond'] text-[#2C3A52] text-4xl font-semibold mb-6">
                What We Achieved
              </h2>
              <p className="font-['Source_Sans_3'] text-[#2C3A52]/70 text-base leading-relaxed mb-6">
                While not identifying any simple fixes for usage decline, this research:
              </p>
              <ul className="space-y-3">
                {[
                  "Provided visibility into previously unstudied user segments",
                  "Created actionable insights through an Opportunity Solution Tree framework",
                  "Maintained an agile research approach, adapting to findings",
                  "Shifted internal understanding of user behavior patterns",
                  "Established foundation for future product improvements",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-[#C4A882]/20 border border-[#C4A882] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-[#C4A882]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-['Source_Sans_3'] text-sm text-[#2C3A52]/80 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Approach ──────────────────────────────────────────────────── */}
      <Section id="approach" className="bg-[#FAF8F4]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="fade-up mb-12">
            <SectionLabel>Approach</SectionLabel>
            <h2 className="font-['Cormorant_Garamond'] text-[#2C3A52] text-4xl font-semibold mb-4">
              Research Methodology
            </h2>
            <p className="font-['Source_Sans_3'] text-[#2C3A52]/70 text-base leading-relaxed max-w-2xl">
              The team had historically heard from two extreme user groups: highly engaged users
              active on social media and dissatisfied customers seeking returns. This project aimed
              to understand the middle ground — users at risk of churning based on usage patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <PhaseCard number="01" title="Data Analysis & Segmentation" delay={0}>
              <p className="mb-3">I began by defining and analyzing two key user segments:</p>
              <div className="space-y-3">
                <div className="bg-[#FAF8F4] border border-[#E8E2D9] rounded-sm p-3">
                  <p className="font-semibold text-[#2C3A52] mb-1">"Tricklers"</p>
                  <p>Users who started strong but reduced usage over time. Defined as averaging 2+ workout days/week in first four weeks, followed by less than 2 days/week subsequently.</p>
                </div>
                <div className="bg-[#FAF8F4] border border-[#E8E2D9] rounded-sm p-3">
                  <p className="font-semibold text-[#2C3A52] mb-1">Low Usage Users</p>
                  <p>Defined as using the rower less than 30% of owned weeks. Represented approximately 30% of total users.</p>
                </div>
              </div>
            </PhaseCard>

            <PhaseCard number="02" title="Qualitative Research" delay={100}>
              <p className="mb-3">Conducted 25 one-on-one semi-structured interviews:</p>
              <ul className="space-y-1.5 mb-4">
                <li>· 11 interviews with "tricklers"</li>
                <li>· 14 interviews with low usage users</li>
                <li>· Sessions lasted 30–60 minutes</li>
                <li>· Participants compensated with $50 Amazon gift cards</li>
              </ul>
              <p className="font-semibold text-[#2C3A52] mb-2">Key Interview Focus Areas:</p>
              <ul className="space-y-1">
                <li>· Overall fitness routines and goals</li>
                <li>· Specific experiences with the rower</li>
                <li>· COVID-19's impact on exercise habits</li>
                <li>· Recent workout patterns</li>
              </ul>
            </PhaseCard>

            <PhaseCard number="03" title="Quantitative Validation" delay={200}>
              <p>
                Developed a survey to validate interview findings across the larger low usage
                population. Despite low response rates (2%), the data provided directional insights
                for prioritization.
              </p>
              <div className="mt-4 bg-[#FAF8F4] border border-[#E8E2D9] rounded-sm p-3">
                <p className="font-semibold text-[#2C3A52] text-xs uppercase tracking-wide mb-1">
                  Note on Agility
                </p>
                <p>
                  The research approach remained adaptive throughout — findings from qualitative
                  phases shaped the direction of subsequent work.
                </p>
              </div>
            </PhaseCard>
          </div>
        </div>
      </Section>

      {/* ── Key Findings ──────────────────────────────────────────────── */}
      <Section id="findings" className="bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="fade-up mb-12">
            <SectionLabel>Key Findings</SectionLabel>
            <h2 className="font-['Cormorant_Garamond'] text-[#2C3A52] text-4xl font-semibold">
              What We Learned
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FindingCard
              title="Trickler Segment Insights"
              delay={0}
              items={[
                "Usage decline often reflected intentional adjustment, not dissatisfaction",
                "Users started with high enthusiasm but settled into personally sustainable routines",
                "This segment showed high satisfaction despite reduced usage",
              ]}
            />
            <FindingCard
              title="Low Usage Segment Insights"
              delay={100}
              items={[
                "More likely to report challenges with both exercise generally and the rower specifically",
                "Time constraints and competing priorities were key barriers",
                "Difficulty level for new rowers created friction",
                "Initial workout experiences often felt challenging and frustrating",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* ── Recommendations ───────────────────────────────────────────── */}
      <Section id="recommendations" className="bg-[#FAF8F4]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="fade-up mb-12">
            <SectionLabel>Recommendations</SectionLabel>
            <h2 className="font-['Cormorant_Garamond'] text-[#2C3A52] text-4xl font-semibold">
              Actionable Next Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <RecommendationCard
              label="Immediate Actions"
              title="Short-Term Priorities"
              delay={0}
              items={[
                "Prioritize improving new rower onboarding experience",
                "Focus on making initial workouts feel more achievable",
                "Address time constraint barriers through product adaptations",
              ]}
            />
            <RecommendationCard
              label="Long-Term Strategic"
              title="Strategic Recommendations"
              delay={100}
              items={[
                "Create success metrics for new users' first experiences",
                "Develop strategies to help users prioritize rowing among competing activities",
                "Continue research into early user experience, particularly first two weeks",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* ── My Role ───────────────────────────────────────────────────── */}
      <Section id="role" className="bg-[#2C3A52]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C4A882]" />
                <span className="font-['Source_Sans_3'] text-[#C4A882] text-xs tracking-[0.2em] uppercase">
                  My Role
                </span>
              </div>
              <h2 className="font-['Cormorant_Garamond'] text-white text-4xl font-semibold mb-6">
                Contract Researcher
                <br />
                <span className="italic text-[#C4A882]">over Four Months</span>
              </h2>
              <p className="font-['Source_Sans_3'] text-white/70 text-base leading-relaxed mb-6">
                As a quarter-time contract researcher, I worked closely with the core team while
                maintaining independence in research design and execution.
              </p>
              <p className="font-['Source_Sans_3'] text-white/60 text-sm leading-relaxed italic border-l-2 border-[#C4A882] pl-4">
                A unique aspect of this project was that I didn't have access to the rowing machine
                itself, requiring close collaboration with the team to fill knowledge gaps about
                product functionality.
              </p>
            </div>

            <div className="fade-up" style={{ transitionDelay: "150ms" }}>
              <ul className="space-y-4">
                {[
                  "Led research planning and execution",
                  "Conducted both qualitative and quantitative analysis",
                  "Collaborated weekly with the COO, PM, Designer, and Data Analyst",
                  "Maintained ongoing communication via Slack",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-sm bg-[#C4A882]/20 border border-[#C4A882]/40 flex items-center justify-center flex-shrink-0">
                      <span className="font-['Cormorant_Garamond'] text-[#C4A882] text-sm font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="font-['Source_Sans_3'] text-white/80 text-sm leading-relaxed pt-1.5">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Reflections ───────────────────────────────────────────────── */}
      <Section id="reflections" className="bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="fade-up mb-12">
            <SectionLabel>Research Process Reflections</SectionLabel>
            <h2 className="font-['Cormorant_Garamond'] text-[#2C3A52] text-4xl font-semibold">
              Challenges & Learnings
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ReflectionCard
              number={1}
              title="Recruitment Difficulties"
              details={[
                "Low response rates from less engaged users",
                "High cancellation rates",
              ]}
              learning="Expand on message testing to explore different incentives and scheduling approaches when response and attendance is low."
              delay={0}
            />
            <ReflectionCard
              number={2}
              title="Data Quality"
              details={["Self-reported usage often differed from actual data"]}
              learning="Consider offering non-video interviews for participant comfort and set expectations upfront about why they were selected to participate, in situations where it would be beneficial to the research."
              delay={100}
            />
            <ReflectionCard
              number={3}
              title="Limited Product Access"
              details={["Challenging to make detailed recommendations without hands-on experience"]}
              learning="Establish more structured product knowledge transfer with teams when necessary."
              delay={200}
            />
          </div>
        </div>
      </Section>

      {/* ── Back CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#FAF8F4] border-t border-[#E8E2D9]">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <p className="font-['Source_Sans_3'] text-[#6B7A8D] text-sm mb-6">
            Interested in learning more about my work?
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-[#2C3A52] hover:bg-[#1e2d42] text-white font-['Source_Sans_3'] font-semibold text-sm px-8 py-3.5 rounded-sm transition-colors tracking-wide"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Portfolio
          </Link>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="bg-[#2C3A52] py-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#C4A882] flex items-center justify-center">
                <span className="font-['Cormorant_Garamond'] font-bold text-[#2C3A52] text-xs tracking-wider">
                  AC
                </span>
              </div>
              <span className="font-['Source_Sans_3'] text-white/70 text-sm">
                Allison Cassing — UX Researcher
              </span>
            </div>
            <p className="font-['Source_Sans_3'] text-white/40 text-xs">
              © {new Date().getFullYear()} Allison Cassing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
