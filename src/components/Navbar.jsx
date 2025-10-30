import { useEffect, useState } from 'react';
import { Heart, Globe, Moon, Sun, Languages } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'gu', label: 'ગુજરાતી' },
  { code: 'mr', label: 'मराठी' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
  { code: 'bn', label: 'বাংলা' },
  { code: 'ml', label: 'മലയാളം' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ' },
  { code: 'or', label: 'ଓଡ଼ିଆ' },
];

export default function Navbar({ language, setLanguage }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isDark = saved ? saved === 'dark' : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(isDark);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-400 grid place-items-center text-white shadow">
            <Heart className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">SoulLink</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800">
            <Languages className="h-4 w-4 text-zinc-500" />
            <select
              aria-label="Language selector"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-sm outline-none text-zinc-700 dark:text-zinc-200"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code} className="text-zinc-900">
                  {l.label}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => setDark((d) => !d)}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
          </button>
          <a
            href="#get-started"
            className="ml-2 hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-500 px-4 py-2 text-white text-sm shadow hover:shadow-md transition"
          >
            <Globe className="h-4 w-4" />
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
