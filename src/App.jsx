import Home from './components/home/Home';
import About from './components/about/About';
import StartLearning from './components/start/StartLearning';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Missing from './components/missing/Missing';
import Categories from './components/categories/Categories';
import HomeAnimals from './components/categories/Home_animals';
import Fishes from './components/categories/Fishes';
import Birds from './components/categories/Birds';
import RepAmph from './components/categories/Rep_amf';
import WildAnimals from './components/categories/Wild_animals';
import Auth from './components/auth/Register';
import Signin from './components/auth/Login';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Account from './components/auth/Account';
import Vocabulary from './components/vocabulary/Vocabulary';
import Progress from './components/progress/Progress';

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
          <Route path="/Registration" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Vocabulary" element={<Vocabulary />} />
          <Route path="/Progress" element={<Progress />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
