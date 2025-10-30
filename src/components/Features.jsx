import { motion } from 'framer-motion';
import { 
  Users,
  MessageCircle,
  Video,
  Shield,
  Brain,
  Map,
  Languages,
  EyeOff,
  Lock,
  MapPin,
  Mic,
  Image as ImageIcon,
  Globe,
  Database,
  Sparkles,
  ShieldCheck,
  Phone
} from 'lucide-react';

const features = [
  // Connection & Matching
  {
    icon: Brain,
    title: 'Emotion-first matching',
    desc: 'NLP detects emotion from your story and suggests empathetic matches and groups nearby or worldwide.',
    tag: 'AI / Matching'
  },
  {
    icon: MapPin,
    title: 'Proximity aware',
    desc: 'Filter by distance (e.g., within 10 km) to discover support circles in your city.',
    tag: 'Location'
  },
  {
    icon: Users,
    title: 'Support circles',
    desc: 'Open or invite-only groups. Pin resources, plan meetups, and host guided story circles.',
    tag: 'Groups'
  },
  // Stories & Feed
  {
    icon: MessageCircle,
    title: 'Story feed & replies',
    desc: 'Long-form stories, short posts, reactions (Support, Hug, Helpful, Thanks), and private supportive DMs.',
    tag: 'Social'
  },
  {
    icon: Mic,
    title: 'Audio notes',
    desc: 'Share voice notes with optional transcription for accessibility and discovery.',
    tag: 'Media'
  },
  {
    icon: ImageIcon,
    title: 'Images (optional)',
    desc: 'Attach images to your story when words aren’t enough. Media handled with privacy-first design.',
    tag: 'Media'
  },
  // Realtime & Calls
  {
    icon: Video,
    title: 'Video rooms',
    desc: '1:1 and small group calls with audio-only and background blur options.',
    tag: 'Realtime'
  },
  {
    icon: Phone,
    title: 'Presence & typing',
    desc: 'Realtime chat with typing indicators and optional read receipts.',
    tag: 'Realtime'
  },
  // Privacy & Safety
  {
    icon: EyeOff,
    title: 'Anonymous mode',
    desc: 'Hide your real name, location, and photo. Share with a safe pseudonym and avatar.',
    tag: 'Privacy'
  },
  {
    icon: Lock,
    title: 'Secure by default',
    desc: 'Minimal PII, hashed passwords, JWT-based sessions, and end-to-end encryption for chats where possible.',
    tag: 'Security'
  },
  {
    icon: ShieldCheck,
    title: 'Moderation & reports',
    desc: 'Report, block, and ML-assisted content checks. Crisis prompts surface helplines when needed.',
    tag: 'Safety'
  },
  // Multilingual & Access
  {
    icon: Languages,
    title: 'Multilingual UI',
    desc: 'Interfaces in major Indian languages for inclusive access and comfort.',
    tag: 'i18n'
  },
  {
    icon: Globe,
    title: 'On-post translation',
    desc: 'View original plus translation to connect across languages and regions.',
    tag: 'i18n'
  },
  // Analytics & Impact
  {
    icon: Map,
    title: 'Mood heatmaps',
    desc: 'Anonymized city-level mood trends to help communities and NGOs respond.',
    tag: 'Insights'
  },
  {
    icon: Sparkles,
    title: 'Empathy coach',
    desc: 'Gentle, AI-suggested prompts to help you open conversations with care.',
    tag: 'AI'
  },
  // Data & Storage
  {
    icon: Database,
    title: 'Privacy-first storage',
    desc: 'Minimal personal data, encrypted tokens, and media via signed URLs to protect identity.',
    tag: 'Data'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 bg-gradient-to-b from-transparent to-zinc-50 dark:to-zinc-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">Built for empathy, privacy, and safety</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">A thoughtful set of capabilities designed around emotional wellbeing and respectful connection.</p>
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
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-500 text-white grid place-items-center">
                  <f.icon className="h-5 w-5" />
                </div>
                {f.tag && (
                  <span className="text-[10px] uppercase tracking-wider rounded-full border border-zinc-200 dark:border-zinc-800 px-2 py-0.5 text-zinc-600 dark:text-zinc-300">
                    {f.tag}
                  </span>
                )}
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
