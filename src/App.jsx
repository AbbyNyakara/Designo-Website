import './app.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Talk from './components/Talk/Talk';

function App() {

  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <About />
      <Talk />
      <Footer />
    </div>
  )
}

export default App
