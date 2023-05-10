import Navbar from "./routes/navbar/navbar.component";
import { Routes, Route } from 'react-router-dom';
import About from "./routes/about/about.component";
import Skills from "./routes/skills/skills.component";
import Projects from "./routes/projects/projects.component";
import Contact from "./routes/contact/contact.component";
import Home from "./routes/home/home.component";

const App =()=>{
  return (
    <Routes>
    <Route path='/' element={<Navbar />}>
    <Route index element={<Home />} />
    <Route path='/about' element={<About />}></Route>
    <Route path='/skills' element={<Skills />}></Route>
    <Route path='/projects' element={<Projects />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    </Route>
  </Routes>
  );
}

export default App;
