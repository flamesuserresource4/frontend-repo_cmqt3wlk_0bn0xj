import Header from './components/Header'
import WorkSamples from './components/WorkSamples'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative">
        <Header />
        <WorkSamples />
        <Process />
        <Contact />

        <footer className="max-w-6xl mx-auto px-6 pb-12 pt-6 text-center text-blue-200/60 text-sm">
          Built with clarity and intent. © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}

export default App
