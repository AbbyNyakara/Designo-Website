import './app.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Talk from './components/Talk/Talk';
import Location from './components/Location/Location';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

function App() {

  return (
    <div className="app">
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/locations' element={ <Location />} />
            <Route path='/contact' element={ <Contact />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
