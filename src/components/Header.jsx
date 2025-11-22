import { Briefcase, ArrowRight, Download } from "lucide-react"

function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_40%,#000,transparent)]">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-400/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-500/30 to-fuchsia-400/30 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-300/80 mb-3">
              <Briefcase className="w-4 h-4" />
              Content Writer → Aspiring Product Marketer
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
              I turn complex products into stories that convert
            </h1>
            <p className="mt-5 text-blue-100/90 text-lg max-w-2xl">
              Results-focused content and messaging that moves users through the funnel—
              from awareness to activation. Minimal fluff, measurable impact.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-slate-900 font-medium px-4 py-2 rounded-lg transition shadow-sm"
              >
                Let’s work together <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-white/20 text-white/90 hover:bg-white/10 font-medium px-4 py-2 rounded-lg transition"
              >
                Download resume <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 backdrop-blur flex items-center justify-center text-3xl font-bold text-white/90 shadow-lg">
              CW
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Avg. CTR lift", value: "+38%" },
            { label: "Signup conversion", value: "+22%" },
            { label: "Organic traffic", value: "+120%" },
            { label: "Time-to-value", value: "-30%" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-2xl font-semibold text-white">{s.value}</div>
              <div className="text-xs text-blue-100/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
