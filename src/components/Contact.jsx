import { Mail, Link as LinkIcon } from "lucide-react"
import { useState } from "react"

function Contact() {
  const [status, setStatus] = useState("idle")

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      setStatus("loading")
      // In a real project this would call the backend. For now, simulate.
      await new Promise((r) => setTimeout(r, 800))
      setStatus("success")
      e.currentTarget.reset()
    } catch (e) {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-white text-2xl font-semibold">Let’s talk outcomes</h2>
            <p className="text-blue-100/70 mt-2">
              Have a metric to move? Tell me about your product and goal—I'll reply within 24 hours.
            </p>

            <div className="mt-6 space-y-3 text-blue-100/80 text-sm">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@yourname.com</div>
              <a className="flex items-center gap-2 hover:text-white transition" href="#"><LinkIcon className="w-4 h-4" /> LinkedIn</a>
              <a className="flex items-center gap-2 hover:text-white transition" href="#"><LinkIcon className="w-4 h-4" /> Medium</a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="md:w-1/2 grid grid-cols-1 gap-3">
            <input name="name" placeholder="Your name" required className="w-full rounded-lg bg-white/10 border border-white/15 px-3 py-2 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input name="email" type="email" placeholder="Email" required className="w-full rounded-lg bg-white/10 border border-white/15 px-3 py-2 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <input name="company" placeholder="Company" className="w-full rounded-lg bg-white/10 border border-white/15 px-3 py-2 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <textarea name="message" placeholder="What are you trying to achieve?" rows={4} required className="w-full rounded-lg bg-white/10 border border-white/15 px-3 py-2 text-white placeholder:text-blue-100/60 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <button disabled={status==="loading"} className="inline-flex items-center justify-center rounded-lg bg-white/90 hover:bg-white text-slate-900 font-medium px-4 py-2 transition">
              {status==="loading"? "Sending..." : status==="success"? "Sent!" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
