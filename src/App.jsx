import "./index.css";
import Navbar from "../src/Pages/Navbar/Navbar";
import Header from "./Pages/Header/Header";
import SectionMain from "./Pages/Section/Section";
import { Routes, Route } from "react-router-dom";
import Booking from "./Pages/Booking/Booking";
import Menu from "./Pages/menu/Menu";
import Faqs from "./Pages/Faqs/Faqs";
import Service from "./Pages/Service/Service";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <SectionMain />
            </>
          }
        />
        <Route path="/booking" element={<Booking />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/ourservice" element={<Service />} />
      </Routes>
    </>
  );
}

export default App;
