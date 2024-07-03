import Home from './components/Home';
import About from './components/About';
import StartLearning from './components/StartLearning';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Missing from './components/Missing';
import Categories from './components/categories/Categories';
import HomeAnimals from './components/categories/Home_animals';
import Fishes from './components/categories/Fishes';
import Birds from './components/categories/Birds';
import RepAmph from './components/categories/Rep_amf';
import WildAnimals from './components/categories/Wild_animals';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/learning-english" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/StartLearning" element={<StartLearning />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/HomeAnimals" element={<HomeAnimals />} />
          <Route path="/Fishes" element={<Fishes />} />
          <Route path="/Birds" element={<Birds />} />
          <Route path="/RepAmph" element={<RepAmph />} />
          <Route path="/WildAnimals" element={<WildAnimals />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
