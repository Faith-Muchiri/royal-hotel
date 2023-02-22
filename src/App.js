import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Accomodation from "./pages/Accomodation";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Elements from "./pages/Elements";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/elements" element={<Elements/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
