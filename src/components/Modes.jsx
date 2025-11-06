import { motion } from 'framer-motion';
import { Shield, User, Building2 } from 'lucide-react';

const modes = [
  {
    key: 'youth',
    title: 'Youth Mode',
    description: 'Guided, healthy habits with gentle nudges and content controls.',
    Icon: Shield,
    gradient: 'from-pink-500 via-fuchsia-500 to-purple-600',
    url: 'https://enterprise-vamverse.vercel.app/',
  },
  {
    key: 'adult',
    title: 'Adult Mode',
    description: 'Deep focus blocks, mindful breaks, and distraction insights.',
    Icon: User,
    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    url: 'https://adultt-vamverse.vercel.app/',
  },
  {
    key: 'enterprise',
    title: 'Enterprise Mode',
    description: 'Team analytics, policy guardrails, and privacy-first reporting.',
    Icon: Building2,
    gradient: 'from-amber-500 via-orange-500 to-rose-600',
    url: 'http://youth-vamverse.vercel.app',
  },
];

export default function Modes() {
  return (
    <section id="modes" className="relative w-full bg-[#050713] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Choose Your Mode
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modes.map(({ key, title, description, Icon, gradient, url }, idx) => (
            <motion.a
              key={key}
              href={url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className={`absolute inset-0 opacity-60 blur-2xl transition duration-500 group-hover:opacity-90 bg-gradient-to-br ${gradient}`} />
              <div className="relative z-10 flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/80">{description}</p>

                <div className="mt-6">
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="inline-flex items-center text-sm font-medium text-white/90"
                  >
                    Explore {title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="ml-2 h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </motion.span>
                </div>
              </div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
