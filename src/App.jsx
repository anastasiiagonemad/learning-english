import { Home } from './components/Home';
import { About } from './components/About';
import { StartLearning } from './components/StartLearning';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Missing } from './components/Missing';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/learning-english" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/StartLearning" element={<StartLearning />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
