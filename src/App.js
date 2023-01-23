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
        <Route path="/newpage/" element={<MainLayout />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="/newpage/skills" element={<Skills />}/>
        <Route path="/newpage/about" element={<AboutMy />}/>
        <Route path="/newpage/previous work" element={<PreviousWorkExperience />}/>
        <Route path="/newpage/contacts" element={<Contacts />}/>
      </Routes>
    </div>
  </BrowserRouter>
  
  );
}

export default App;
