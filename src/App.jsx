import './app.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Talk from './components/Talk/Talk';
import Location from './components/Location/Location';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Company from './components/Company/Company';
import WebDesign from './components/WebDesign/WebDesign';
import AppDesign from './components/AppDesign/AppDesign';
import GraphicDesign from './components/GraphicDesign/GraphicDesign';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init({duration: 500})
  }, [])

  return (
    <div className="app">
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<Company />}/>
            <Route path='/locations' element={ <Location />} />
            <Route path='/contact' element={ <Contact />} />
            <Route path='/web-design' element={<WebDesign />} />
            <Route path='/app-design' element={<AppDesign />} />
            <Route path='/graphic-design' element={<GraphicDesign />} />
          </Routes>
        <Talk />
        <Footer />
      </Router>
    </div>
  )
}

export default App
