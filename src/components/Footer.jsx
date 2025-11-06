export default function Footer() {
  return (
    <footer id="about" className="relative w-full bg-[#060814] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-lg font-semibold text-white">Vamverse</h4>
            <p className="mt-2 text-sm text-white/70">
              We help individuals and organizations cultivate healthier, more productive digital habits.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-medium uppercase tracking-wider text-white/80">Contact</h5>
            <p className="mt-2 text-sm text-white/70">hello@vamverse.com</p>
          </div>
          <div>
            <h5 className="text-sm font-medium uppercase tracking-wider text-white/80">Legal</h5>
            <p className="mt-2 text-sm text-white/70">Privacy • Terms</p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
          © {new Date().getFullYear()} Vamverse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
