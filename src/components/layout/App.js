import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../views/Header.js";
import Home from "../views/Home.js";
import Editor from "../views/Editor.js";
import FAQ from "../views/Faq.js";
import Policy from "../views/Policy.js";
import Contact from "../views/Contact.js";
import Camera from "../views/Camera.js";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </>
  );
}

export default App;
