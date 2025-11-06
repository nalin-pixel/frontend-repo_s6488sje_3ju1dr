import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="relative w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="rounded-xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-violet-600 p-2 shadow-lg shadow-blue-500/30">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">Vamverse</span>
          </span>
        </motion.a>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#" className="text-sm text-white/80 transition hover:text-white">Home</a>
          <a href="#modes" className="text-sm text-white/80 transition hover:text-white">Modes</a>
          <a href="#about" className="text-sm text-white/80 transition hover:text-white">About</a>
        </nav>
      </div>
    </header>
  );
}
