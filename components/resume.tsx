import Link from "next/link"
import { Download, FileText } from "lucide-react"

export default function Resume() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-(--foreground) mb-8 md:mb-12 text-balance">Resume</h2>

        {/* Desktop: iframe + sidebar */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 rounded-xl overflow-hidden shadow-sm border border-(--border-color)" style={{ minHeight: "600px" }}>
            <iframe
              src="/Arav-Sarma_Resume.pdf"
              className="w-full h-full"
              style={{ minHeight: "600px" }}
              title="Arav Sarma Resume"
            />
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h3 className="text-sm font-bold text-(--accent-primary) uppercase tracking-wide mb-2">Get My Resume</h3>
              <Link href="/Arav-Sarma_Resume.pdf" className="btn-primary flex items-center justify-center gap-2 w-full" download>
                <Download size={20} />
                Download PDF
              </Link>
            </div>
            <p className="text-xs text-(--muted-text)">Last updated: Jan 2026</p>
          </div>
        </div>

        {/* Mobile: view + download card */}
        <div className="md:hidden">
          <div className="bg-(--card) rounded-xl p-8 shadow-sm border border-(--border-color) flex flex-col items-center text-center gap-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(75, 59, 110, 0.12)" }}>
              <FileText size={32} color="var(--accent-primary)" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-(--foreground) mb-2">My Resume</h3>
              <p className="text-sm text-(--muted-text)">Last updated Jan 2026.</p>
            </div>
            <div className="flex flex-col gap-3 w-full max-w-xs">
              <Link href="/Arav-Sarma_Resume.pdf" className="btn-primary flex items-center justify-center gap-2 w-full">
                <FileText size={20} />
                View Resume
              </Link>
              <Link href="/Arav-Sarma_Resume.pdf" className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg border border-(--border-color) text-(--foreground) text-sm font-medium hover:bg-(--card) transition-colors" download>
                <Download size={18} />
                Download PDF
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
