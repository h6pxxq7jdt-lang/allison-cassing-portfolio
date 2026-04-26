/**
 * Case Study Page — Clean Editorial Minimal
 * Design: white bg, DM Sans, near-black text, sand accent
 */
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CaseStudy() {
  const bodyRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-36 pb-16 border-b border-[#e5e5e5]">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.12em] uppercase font-medium text-[#999] hover:text-[#B8956A] transition-colors mb-10"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
          <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-4">Case Study</p>
          <h1 className="text-[36px] md:text-[52px] font-bold text-[#1a1a1a] leading-tight mb-8 max-w-2xl">
            Understanding Connected Fitness Drop-Off
          </h1>
          <div className="flex flex-wrap gap-10">
            {[
              { value: "25", label: "Interviews" },
              { value: "3", label: "Research Phases" },
              { value: "4 months", label: "Duration" },
              { value: "Contract", label: "Engagement Type" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-[24px] font-bold text-[#1a1a1a]">{s.value}</div>
                <div className="text-[10px] tracking-[0.12em] uppercase text-[#999] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div ref={bodyRef}>
        {/* Overview + Outcomes */}
        <section className="py-16 border-b border-[#e5e5e5]">
          <div className="container mx-auto px-6 max-w-4xl grid md:grid-cols-2 gap-12">
            <div className="fade-up">
              <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-4">Overview</p>
              <h2 className="text-[22px] font-bold text-[#1a1a1a] mb-4">The Challenge</h2>
              <p className="text-[14px] text-[#555] leading-relaxed mb-4">
                A connected fitness company launched a $2,000+ rowing machine with gamified workout software in May 2020. Several months after launch, they noticed monthly usage per account declining steadily.
              </p>
              <p className="text-[13px] text-[#666] leading-relaxed mb-3">The COO initiated research to understand:</p>
              <ul className="space-y-1.5">
                {[
                  "Patterns in user activity before dropping off",
                  "Reasons for decreased or discontinued usage",
                  "Users' broader fitness routines outside the platform",
                  "Potential motivators for increased engagement",
                ].map((item) => (
                  <li key={item} className="text-[13px] text-[#555] flex gap-2">
                    <span className="text-[#B8956A] flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-up" style={{ transitionDelay: "80ms" }}>
              <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-4">Outcomes</p>
              <h2 className="text-[22px] font-bold text-[#1a1a1a] mb-4">What We Achieved</h2>
              <p className="text-[13px] text-[#666] leading-relaxed mb-3">While not identifying any simple fixes for usage decline, this research:</p>
              <ul className="space-y-1.5">
                {[
                  "Provided visibility into previously unstudied user segments",
                  "Created actionable insights through an Opportunity Solution Tree framework",
                  "Maintained an agile research approach, adapting to findings",
                  "Shifted internal understanding of user behavior patterns",
                  "Established foundation for future product improvements",
                ].map((item) => (
                  <li key={item} className="text-[13px] text-[#555] flex gap-2">
                    <span className="text-[#B8956A] flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-16 border-b border-[#e5e5e5]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="fade-up mb-10">
              <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-4">Approach</p>
              <h2 className="text-[22px] font-bold text-[#1a1a1a] mb-3">Research Methodology</h2>
              <p className="text-[14px] text-[#555] leading-relaxed max-w-2xl">
                The team had historically heard from two extreme user groups: highly engaged users active on social media and dissatisfied customers seeking returns. This project aimed to understand the middle ground — users at risk of churning based on usage patterns.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: "Data Analysis & Segmentation",
                  body: 'I began by defining and analyzing two key user segments: "Tricklers" (users averaging 2+ workout days/week in first four weeks, then less than 2 days/week) and Low Usage Users (using the rower less than 30% of owned weeks — approximately 30% of total users).',
                  note: null,
                },
                {
                  num: "02",
                  title: "Qualitative Research",
                  body: "Conducted 25 one-on-one semi-structured interviews: 11 with tricklers, 14 with low usage users. Sessions lasted 30–60 minutes, with participants compensated with $50 Amazon gift cards. Focus areas: overall fitness routines, specific rower experiences, COVID-19 impact, and recent workout patterns.",
                  note: null,
                },
                {
                  num: "03",
                  title: "Quantitative Validation",
                  body: "Developed a survey to validate interview findings across the larger low usage population. Despite low response rates (2%), the data provided directional insights for prioritization.",
                  note: "The research approach remained adaptive throughout — findings from qualitative phases shaped the direction of subsequent work.",
                },
              ].map((phase, i) => (
                <div
                  key={phase.num}
                  className="fade-up border border-[#e5e5e5] p-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-[11px] tracking-[0.1em] text-[#B8956A] font-medium">{phase.num}</span>
                    <h3 className="text-[14px] font-semibold text-[#1a1a1a]">{phase.title}</h3>
                  </div>
                  <p className="text-[13px] text-[#555] leading-relaxed">{phase.body}</p>
                  {phase.note && (
                    <div className="mt-4 pt-4 border-t border-[#f0f0f0]">
                      <p className="text-[10px] tracking-[0.1em] uppercase text-[#B8956A] font-medium mb-1">Note on Agility</p>
                      <p className="text-[12px] text-[#666] leading-relaxed italic">{phase.note}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Findings */}
        <section className="py-16 bg-[#f9f9f9] border-b border-[#e5e5e5]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="fade-up mb-10">
              <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-4">Key Findings</p>
              <h2 className="text-[22px] font-bold text-[#1a1a1a]">What We Learned</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Trickler Segment Insights",
                  items: [
                    "Usage decline often reflected intentional adjustment, not dissatisfaction",
                    "Users started with high enthusiasm but settled into personally sustainable routines",
                    "This segment showed high satisfaction despite reduced usage",
                  ],
                },
                {
                  title: "Low Usage Segment Insights",
                  items: [
                    "More likely to report challenges with both exercise generally and the rower specifically",
                    "Time constraints and competing priorities were key barriers",
                    "Difficulty level for new rowers created friction",
                    "Initial workout experiences often felt challenging and frustrating",
                  ],
                },
              ].map((seg, i) => (
                <div
                  key={seg.title}
                  className="fade-up bg-white border border-[#e5e5e5] p-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <h3 className="text-[13px] font-semibold text-[#1a1a1a] mb-4">{seg.title}</h3>
                  <ul className="space-y-2">
                    {seg.items.map((item) => (
                      <li key={item} className="text-[13px] text-[#555] flex gap-2">
                        <span className="text-[#B8956A] flex-shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="py-16 border-b border-[#e5e5e5]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="fade-up mb-10">
              <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-4">Recommendations</p>
              <h2 className="text-[22px] font-bold text-[#1a1a1a]">Actionable Next Steps</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  label: "Immediate Actions",
                  title: "Short-Term Priorities",
                  items: [
                    "Prioritize improving new rower onboarding experience",
                    "Focus on making initial workouts feel more achievable",
                    "Address time constraint barriers through product adaptations",
                  ],
                },
                {
                  label: "Long-Term Strategic",
                  title: "Strategic Recommendations",
                  items: [
                    "Create success metrics for new users' first experiences",
                    "Develop strategies to help users prioritize rowing among competing activities",
                    "Continue research into early user experience, particularly first two weeks",
                  ],
                },
              ].map((rec, i) => (
                <div key={rec.label} className="fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[#999] font-medium mb-1">{rec.label}</p>
                  <h3 className="text-[16px] font-semibold text-[#1a1a1a] mb-4">{rec.title}</h3>
                  <ol className="space-y-2">
                    {rec.items.map((item, idx) => (
                      <li key={item} className="text-[13px] text-[#555] flex gap-3">
                        <span className="text-[#B8956A] font-medium flex-shrink-0 w-4">{idx + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Role */}
        <section className="py-16 border-b border-[#e5e5e5]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="fade-up grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-4">My Role</p>
                <h2 className="text-[22px] font-bold text-[#1a1a1a] mb-4">Contract Researcher over Four Months</h2>
                <p className="text-[14px] text-[#555] leading-relaxed mb-4">
                  As a quarter-time contract researcher, I worked closely with the core team while maintaining independence in research design and execution.
                </p>
                <p className="text-[14px] text-[#555] leading-relaxed">
                  A unique aspect of this project was that I did not have access to the rowing machine itself, requiring close collaboration with the team to fill knowledge gaps about product functionality.
                </p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-4">Responsibilities</p>
                <ul className="space-y-3">
                  {[
                    "Led research planning and execution",
                    "Conducted both qualitative and quantitative analysis",
                    "Collaborated weekly with the COO, PM, Designer, and Data Analyst",
                    "Maintained ongoing communication via Slack",
                  ].map((item, i) => (
                    <li key={item} className="text-[13px] text-[#555] flex gap-3">
                      <span className="text-[10px] tracking-[0.1em] text-[#B8956A] font-medium flex-shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reflections */}
        <section className="py-16 border-b border-[#e5e5e5]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="fade-up mb-10">
              <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-4">Research Process Reflections</p>
              <h2 className="text-[22px] font-bold text-[#1a1a1a]">Challenges & Learnings</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  num: "1",
                  title: "Recruitment Difficulties",
                  challenges: ["Low response rates from less engaged users", "High cancellation rates"],
                  learning: "Expand on message testing to explore different incentives and scheduling approaches when response and attendance is low.",
                },
                {
                  num: "2",
                  title: "Data Quality",
                  challenges: ["Self-reported usage often differed from actual data"],
                  learning: "Consider offering non-video interviews for participant comfort and set expectations upfront about why they were selected to participate.",
                },
                {
                  num: "3",
                  title: "Limited Product Access",
                  challenges: ["Challenging to make detailed recommendations without hands-on experience"],
                  learning: "Establish more structured product knowledge transfer with teams when necessary.",
                },
              ].map((r, i) => (
                <div
                  key={r.num}
                  className="fade-up border border-[#e5e5e5] p-6"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-5 h-5 rounded-full bg-[#1a1a1a] text-white text-[10px] flex items-center justify-center font-medium flex-shrink-0">
                      {r.num}
                    </span>
                    <h3 className="text-[13px] font-semibold text-[#1a1a1a]">{r.title}</h3>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {r.challenges.map((c) => (
                      <li key={c} className="text-[12px] text-[#666] flex gap-1.5">
                        <span className="text-[#ccc] flex-shrink-0">·</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-[#f0f0f0]">
                    <p className="text-[10px] tracking-[0.1em] uppercase text-[#B8956A] font-medium mb-1">Learning</p>
                    <p className="text-[12px] text-[#666] leading-relaxed italic">{r.learning}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <p className="text-[13px] text-[#999] mb-4">Interested in learning more about my work?</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-medium text-[#1a1a1a] hover:text-[#B8956A] transition-colors border-b border-[#1a1a1a] hover:border-[#B8956A] pb-0.5"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>
          </div>
        </section>
      </div>

      <footer className="border-t border-[#e5e5e5] py-8">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-[0.1em] uppercase text-[#999]">Allison Cassing — UX Researcher</p>
          <p className="text-[11px] text-[#ccc]">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
