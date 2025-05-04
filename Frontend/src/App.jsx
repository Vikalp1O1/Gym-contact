import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkoutSessions from './components/WorkoutSessions';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BMICalculator from './components/BMICalculator';
function App() {
  return (
    <Router>
    <Navbar/>
    <Hero/>
    <WorkoutSessions/>
    <Gallery/>
    <Pricing/>
    <Contact/>
    <BMICalculator/>
    <Footer/>
    <ToastContainer position="top-center"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={true}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  style={{ zIndex: 9999 }} />
    </Router>
  )
}

export default App