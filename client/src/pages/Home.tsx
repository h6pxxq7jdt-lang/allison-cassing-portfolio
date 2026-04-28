/**
 * Home Page — Clean Editorial Minimal
 * Design: white bg, DM Sans, near-black text, sand accent on hover
 * Card grid layout with project images
 * Card order for recruiters: image → title/tags → Overview → Outcome → My Role (expand)
 * No company names — industry/sector tags only
 */
import { useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// ─── Base URL helper for GitHub Pages compatibility ────────────────────────
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

// ─── Data ──────────────────────────────────────────────────────────────────

const projects = [
  {
    id: "01",
    title: "Segmenting Professional Certification Customers",
    tags: ["Interviews", "Customer Segmentation", "Thematic Analysis"],
    sector: "Education",
    image: `/allison-cassing-portfolio/images/project-01-segmentation.png`,
    overview:
      "A product marketing team needed to understand their current and prospective customers for professional digital skills certification and their motivations for seeking certification. This research aimed to inform customer targeting and improve the entire certification experience, from discovery to test completion.",
    outcome:
      "Through qualitative research, I segmented customer groups based on their career motivations and needs, identifying higher-value segments to focus on. Based on participant feedback, I also suggested several product improvements to enhance the overall certification experience. These findings equipped the team with actionable recommendations to enhance their marketing strategy and improve the certification experience.",
    role: [
      "Conducted risk assessment and identified key research questions through premortem workshop.",
      "Developed and implemented a research plan to explore customer motivations and needs.",
      "Recruited participants and conducted 20 remote, semi-structured interviews with customers and prospects.",
      "Synthesized findings into actionable opportunities and recommendations.",
      "Presented insights to Product and Product Marketing teams.",
    ],
  },
  {
    id: "02",
    title: "Creating a Research Repository from Scratch",
    tags: ["Research Operations", "Information Architecture", "Training & Enablement"],
    sector: "Manufacturing",
    image: `/allison-cassing-portfolio/images/project-02-repository.png`,
    overview:
      "A global manufacturing company needed a centralized research repository to share UX insights across the organization. The initiative aimed to create a scalable system for the UX team to document their work while enabling stakeholders throughout the company to access and leverage research findings.",
    outcome:
      "Through implementing a research repository platform, the UX team gained confidence in documenting and organizing their work. The standardized templates and tagging system made insights easily discoverable, while the hands-on training ensured the team felt prepared to use the tool effectively in their daily work.",
    role: [
      "Designed standardized project templates for User Interviews and Usability Tests.",
      "Created a structured system of tags and guidelines to help teams organize and the company find research insights.",
      "Developed and delivered a hands-on training series covering both tool functionality and research repository best practices.",
    ],
  },
  {
    id: "03",
    title: "Uncovering Why Customers Call Support",
    tags: ["Call Center Analysis", "AI-Assisted Synthesis", "Mixed Methods"],
    sector: "Insurance",
    image: `/allison-cassing-portfolio/images/project-03-fitness.png`,
    overview:
      "A company was looking to reduce their call center volume related to RMDs — mandatory withdrawals that retirement account holders must take annually after age 73. Despite sending annual letters to notify customers about their RMD obligations, the company received a high volume of related phone calls. The initial assumption was that customers were confused about the concept of RMDs, and early attempts to clarify the explanation in these letters did not reduce call volume.",
    outcome:
      "Analysis of call summaries revealed that the primary driver for RMD-related calls was not confusion about RMDs themselves, but rather customers seeking confirmation that their RMD setup was correct. This insight led to two key recommendations: revising outbound communications to provide greater clarity on individual customer setups and enhancing the existing customer portal to prominently display RMD information in an accessible format. The findings have already shifted internal understanding of customer needs from general education to personalized reassurance.",
    role: [
      "Led research planning and execution, collaborating with data, communications, and UX writing teams.",
      "Conducted hybrid analysis of call center summaries using both manual review and AI-assisted processing (ChatGPT).",
      "Synthesized findings and presented insights to internal stakeholders to inform future communication strategy.",
    ],
  },
  {
    id: "04",
    title: "Launching a 0 to 1 Digital Wellness Platform",
    tags: ["Generative Research", "Usability Testing", "Market Validation"],
    sector: "Health",
    image: `/allison-cassing-portfolio/images/project-04-insurance.png`,
    overview:
      "A consumer goods company sought to bring Ayurvedic wellness to the US market through a digital product. The project began with exploratory research to understand target segments and continued through prototype testing of the platform MVP. The research needed to both validate market opportunity and ensure the digital platform's usability for their target audience.",
    outcome:
      "Through multi-phase research, from initial market exploration to platform testing, I helped the team develop a deeper understanding of how US consumers think about and interact with Ayurvedic products. The research informed both product strategy and platform development, while subsequent usability testing of the MVP revealed key workflow improvements needed for launch.",
    role: [
      "Led research planning from initial market exploration through usability testing.",
      "Conducted 20 in-depth interviews across diverse consumer segments to map needs, preferences, and market opportunities.",
      "Designed and executed comprehensive usability testing of the MVP digital platform.",
      "Provided recommendations for both product development and go-to-market strategy.",
    ],
  },
  {
    id: "05",
    title: "Understanding Online Game Facilitators' Needs",
    tags: ["Interviews", "Thematic Analysis", "Feature Prioritization"],
    sector: "Virtual Tabletop",
    image: `/allison-cassing-portfolio/images/project-05-gaming.png`,
    overview:
      "A virtual platform for playing tabletop games like Dungeons & Dragons needed to understand the challenges and motivations of Game Masters (GMs), who play a key role in leading gameplay and often drive purchase decisions.",
    outcome:
      "Through qualitative research, I identified GMs' core motivations: curating rewarding experiences, fostering collaborative storytelling, and creating social connections. I also uncovered pain points like organizational challenges during gameplay. These insights helped the product team prioritize feature development to better support GMs' needs.",
    role: [
      "Developed and implemented a research plan to explore Game Masters' needs and challenges.",
      "Recruited participants and conducted 12 remote, semi-structured interviews with customers and prospects.",
      "Synthesized findings into key motivations and pain points using thematic analysis.",
      "Collaborated with the client team to prioritize features based on research insights.",
      "Presented recommendations to inform product strategy.",
    ],
  },
];

// ─── Project Card ───────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [open, setOpen] = useState(true);

  return (
    <article
      className="fade-up bg-white border border-[#e5e5e5] overflow-hidden hover:shadow-md transition-shadow duration-300 group"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Card image */}
      <div className="aspect-[16/9] overflow-hidden bg-[#f5f0e8]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card content */}
      <div className="p-6">
        {/* Number + sector */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] tracking-[0.12em] text-[#bbb] uppercase font-medium">
            {project.id}
          </span>
          <span className="text-[10px] tracking-[0.06em] text-[#aaa] uppercase">
            {project.sector}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[16px] font-semibold text-[#1a1a1a] leading-snug mb-3 group-hover:text-[#B8956A] transition-colors">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] tracking-[0.08em] uppercase text-[#999] border border-[#e5e5e5] px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Overview */}
        <div className="mb-3">
          <p className="text-[9px] tracking-[0.15em] uppercase text-[#bbb] font-medium mb-1.5">
            Overview
          </p>
          <p className="text-[13px] text-[#555] leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Outcome */}
        <div className="mb-4">
          <p className="text-[9px] tracking-[0.15em] uppercase text-[#bbb] font-medium mb-1.5">
            Outcome
          </p>
          <p className="text-[13px] text-[#333] leading-relaxed font-medium">
            {project.outcome}
          </p>
        </div>

        {/* My Role — always visible */}
        <div className="mt-4 pt-4 border-t border-[#f0f0f0]">
          <p className="text-[9px] tracking-[0.15em] uppercase text-[#bbb] font-medium mb-2">
            My Role
          </p>
          <ul className="space-y-2">
            {project.role.map((r, i) => (
              <li key={i} className="text-[12px] text-[#555] leading-relaxed flex gap-2">
                <span className="text-[#B8956A] flex-shrink-0 mt-0.5">—</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
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
          <p className="text-[14px] tracking-[0.08em] text-[#888] uppercase">
            UX Researcher&nbsp;&nbsp;·&nbsp;&nbsp;Mixed Methods&nbsp;&nbsp;·&nbsp;&nbsp;Evidence-Based Product Decisions
          </p>
        </div>
      </section>

      {/* ── Work ──────────────────────────────────────────────────────── */}
      <section id="work" ref={workRef} className="pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="fade-up mb-8">
            <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium">
              Selected Work
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study ────────────────────────────────────────────────── */}
      <section ref={caseRef} className="py-24 bg-[#f9f9f9]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="fade-up">
            <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-8">
              Case Study
            </p>
            <Link
              href="/case-study"
              className="block group border border-[#e5e5e5] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden bg-[#f5f0e8]">
                  <img
                    src="/allison-cassing-portfolio/images/case-study-fitness.png"
                    alt="Connected Fitness Case Study"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <p className="text-[10px] tracking-[0.12em] text-[#bbb] uppercase font-medium mb-3">
                    Deep Dive
                  </p>
                  <h2 className="text-[22px] md:text-[28px] font-bold text-[#1a1a1a] leading-tight mb-3 group-hover:text-[#B8956A] transition-colors">
                    Understanding Connected Fitness Drop-Off
                  </h2>
                  <p className="text-[13px] text-[#666] leading-relaxed mb-6">
                    A connected fitness company noticed monthly usage per account declining steadily
                    after launch. I led a multi-method research effort to understand why.
                  </p>
                  {/* Method tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Data Analysis", "Interviews", "Survey"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] tracking-[0.08em] uppercase text-[#999] border border-[#e5e5e5] px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-medium text-[#1a1a1a] group-hover:text-[#B8956A] transition-colors border-b border-[#1a1a1a] group-hover:border-[#B8956A] pb-0.5 w-fit">
                    Read Case Study
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────────── */}
      <section id="about" ref={aboutRef} className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="fade-up">
            <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-6">
              About Me
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
                    "Interviews",
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
                <a
                  href="https://www.linkedin.com/in/allison-cassing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-medium text-[#1a1a1a] hover:text-[#B8956A] transition-colors border-b border-[#1a1a1a] hover:border-[#B8956A] pb-0.5"
                >
                  Connect on LinkedIn
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
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
