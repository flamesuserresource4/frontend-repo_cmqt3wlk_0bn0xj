function StatBadge({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[11px] text-blue-100/80">
      {label}
    </span>
  )
}

function WorkCard({ title, company, outcome, tags, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group block rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-white font-medium text-lg group-hover:opacity-90">{title}</h3>
          <p className="text-blue-100/70 text-sm">{company}</p>
        </div>
        <div className="text-right">
          <div className="text-white text-xl font-semibold">{outcome}</div>
          <div className="text-[11px] text-blue-100/70">Outcome</div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <StatBadge key={t} label={t} />
        ))}
      </div>
    </a>
  )
}

function WorkSamples() {
  const items = [
    {
      title: "Product-led onboarding revamp",
      company: "B2B SaaS (Series A)",
      outcome: "+24% activation",
      tags: ["UX writing", "Email sequence", "In-app tours"],
      link: "#",
    },
    {
      title: "SEO content engine for long-tail intent",
      company: "DevTools platform",
      outcome: "+118% organic",
      tags: ["Topic clusters", "Programmatic SEO", "Technical docs"],
      link: "#",
    },
    {
      title: "Pricing page + value messaging refresh",
      company: "Fintech app",
      outcome: "+17% trial-to-paid",
      tags: ["Positioning", "A/B testing", "CRO"],
      link: "#",
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-white text-2xl font-semibold">Recent work</h2>
        <a href="#contact" className="text-blue-200/80 text-sm hover:text-white transition">See how we can drive similar results →</a>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((i) => (
          <WorkCard key={i.title} {...i} />
        ))}
      </div>
    </section>
  )
}

export default WorkSamples
