import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Downloads from './components/Downloads';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <Hero />
      <About />
      <Features />
      <UseCases />
      <Downloads />
      <Footer />
    </div>
  );
}

export default App;
