import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import Camera from './Camera.js';
import Editor from './Editor.js';
import FAQ from './Faq.js';
import Policy from './Policy.js';
import Contact from './Contact.js';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/camera" element={<Camera/>}/>
        <Route path="/editor" element={<Editor/>}/>
      </Routes>
    </>
  );
}

export default App;

