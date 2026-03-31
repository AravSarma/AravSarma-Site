import Link from "next/link"
import { Download } from "lucide-react"

export default function Resume() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-(--foreground) mb-12 text-balance">Resume</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Resume Preview */}
          <div className="md:col-span-2 rounded-xl overflow-hidden shadow-sm border border-(--border-color)" style={{ minHeight: "600px" }}>
            <iframe
              src="/Arav-Sarma_Resume.pdf"
              className="w-full h-full"
              
              style={{ minHeight: "600px" }}
              title="Arav Sarma Resume"
            />
          </div>

          {/* Download Section */}
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
      </div>
    </section>
  )
}
