import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Error from './components/Error';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<Error />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
