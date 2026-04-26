/**
 * Home Page — Warm Research Studio design
 * Sections: Hero, About, Projects (5 overviews), Case Study Preview, Footer
 */
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import React, { useState } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────

const projects = [
  {
    id: "01",
    title: "Segmenting Professional Certification Customers",
    tags: ["Qualitative Research", "Customer Segmentation", "Semi-Structured Interviews"],
    overview:
      "A product marketing team needed to understand their current and prospective customers for professional digital skills certification and their motivations for seeking certification. This research aimed to inform customer targeting and improve the entire certification experience, from discovery to test completion.",
    outcome:
      "Segmented customer groups based on career motivations and needs, identifying higher-value segments. Delivered actionable recommendations to enhance marketing strategy and improve the certification experience.",
    role: [
      "Conducted risk assessment through premortem workshop",
      "Developed and implemented a research plan",
      "Recruited participants and conducted 20 remote, semi-structured interviews",
      "Synthesized findings into actionable opportunities",
      "Presented insights to Product and Product Marketing teams",
    ],
  },
  {
    id: "02",
    title: "Creating a Research Repository from Scratch",
    tags: ["Research Operations", "Training & Enablement", "Information Architecture"],
    overview:
      "A global manufacturing company needed a centralized research repository to share UX insights across the organization. The initiative aimed to create a scalable system for the UX team to document their work while enabling stakeholders to access and leverage research findings.",
    outcome:
      "The UX team gained confidence in documenting and organizing their work. The standardized templates and tagging system made insights easily discoverable, while hands-on training ensured the team felt prepared to use the tool effectively.",
    role: [
      "Designed standardized project templates for User Interviews and Usability Tests",
      "Created a structured system of tags and guidelines for organizing research insights",
      "Developed and delivered a hands-on training series covering tool functionality and best practices",
    ],
  },
  {
    id: "03",
    title: "Uncovering Why Customers Call Support",
    tags: ["Call Center Analysis", "AI-Assisted Analysis", "Communication Strategy"],
    overview:
      "An insurance tech company was looking to reduce call center volume related to Required Minimum Distributions (RMDs). Despite sending annual letters, the company received a high volume of related calls. Early attempts to clarify the explanation did not reduce call volume.",
    outcome:
      "Analysis revealed that the primary driver for RMD-related calls was not confusion, but customers seeking confirmation their setup was correct. This insight led to two key recommendations: revising outbound communications and enhancing the customer portal to display RMD information prominently.",
    role: [
      "Led research planning and execution, collaborating with data, communications, and UX writing teams",
      "Conducted hybrid analysis using both manual review and AI-assisted processing (ChatGPT)",
      "Synthesized findings and presented insights to inform future communication strategy",
    ],
  },
  {
    id: "04",
    title: "Launching a 0 to 1 Digital Wellness Platform",
    tags: ["Market Research", "Usability Testing", "MVP Validation"],
    overview:
      "A consumer goods company sought to bring Ayurvedic wellness to the US market through a digital product. The project began with exploratory research to understand target segments and continued through prototype testing of the platform MVP.",
    outcome:
      "Helped the team develop a deeper understanding of how US consumers think about and interact with Ayurvedic products. Research informed both product strategy and platform development, while usability testing of the MVP revealed key workflow improvements needed for launch.",
    role: [
      "Led research planning from initial market exploration through usability testing",
      "Conducted 20 in-depth interviews across diverse consumer segments",
      "Designed and executed comprehensive usability testing of the MVP digital platform",
      "Provided recommendations for both product development and market strategy",
    ],
  },
  {
    id: "05",
    title: "Understanding Online Game Facilitators' Needs",
    tags: ["Qualitative Research", "Thematic Analysis", "Product Strategy"],
    overview:
      "A virtual platform for playing tabletop games like Dungeons & Dragons needed to understand the challenges and motivations of Game Masters (GMs), who play a key role in leading gameplay and often drive purchase decisions.",
    outcome:
      "Identified GMs' core motivations: curating rewarding experiences, fostering collaborative storytelling, and creating social connections. Uncovered pain points like organizational challenges during gameplay. Insights helped the product team prioritize feature development.",
    role: [
      "Developed and implemented a research plan to explore Game Masters' needs and challenges",
      "Recruited participants and conducted 12 remote, semi-structured interviews",
      "Synthesized findings into key motivations and pain points using thematic analysis",
      "Collaborated with the client team to prioritize features based on research insights",
    ],
  },
];

// ─── Project Card ───────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [open, setOpen] = useToggle(false);

  return (
    <article
      className={`fade-up border border-[#E8E2D9] rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-md`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Card header — split panel echoing PDF layout */}
      <div className="flex flex-col md:flex-row">
        {/* Left navy strip */}
        <div className="bg-[#2C3A52] md:w-64 lg:w-72 flex-shrink-0 p-6 flex flex-col justify-between">
          <div>
            <span className="block font-['Source_Sans_3'] text-[#C4A882] text-xs tracking-[0.15em] uppercase mb-3">
              Project {project.id}
            </span>
            <h3 className="font-['Cormorant_Garamond'] text-white text-xl lg:text-2xl font-semibold leading-snug">
              {project.title}
            </h3>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-wide font-['Source_Sans_3'] text-[#C4A882]/80 border border-[#C4A882]/30 px-2 py-0.5 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right content panel */}
        <div className="flex-1 p-6 bg-white">
          <div className="mb-1">
            <span className="text-[11px] font-['Source_Sans_3'] text-[#6B7A8D] uppercase tracking-[0.12em] font-semibold">
              Outcome
            </span>
            <p className="mt-1 text-[#2C3A52] font-['Source_Sans_3'] text-sm leading-relaxed">
              {project.outcome}
            </p>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="mt-4 flex items-center gap-2 text-[#C4A882] font-['Source_Sans_3'] text-sm font-semibold hover:text-[#2C3A52] transition-colors"
          >
            <span>{open ? "Hide details" : "See overview & role"}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Expanded details */}
          {open && (
            <div className="mt-4 pt-4 border-t border-[#E8E2D9] grid md:grid-cols-2 gap-6">
              <div>
                <span className="text-[11px] font-['Source_Sans_3'] text-[#6B7A8D] uppercase tracking-[0.12em] font-semibold">
                  Overview
                </span>
                <p className="mt-1 text-[#2C3A52]/80 font-['Source_Sans_3'] text-sm leading-relaxed">
                  {project.overview}
                </p>
              </div>
              <div>
                <span className="text-[11px] font-['Source_Sans_3'] text-[#6B7A8D] uppercase tracking-[0.12em] font-semibold">
                  My Role
                </span>
                <ul className="mt-2 space-y-1.5">
                  {project.role.map((r, i) => (
                    <li key={i} className="flex gap-2 text-sm font-['Source_Sans_3'] text-[#2C3A52]/80 leading-relaxed">
                      <span className="text-[#C4A882] mt-0.5 flex-shrink-0">—</span>
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

// Simple toggle hook
function useToggle(initial: boolean): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  return useState(initial);
}

// ─── Home Page ──────────────────────────────────────────────────────────────

export default function Home() {
  const projectsRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const caseRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <Navigation />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663602431604/Q6uMhoERvhZVBV5BAGKn9S/hero-bg-KwRChyUQVFdqWZEDTnr8Xs.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-[#2C3A52]/70" />

        <div className="relative z-10 container mx-auto px-6 max-w-6xl pt-24 pb-20">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#C4A882]" />
              <span className="font-['Source_Sans_3'] text-[#C4A882] text-xs tracking-[0.2em] uppercase">
                UX Researcher
              </span>
            </div>

            {/* Name */}
            <h1 className="font-['Cormorant_Garamond'] text-white text-6xl md:text-7xl lg:text-8xl font-semibold leading-none mb-8">
              Allison
              <br />
              <span className="italic font-normal text-[#C4A882]">Cassing</span>
            </h1>

            {/* Bio */}
            <p className="font-['Source_Sans_3'] text-white/80 text-lg leading-relaxed max-w-xl mb-10">
              I combine deep analytical experience with qualitative research methods to provide
              meaningful insights for evidence-based product decisions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#C4A882] hover:bg-[#b8976e] text-[#2C3A52] font-['Source_Sans_3'] font-semibold text-sm px-7 py-3 rounded-sm transition-colors tracking-wide"
              >
                View Projects
              </button>
              <Link
                href="/case-study"
                className="border border-white/40 hover:border-[#C4A882] text-white hover:text-[#C4A882] font-['Source_Sans_3'] font-semibold text-sm px-7 py-3 rounded-sm transition-colors tracking-wide"
              >
                Read Case Study
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-['Source_Sans_3'] text-white/40 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────────── */}
      <section
        id="about"
        ref={aboutRef}
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663602431604/Q6uMhoERvhZVBV5BAGKn9S/about-texture-Y4WETyUmU4B2FKLp5VqLbr.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: heading */}
            <div className="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C4A882]" />
                <span className="font-['Source_Sans_3'] text-[#6B7A8D] text-xs tracking-[0.2em] uppercase">
                  About
                </span>
              </div>
              <h2 className="font-['Cormorant_Garamond'] text-[#2C3A52] text-5xl md:text-6xl font-semibold leading-tight">
                Research that
                <br />
                <span className="italic text-[#C4A882]">drives decisions</span>
              </h2>

              {/* Decorative diagonal accent */}
              <div className="mt-10 relative h-1 w-32 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C4A882] to-[#E8D5B7]" />
              </div>
            </div>

            {/* Right: bio paragraphs */}
            <div className="fade-up space-y-5" style={{ transitionDelay: "150ms" }}>
              <p className="font-['Source_Sans_3'] text-[#2C3A52] text-lg leading-relaxed">
                I combine deep analytical experience with qualitative research methods to provide
                meaningful insights for evidence-based product decisions.
              </p>
              <p className="font-['Source_Sans_3'] text-[#2C3A52]/75 text-base leading-relaxed">
                Drawing on my background in product management and data analysis, I help teams make
                informed decisions to create products that people need, want, and can use.
              </p>
              <p className="font-['Source_Sans_3'] text-[#2C3A52]/75 text-base leading-relaxed">
                I particularly enjoy research that requires both analytical depth and nuanced
                understanding of user needs.
              </p>

              {/* Skill chips */}
              <div className="pt-4 flex flex-wrap gap-2">
                {[
                  "Semi-Structured Interviews",
                  "Thematic Analysis",
                  "Usability Testing",
                  "Survey Design",
                  "Data Analysis",
                  "Research Operations",
                  "Stakeholder Collaboration",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="font-['Source_Sans_3'] text-xs text-[#2C3A52] bg-white border border-[#E8E2D9] px-3 py-1 rounded-sm shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────────────────── */}
      <section id="projects" ref={projectsRef} className="py-24 bg-[#FAF8F4]">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Section header */}
          <div className="mb-14 fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C4A882]" />
              <span className="font-['Source_Sans_3'] text-[#6B7A8D] text-xs tracking-[0.2em] uppercase">
                Project Overviews
              </span>
            </div>
            <h2 className="font-['Cormorant_Garamond'] text-[#2C3A52] text-5xl font-semibold">
              Selected Work
            </h2>
            <p className="mt-3 font-['Source_Sans_3'] text-[#6B7A8D] text-base max-w-xl">
              A selection of research projects spanning customer segmentation, research operations,
              and product strategy.
            </p>
          </div>

          {/* Project cards */}
          <div className="space-y-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study Preview ────────────────────────────────────────── */}
      <section
        id="case-study-preview"
        ref={caseRef}
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663602431604/Q6uMhoERvhZVBV5BAGKn9S/case-study-bg-3avd3PDNfNwmdbcnYmqqHF.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#2C3A52]/85" />
        <div className="relative z-10 container mx-auto px-6 max-w-6xl">
          <div className="max-w-3xl fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C4A882]" />
              <span className="font-['Source_Sans_3'] text-[#C4A882] text-xs tracking-[0.2em] uppercase">
                Case Study
              </span>
            </div>
            <h2 className="font-['Cormorant_Garamond'] text-white text-5xl md:text-6xl font-semibold leading-tight mb-6">
              Understanding Connected
              <br />
              <span className="italic text-[#C4A882]">Fitness Drop-Off</span>
            </h2>
            <p className="font-['Source_Sans_3'] text-white/75 text-lg leading-relaxed mb-4 max-w-2xl">
              A connected fitness company launched a $2,000+ rowing machine with gamified workout
              software. Several months after launch, monthly usage per account began declining
              steadily. I was brought in to understand why.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-6 my-10 fade-up" style={{ transitionDelay: "100ms" }}>
              {[
                { value: "25", label: "Interviews Conducted" },
                { value: "3", label: "Research Phases" },
                { value: "2", label: "User Segments Studied" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-[#C4A882] pl-4">
                  <div className="font-['Cormorant_Garamond'] text-white text-4xl font-bold">
                    {stat.value}
                  </div>
                  <div className="font-['Source_Sans_3'] text-white/60 text-xs tracking-wide mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/case-study"
              className="inline-flex items-center gap-3 bg-[#C4A882] hover:bg-[#b8976e] text-[#2C3A52] font-['Source_Sans_3'] font-semibold text-sm px-8 py-3.5 rounded-sm transition-colors tracking-wide"
            >
              Read Full Case Study
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="bg-[#2C3A52] py-12">
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
            <div className="h-px flex-1 bg-white/10 hidden md:block" />
            <p className="font-['Source_Sans_3'] text-white/40 text-xs">
              © {new Date().getFullYear()} Allison Cassing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
