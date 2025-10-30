import { motion } from 'framer-motion';
import { Users, MessageCircle, Video, Shield, Brain, Map, Languages } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Emotion-first matching',
    desc: 'AI detects emotions from your story to suggest empathetic matches and groups nearby or worldwide.',
  },
  {
    icon: Users,
    title: 'Groups & circles',
    desc: 'Create or join support circles by city and topic. Share resources and schedule meetups.',
  },
  {
    icon: MessageCircle,
    title: 'Anonymous chat',
    desc: 'Share safely with pseudonyms, reactions, and supportive replies. Your identity stays yours.',
  },
  {
    icon: Video,
    title: 'Video story rooms',
    desc: '1:1 or small group calls with audio-only options and consent-first recording.',
  },
  {
    icon: Shield,
    title: 'Safety & moderation',
    desc: 'Report, block, and community guidelines enforced with ML-assisted moderation.',
  },
  {
    icon: Map,
    title: 'Mood heatmaps',
    desc: 'Anonymized city-level mood trends and insights for communities and NGOs.',
  },
  {
    icon: Languages,
    title: 'Multilingual',
    desc: 'UI translations for major Indian languages with optional on-post translation.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 bg-gradient-to-b from-transparent to-zinc-50 dark:to-zinc-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">Designed for emotional connection</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Powerful features built with privacy and empathy at the core.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur p-5 hover:shadow-md transition"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-500 text-white grid place-items-center">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-zinc-900 dark:text-zinc-100">{f.title}</h3>
              <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
