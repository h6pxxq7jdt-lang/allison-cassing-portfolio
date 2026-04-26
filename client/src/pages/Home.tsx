/**
 * Home Page — Clean Editorial Minimal
 * Design: white bg, DM Sans, near-black text, sand accent on hover
 * Sections: Hero (name + tagline), Work (5 project cards), About, Case Study teaser
 */
import React, { useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// ─── Data ──────────────────────────────────────────────────────────────────

const projects = [
  {
    id: "01",
    title: "Segmenting Professional Certification Customers",
    tags: ["Qualitative Research", "Customer Segmentation", "Interviews"],
    client: "Adobe · Education",
    overview:
      "A product marketing team needed to understand their current and prospective customers for professional digital skills certification and their motivations for seeking certification.",
    outcome:
      "Segmented customer groups based on career motivations and needs, identifying higher-value segments. Delivered actionable recommendations to enhance marketing strategy and improve the certification experience.",
    role: [
      "Conducted risk assessment through premortem workshop",
      "Recruited participants and conducted 20 remote, semi-structured interviews",
      "Synthesized findings into actionable opportunities",
      "Presented insights to Product and Product Marketing teams",
    ],
  },
  {
    id: "02",
    title: "Creating a Research Repository from Scratch",
    tags: ["Research Operations", "Training & Enablement", "Information Architecture"],
    client: "PPG · Manufacturing",
    overview:
      "A global manufacturing company needed a centralized research repository to share UX insights across the organization, enabling stakeholders to access and leverage research findings.",
    outcome:
      "The UX team gained confidence documenting and organizing their work. Standardized templates and a tagging system made insights easily discoverable, while hands-on training ensured the team felt prepared.",
    role: [
      "Designed standardized project templates for User Interviews and Usability Tests",
      "Created a structured system of tags and guidelines for organizing research insights",
      "Developed and delivered a hands-on training series",
    ],
  },
  {
    id: "03",
    title: "Uncovering Why Customers Call Support",
    tags: ["Call Center Analysis", "AI-Assisted Analysis", "Communication Strategy"],
    client: "Insurance Tech",
    overview:
      "An insurance tech company sought to reduce call center volume related to Required Minimum Distributions (RMDs). Despite sending annual letters, call volume remained high.",
    outcome:
      "Analysis revealed the primary driver was not confusion about RMDs, but customers seeking confirmation their setup was correct — shifting the team's approach from education to personalized reassurance.",
    role: [
      "Led research planning and execution with data, communications, and UX writing teams",
      "Conducted hybrid analysis using manual review and AI-assisted processing",
      "Synthesized findings and presented insights to inform future communication strategy",
    ],
  },
  {
    id: "04",
    title: "Launching a 0 to 1 Digital Wellness Platform",
    tags: ["Market Research", "Usability Testing", "MVP Validation"],
    client: "Consumer Goods",
    overview:
      "A consumer goods company sought to bring Ayurvedic wellness to the US market through a digital product, from exploratory research through prototype testing of the MVP.",
    outcome:
      "Helped the team develop a deeper understanding of how US consumers interact with Ayurvedic products. Usability testing of the MVP revealed key workflow improvements needed for launch.",
    role: [
      "Led research planning from initial market exploration through usability testing",
      "Conducted 20 in-depth interviews across diverse consumer segments",
      "Designed and executed comprehensive usability testing of the MVP",
    ],
  },
  {
    id: "05",
    title: "Understanding Online Game Facilitators' Needs",
    tags: ["Qualitative Research", "Thematic Analysis", "Product Strategy"],
    client: "Virtual Gaming Platform",
    overview:
      "A virtual tabletop gaming platform needed to understand the challenges and motivations of Game Masters (GMs), who lead gameplay and often drive purchase decisions.",
    outcome:
      "Identified GMs' core motivations: curating rewarding experiences, fostering collaborative storytelling, and creating social connections. Insights helped the product team prioritize feature development.",
    role: [
      "Recruited participants and conducted 12 remote, semi-structured interviews",
      "Synthesized findings using thematic analysis",
      "Collaborated with the client team to prioritize features based on research insights",
    ],
  },
];

// ─── Project Card ───────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className="fade-up border-t border-[#e5e5e5] py-8 group"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:gap-12">
        {/* Left: number + client */}
        <div className="flex-shrink-0 md:w-20 mb-3 md:mb-0">
          <span className="text-[11px] tracking-[0.12em] text-[#999] uppercase font-medium">
            {project.id}
          </span>
        </div>

        {/* Right: content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
            <h3 className="text-[17px] font-semibold text-[#1a1a1a] leading-snug group-hover:text-[#B8956A] transition-colors">
              {project.title}
            </h3>
            <span className="text-[11px] tracking-[0.08em] text-[#999] uppercase whitespace-nowrap flex-shrink-0 md:ml-6 mt-0.5">
              {project.client}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.08em] uppercase text-[#999] border border-[#e5e5e5] px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Outcome */}
          <p className="text-[14px] text-[#555] leading-relaxed mb-3">
            {project.outcome}
          </p>

          {/* Expand toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="text-[11px] tracking-[0.1em] uppercase font-medium text-[#B8956A] hover:text-[#9a7a54] transition-colors flex items-center gap-1.5"
          >
            {open ? "Less" : "Overview & role"}
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Expanded details */}
          {open && (
            <div className="mt-5 pt-5 border-t border-[#f0f0f0] grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] tracking-[0.15em] uppercase text-[#999] font-medium mb-2">
                  Overview
                </p>
                <p className="text-[13px] text-[#555] leading-relaxed">
                  {project.overview}
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.15em] uppercase text-[#999] font-medium mb-2">
                  My Role
                </p>
                <ul className="space-y-1.5">
                  {project.role.map((r, i) => (
                    <li key={i} className="text-[13px] text-[#555] leading-relaxed flex gap-2">
                      <span className="text-[#B8956A] flex-shrink-0">—</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

// ─── Home Page ──────────────────────────────────────────────────────────────

export default function Home() {
  const workRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const caseRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-[52px] md:text-[64px] font-bold text-[#1a1a1a] leading-none tracking-tight mb-4">
            Allison Cassing
          </h1>
          <p className="text-[15px] text-[#888] tracking-[0.05em]">
            UX Researcher&nbsp;&nbsp;·&nbsp;&nbsp;Mixed Methods&nbsp;&nbsp;·&nbsp;&nbsp;Evidence-Based Product Decisions
          </p>
        </div>
      </section>

      {/* ── Work ──────────────────────────────────────────────────────── */}
      <section id="work" ref={workRef} className="pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="fade-up mb-2">
            <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-6">
              Selected Work
            </p>
          </div>
          <div>
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
            {/* Last border */}
            <div className="border-t border-[#e5e5e5]" />
          </div>
        </div>
      </section>

      {/* ── Case Study Teaser ─────────────────────────────────────────── */}
      <section ref={caseRef} className="py-24 bg-[#f9f9f9]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="fade-up">
            <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-6">
              Case Study
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-[28px] md:text-[36px] font-bold text-[#1a1a1a] leading-tight mb-3">
                  Understanding Connected Fitness Drop-Off
                </h2>
                <p className="text-[14px] text-[#666] leading-relaxed max-w-xl">
                  A connected fitness company noticed monthly usage per account declining steadily
                  after launch. I led a three-phase research effort — data segmentation, 25
                  qualitative interviews, and a quantitative survey — to understand why.
                </p>
                <div className="flex gap-8 mt-6">
                  {[
                    { value: "25", label: "Interviews" },
                    { value: "3", label: "Research Phases" },
                    { value: "4 mo", label: "Engagement" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-[22px] font-bold text-[#1a1a1a]">{s.value}</div>
                      <div className="text-[10px] tracking-[0.1em] uppercase text-[#999] mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="/case-study"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-medium text-[#1a1a1a] hover:text-[#B8956A] transition-colors whitespace-nowrap border-b border-[#1a1a1a] hover:border-[#B8956A] pb-0.5"
              >
                Read Case Study
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────────── */}
      <section id="about" ref={aboutRef} className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="fade-up">
            <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-6">
              About
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-[15px] text-[#1a1a1a] leading-relaxed mb-4">
                  I combine deep analytical experience with qualitative research methods to provide
                  meaningful insights for evidence-based product decisions.
                </p>
                <p className="text-[14px] text-[#666] leading-relaxed mb-4">
                  Drawing on my background in product management and data analysis, I help teams
                  make informed decisions to create products that people need, want, and can use.
                </p>
                <p className="text-[14px] text-[#666] leading-relaxed">
                  I particularly enjoy research that requires both analytical depth and nuanced
                  understanding of user needs.
                </p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-4">
                  Methods
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "Semi-Structured Interviews",
                    "Thematic Analysis",
                    "Usability Testing",
                    "Survey Design",
                    "Data Analysis",
                    "Research Operations",
                    "Stakeholder Collaboration",
                    "Mixed Methods",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] text-[#555] border border-[#e5e5e5] px-2.5 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-medium text-[#1a1a1a] hover:text-[#B8956A] transition-colors border-b border-[#1a1a1a] hover:border-[#B8956A] pb-0.5"
                >
                  View Resume
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="border-t border-[#e5e5e5] py-8">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-[0.1em] uppercase text-[#999]">
            Allison Cassing — UX Researcher
          </p>
          <p className="text-[11px] text-[#ccc]">
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
