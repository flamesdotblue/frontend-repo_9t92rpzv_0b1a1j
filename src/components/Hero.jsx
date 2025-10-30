import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HEADLINES = {
  en: {
    title: 'Find empathy. Feel seen.',
    subtitle: 'An AI-driven social space to share your story and connect through emotion — not appearances.',
    cta: 'Share a story',
    alt: 'SoulLink hero animation'
  },
  hi: { title: 'सहानुभूति पाएं, सुने जाएं', subtitle: 'एआई-संचालित सुरक्षित जगह जहाँ आप अपनी कहानी साझा करें और भावनाओं के आधार पर जुड़ें।', cta: 'अपनी कहानी साझा करें', alt: 'एनीमेशन' },
  gu: { title: 'સમજ અને સહાનુભૂતિ મેળવો', subtitle: 'એઆઈ આધારિત જગ્યા, જ્યાં લાગણીઓના આધારે જોડાઓ.', cta: 'વાર્તા શેર કરો', alt: 'એનિમેશન' },
  mr: { title: 'समजूतदारपणा शोधा', subtitle: 'भावनांवर आधारित जोडणारी AI सामाजिक जागा.', cta: 'तुमची कथा सांगा', alt: 'अॅनिमेशन' },
  ta: { title: 'அன்பும் புரிதலும் இங்கே', subtitle: 'உணர்வுகளின் மூலம் இணைக்கும் AI சமூக இடம்.', cta: 'உங்கள் கதையை பகிரவும்', alt: 'அனிமேஷன்' },
  te: { title: 'సానుభూతి ఇక్కడే', subtitle: 'భావోద్వేగాల ఆధారంగా కలిపే AI సామాజిక స్థలం.', cta: 'మీ కథను పంచుకోండి', alt: 'యానిమేషన్' },
  kn: { title: 'ಸಹಾನುಭೂತಿ, ಇಲ್ಲಿ', subtitle: 'ಭಾವನೆಗಳ ಆಧಾರದಲ್ಲಿ ಸಂಪರ್ಕಿಸುವ AI ಸಾಮಾಜಿಕ ವಲಯ.', cta: 'ನಿಮ್ಮ ಕಥೆಯನ್ನು ಹಂಚಿಕೊಳ್ಳಿ', alt: 'ಆನಿಮೇಶನ್' },
  bn: { title: 'সহানুভূতি ও বোঝাপড়া', subtitle: 'অনুভূতির মাধ্যমে সংযোগের জন্য AI চালিত সামাজিক স্থান।', cta: 'গল্প শেয়ার করুন', alt: 'অ্যানিমেশন' },
  ml: { title: 'സഹാനുഭൂതി, ഇവിടെ', subtitle: 'വികാരങ്ങളുടെ അടിസ്ഥാനത്തിൽ ബന്ധിപ്പിക്കുന്ന AI സാമൂഹിക ഇടം.', cta: 'നിങ്ങളുടെ കഥ പങ്കിടുക', alt: 'ആനിമേഷൻ' },
  pa: { title: 'ਹਮਦਰਦੀ ਮਹਿਸੂਸ ਕਰੋ', subtitle: 'ਭਾਵਨਾਵਾਂ ਰਾਹੀਂ ਜੋੜਨ ਲਈ ਏਆਈ ਸੰਚਾਲਿਤ ਥਾਂ।', cta: 'ਆਪਣੀ ਕਹਾਣੀ ਸਾਂਝੀ ਕਰੋ', alt: 'ਐਨੀਮੇਸ਼ਨ' },
  or: { title: 'ସହାନୁଭୂତି ଖୋଜନ୍ତୁ', subtitle: 'ଭାବନା ଆଧାରିତ ସମ୍ପର୍କ ପାଇଁ ଏଆଇ ସାମାଜିକ ସ୍ଥାନ।', cta: 'ଆପଣଙ୍କ କାହାଣୀ ସେୟାର କରନ୍ତୁ', alt: 'ଏନିମେସନ୍' },
};

export default function Hero({ language }) {
  const c = HEADLINES[language] ?? HEADLINES.en;

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center min-h-[640px] py-12 sm:py-16">
        <div className="relative z-10 order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            {c.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-prose"
          >
            {c.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#get-started"
              className="inline-flex items-center rounded-full bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-500 px-6 py-3 text-white shadow hover:shadow-lg transition"
            >
              {c.cta}
            </a>
            <a
              href="#features"
              className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 px-6 py-3 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
            >
              Learn more
            </a>
          </motion.div>
        </div>
        <div className="relative order-1 lg:order-2 h-[360px] sm:h-[440px] md:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            aria-label={c.alt}
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/10 dark:from-zinc-950/60 dark:via-transparent dark:to-zinc-900/40" />
        </div>
      </div>
    </section>
  );
}
