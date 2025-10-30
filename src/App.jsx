import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function GradientBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-[1]"
    >
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[70vh] w-[90vw] rounded-full blur-3xl opacity-40 dark:opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.25),rgba(124,58,237,0.18),rgba(34,211,238,0.12),transparent_70%)]" />
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-fuchsia-300/40 selection:text-zinc-900">
      <GradientBackdrop />
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <Features />
        <section id="get-started" className="py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold">Ready to feel supported?</h3>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">Create your profile, choose anonymous mode if you like, and share your first story. Our AI will suggest empathetic connections and circles near you.</p>
            <div className="mt-6 flex justify-center">
              <button className="inline-flex items-center rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-500 px-6 py-3 text-white shadow hover:shadow-lg transition">
                Continue
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
