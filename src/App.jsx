import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound";


function WeatherApp() {
  return (

    
    <BrowserRouter>
    
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

      
    </BrowserRouter>
  );
}

export default WeatherApp;
