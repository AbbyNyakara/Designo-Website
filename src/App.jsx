import './app.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';

function App() {

  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <About />
    </div>
  )
}

export default App
