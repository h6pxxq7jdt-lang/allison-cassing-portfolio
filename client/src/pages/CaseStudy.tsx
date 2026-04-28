/**
 * Case Study Page — Clean Editorial Minimal
 * Design: white bg, DM Sans, near-black text, sand accent
 * Content: exact language from slides
 * Structure: Overview & Outcomes → Approach → Key Findings → Recommendations → Reflections → My Role
 */
import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CaseStudy() {
  const bodyRef = useScrollAnimation();

  // Always start at the top when navigating to this page
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
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
          {/* Method tags — replacing stats block */}
          <div className="flex flex-wrap gap-2">
            {["Interviews", "Data Analysis", "Survey"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.08em] uppercase text-[#999] border border-[#e5e5e5] px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div ref={bodyRef}>

        {/* ── Overview & Outcomes ───────────────────────────────────── */}
        <section className="py-16 border-b border-[#e5e5e5]">
          <div className="container mx-auto px-6 max-w-4xl grid md:grid-cols-2 gap-12">
            <div className="fade-up">
              <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-4">Overview</p>
              <p className="text-[14px] text-[#555] leading-relaxed mb-4">
                A connected fitness company launched a $2,000+ rowing machine with gamified workout software in May 2020. Several months after launch, they noticed concerning trends in workout metrics, with monthly usage per account declining steadily. The COO initiated research to understand:
              </p>
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
              <p className="text-[13px] text-[#555] leading-relaxed mb-3">
                While not identifying any simple fixes for usage decline, this research:
              </p>
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

        {/* ── Approach ─────────────────────────────────────────────── */}
        <section className="py-16 border-b border-[#e5e5e5]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="fade-up mb-10">
              <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-4">Approach</p>
              <p className="text-[14px] text-[#555] leading-relaxed max-w-2xl">
                The team had historically heard from two extreme user groups: highly engaged users active on social media and dissatisfied customers seeking returns. This project aimed to understand the middle ground — users at risk of churning based on usage patterns.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Data Analysis */}
              <div className="fade-up border border-[#e5e5e5] p-6" style={{ transitionDelay: "0ms" }}>
                <h3 className="text-[13px] font-semibold text-[#1a1a1a] mb-3">Data Analysis & Segmentation</h3>
                <p className="text-[13px] text-[#555] leading-relaxed mb-3">
                  I began by defining and analyzing two key user segments:
                </p>
                <ul className="space-y-2">
                  <li className="text-[12px] text-[#555] leading-relaxed">
                    <span className="font-medium text-[#1a1a1a]">"Tricklers"</span> — Users who started strong but reduced usage over time. Defined as averaging 2+ workout days/week in the first four weeks, followed by less than 2 days/week in subsequent periods.
                  </li>
                  <li className="text-[12px] text-[#555] leading-relaxed">
                    <span className="font-medium text-[#1a1a1a]">Low Usage Users</span> — Using the rower less than 30% of owned weeks; approximately 30% of total users.
                  </li>
                </ul>
              </div>
              {/* Qualitative */}
              <div className="fade-up border border-[#e5e5e5] p-6" style={{ transitionDelay: "80ms" }}>
                <h3 className="text-[13px] font-semibold text-[#1a1a1a] mb-3">Qualitative Research</h3>
                <p className="text-[13px] text-[#555] leading-relaxed mb-3">
                  Conducted 25 one-on-one semi-structured interviews — 11 with tricklers and 14 with low usage users. Sessions lasted 30–60 minutes, with participants compensated with Amazon gift cards.
                </p>
                <p className="text-[11px] tracking-[0.08em] uppercase text-[#bbb] font-medium mb-2">Interview Focus Areas</p>
                <ul className="space-y-1">
                  {[
                    "Overall fitness routines and goals",
                    "Specific experiences with the rower",
                    "COVID-19's impact on exercise habits",
                    "Recent workout patterns",
                  ].map((item) => (
                    <li key={item} className="text-[12px] text-[#666] flex gap-1.5">
                      <span className="text-[#ccc] flex-shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Survey */}
              <div className="fade-up border border-[#e5e5e5] p-6" style={{ transitionDelay: "160ms" }}>
                <h3 className="text-[13px] font-semibold text-[#1a1a1a] mb-3">Quantitative Validation</h3>
                <p className="text-[13px] text-[#555] leading-relaxed mb-4">
                  Developed a survey to validate interview findings across the larger low usage population. Despite low response rates (2%), the data provided directional insights for prioritization.
                </p>
                <div className="pt-4 border-t border-[#f0f0f0]">
                  <p className="text-[11px] tracking-[0.08em] uppercase text-[#B8956A] font-medium mb-1">Note on Agility</p>
                  <p className="text-[12px] text-[#666] leading-relaxed italic">
                    The research approach remained adaptive throughout — findings from qualitative work shaped the direction of subsequent efforts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Findings ─────────────────────────────────────────── */}
        <section className="py-16 bg-[#f9f9f9] border-b border-[#e5e5e5]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="fade-up mb-10">
              <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-4">Key Findings</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="fade-up bg-white border border-[#e5e5e5] p-6">
                <h3 className="text-[13px] font-semibold text-[#1a1a1a] mb-4">Trickler Segment</h3>
                <ul className="space-y-2">
                  {[
                    "Usage decline often reflected intentional adjustment, not dissatisfaction",
                    "Users started with high enthusiasm but settled into personally sustainable routines",
                    "This segment showed high satisfaction despite reduced usage",
                  ].map((item) => (
                    <li key={item} className="text-[13px] text-[#555] flex gap-2">
                      <span className="text-[#B8956A] flex-shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="fade-up bg-white border border-[#e5e5e5] p-6" style={{ transitionDelay: "80ms" }}>
                <h3 className="text-[13px] font-semibold text-[#1a1a1a] mb-4">Low Usage Segment</h3>
                <ul className="space-y-2">
                  {[
                    "More likely to report challenges with both exercise generally and the rower specifically",
                    "Time constraints and competing priorities were key barriers",
                    "Difficulty level for new rowers created friction",
                    "Initial workout experiences often felt challenging and frustrating",
                  ].map((item) => (
                    <li key={item} className="text-[13px] text-[#555] flex gap-2">
                      <span className="text-[#B8956A] flex-shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Recommendations ──────────────────────────────────────── */}
        <section className="py-16 border-b border-[#e5e5e5]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="fade-up mb-10">
              <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-4">Recommendations</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  label: "Immediate Actions",
                  items: [
                    "Prioritize improving new rower onboarding experience",
                    "Focus on making initial workouts feel more achievable",
                    "Address time constraint barriers through product adaptations",
                  ],
                },
                {
                  label: "Long-term Strategic",
                  items: [
                    "Create success metrics for new users' first experiences",
                    "Develop strategies to help users prioritize rowing among competing activities",
                    "Continue research into early user experience, particularly first two weeks",
                  ],
                },
              ].map((rec, i) => (
                <div key={rec.label} className="fade-up" style={{ transitionDelay: `${i * 80}ms` }}>
                  <p className="text-[11px] tracking-[0.12em] uppercase text-[#bbb] font-medium mb-3">{rec.label}</p>
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

        {/* ── Research Process Reflections ─────────────────────────── */}
        <section className="py-16 bg-[#f9f9f9] border-b border-[#e5e5e5]">
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
                  learning: "Consider offering non-video interviews for participant comfort and set expectations upfront about why they were selected to participate, in situations where it would be beneficial to the research.",
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
                  className="fade-up border border-[#e5e5e5] bg-white p-6"
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

        {/* ── My Role — moved to last ───────────────────────────────── */}
        <section className="py-16 border-b border-[#e5e5e5]">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="fade-up grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-4">My Role</p>
                <p className="text-[14px] text-[#555] leading-relaxed mb-4">
                  As a quarter-time contract researcher over four months, I led research planning and execution, conducted both qualitative and quantitative analysis, and collaborated weekly with the COO, PM, Designer, and Data Analyst.
                </p>
                <p className="text-[14px] text-[#555] leading-relaxed">
                  A unique aspect of this project was that I didn't have access to the rowing machine itself, requiring close collaboration with the team to fill knowledge gaps about product functionality.
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
