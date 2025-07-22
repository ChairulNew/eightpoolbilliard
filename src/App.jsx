import "./index.css";
import Navbar from "../src/Pages/Navbar/Navbar";
import Header from "./Pages/Header/Header";
import SectionMain from "./Pages/Section/Section";
import { Routes, Route } from "react-router-dom";
import Booking from "./Pages/Booking/Booking";
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
      </Routes>
    </>
  );
}

export default App;
