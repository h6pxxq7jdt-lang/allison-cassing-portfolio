/**
 * Resume Page — Clean Editorial Minimal
 * Embeds the PDF resume with a download link
 */
import { Link } from "wouter";
import Navigation from "@/components/Navigation";

const RESUME_URL = "/AllisonCassing_Resume.pdf";

export default function Resume() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-36 pb-8">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.12em] uppercase font-medium text-[#999] hover:text-[#B8956A] transition-colors mb-4"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Portfolio
              </Link>
              <p className="text-[11px] tracking-[0.15em] uppercase text-[#999] font-medium mb-2">Resume</p>
              <h1 className="text-[28px] font-bold text-[#1a1a1a]">Allison Cassing</h1>
            </div>
            <a
              href={RESUME_URL}
              download="AllisonCassing_Resume.pdf"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-medium text-[#1a1a1a] hover:text-[#B8956A] transition-colors border border-[#1a1a1a] hover:border-[#B8956A] px-4 py-2.5 self-start md:self-auto"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>

          {/* PDF Embed */}
          <div className="border border-[#e5e5e5] w-full" style={{ height: "calc(100vh - 220px)", minHeight: "600px" }}>
            <iframe
              src={`${RESUME_URL}#view=FitH`}
              title="Allison Cassing Resume"
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e5e5e5] py-8 mt-8">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-[0.1em] uppercase text-[#999]">Allison Cassing — UX Researcher</p>
          <p className="text-[11px] text-[#ccc]">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
