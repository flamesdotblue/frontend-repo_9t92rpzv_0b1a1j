import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import AuthDialog from './components/AuthDialog';

function GradientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-[1]">
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[70vh] w-[90vw] rounded-full blur-3xl opacity-40 dark:opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.25),rgba(124,58,237,0.18),rgba(34,211,238,0.12),transparent_70%)]" />
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState('en');
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signup'); // 'login' | 'signup'

  const openAuth = (mode) => {
    setAuthMode(mode || 'signup');
    setAuthOpen(true);
  };

  const handleAuthSubmit = (mode, data) => {
    // For now, just close the dialog. Backend endpoints will be wired later.
    console.log('Auth submit:', mode, data);
    setAuthOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-fuchsia-300/40 selection:text-zinc-900">
      <GradientBackdrop />
      <Navbar language={language} setLanguage={setLanguage} onOpenAuth={openAuth} />
      <main>
        <Hero language={language} />
        <Features />
        <section id="get-started" className="py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold">Ready to feel supported?</h3>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">Create your profile, choose anonymous mode if you like, and share your first story. Our AI will suggest empathetic connections and circles near you.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button onClick={() => openAuth('signup')} className="inline-flex items-center rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-500 px-6 py-3 text-white shadow hover:shadow-lg transition">
                Sign up
              </button>
              <button onClick={() => openAuth('login')} className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 px-6 py-3 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition">
                Log in
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <AuthDialog
        open={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onSwitchMode={(m) => setAuthMode(m)}
        onSubmit={handleAuthSubmit}
      />
    </div>
  );
}
