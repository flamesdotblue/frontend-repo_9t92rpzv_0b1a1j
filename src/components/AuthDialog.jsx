import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, EyeOff } from 'lucide-react';

export default function AuthDialog({ open, mode = 'login', onClose, onSwitchMode, onSubmit }) {
  const [formMode, setFormMode] = useState(mode);
  const dialogRef = useRef(null);

  useEffect(() => setFormMode(mode), [mode]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose?.();
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const isSignup = formMode === 'signup';

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    onSubmit?.(formMode, data);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            ref={dialogRef}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="w-full max-w-md rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xl overflow-hidden"
          >
            <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {isSignup ? 'Create your SoulLink account' : 'Welcome back'}
              </h3>
              <button
                onClick={onClose}
                className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-300"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {isSignup && (
                <div>
                  <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-1">Display name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                    <input name="displayName" required
                      className="w-full pl-9 pr-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-fuchsia-400/40"
                      placeholder="e.g., Anya or Pseudonym"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <input name="email" type="email" required
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-fuchsia-400/40"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <input name="password" type="password" required
                    className="w-full pl-9 pr-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 outline-none focus:ring-2 focus:ring-fuchsia-400/40"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {isSignup && (
                <div className="flex items-center gap-2 text-sm">
                  <input id="anonymous" name="anonymous" type="checkbox" className="rounded border-zinc-300 dark:border-zinc-700" />
                  <label htmlFor="anonymous" className="flex items-center gap-1 text-zinc-700 dark:text-zinc-300">
                    <EyeOff className="h-4 w-4" /> Prefer anonymous mode
                  </label>
                </div>
              )}

              <button type="submit"
                className="w-full rounded-lg bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-500 text-white py-2.5 font-medium shadow hover:shadow-lg transition">
                {isSignup ? 'Create account' : 'Login'}
              </button>

              <div className="text-center text-sm text-zinc-600 dark:text-zinc-300">
                {isSignup ? (
                  <span>
                    Already have an account?{' '}
                    <button type="button" onClick={() => { setFormMode('login'); onSwitchMode?.('login'); }} className="underline">
                      Log in
                    </button>
                  </span>
                ) : (
                  <span>
                    New here?{' '}
                    <button type="button" onClick={() => { setFormMode('signup'); onSwitchMode?.('signup'); }} className="underline">
                      Create account
                    </button>
                  </span>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
