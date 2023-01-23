import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutMy from './components/data/AboutMy';
import PreviousWorkExperience from './components/data/PreviousWorkExperience';
import MainLayout from './components/MainLayout';
import NotFound from './components/NotFound';
import Contacts from './components/data/Contacts';
import Skills from './components/data/Skills';


function App() {
  return ( <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/about" element={<AboutMy />}/>
        <Route path="/previous work" element={<PreviousWorkExperience />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </div>
  </BrowserRouter>
  
  );
}

export default App;
