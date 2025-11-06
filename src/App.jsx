import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modes from './components/Modes';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#050713] text-white">
      <Navbar />
      <Hero />
      <Modes />
      <Footer />
    </div>
  );
}
