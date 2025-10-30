import { Heart, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-500 grid place-items-center text-white">
            <Heart className="h-4 w-4" />
          </div>
          <p className="text-sm">SoulLink — built for empathy and safe connection.</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition">
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a href="#" className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition">
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
