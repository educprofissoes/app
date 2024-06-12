import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import About from './pages/About';
import Vocational from './pages/Vocational';
import Technical from './pages/Technical';
import Degree from './pages/Degree';
import Language from './pages/Language';
import Details from './pages/Details';
import WorkWithUs from './pages/WorkWithUs';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#/about" element={<About />} />
        <Route path="/app/#/vocational" element={<Vocational />} />
        <Route path="/#/technical" element={<Technical />} />
        <Route path="/#/degree" element={<Degree />} />
        <Route path="/#/language" element={<Language />} />
        <Route path="/#/vocational/:id" element={<Details />} />
        <Route path="/#/work-with-us" element={<WorkWithUs />} />
      </Routes>
    </div>
  );
}

export default App;
