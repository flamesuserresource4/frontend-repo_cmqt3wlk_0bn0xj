function Step({ n, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 text-white/90 font-semibold">
        {n}
      </div>
      <div>
        <div className="text-white font-medium">{title}</div>
        <div className="text-blue-100/70 text-sm mt-1">{desc}</div>
      </div>
    </div>
  )
}

function Process() {
  const steps = [
    { n: 1, title: "Clarify goals", desc: "Quick call to define the target metric, audience, and constraints." },
    { n: 2, title: "Message-market fit", desc: "Research, positioning, and narrative building with stakeholder alignment." },
    { n: 3, title: "Execute fast", desc: "Produce the right assets—pages, emails, in-product copy—and ship." },
    { n: 4, title: "Measure & iterate", desc: "Track impact, run experiments, and refine messaging over time." },
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-white text-2xl font-semibold">How I work</h2>
            <p className="text-blue-100/70 mt-1">Lean process. Clear ownership. Results first.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 flex-1">
            {steps.map((s) => (
              <Step key={s.n} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
