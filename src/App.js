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
        <Route path="/app" element={<Home />} />
        <Route path="/app/about" element={<About />} />
        <Route path="/app/vocational" element={<Vocational />} />
        <Route path="/app/technical" element={<Technical />} />
        <Route path="/app/degree" element={<Degree />} />
        <Route path="/app/language" element={<Language />} />
        <Route path="/app/vocational/:id" element={<Details />} />
        <Route path="/app/work-with-us" element={<WorkWithUs />} />
      </Routes>
    </div>
  );
}

export default App;
