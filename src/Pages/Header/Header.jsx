import VideoHeader from "../../assets/video-header.mp4";
import "./Header.css";
import gap from "../../assets/gap.png";
import Navbar from "../Navbar/Navbar"; // Pastikan path-nya benar

const Header = () => {
  return (
    <section id="header">
      <div className="header-wrap">
        <Navbar /> {/* Navbar ditambahkan di sini */}
        <div className="slogan-text-wrap" style={{ marginTop: -100 }}>
          <h1 className="title-heading">8POOL</h1>
          <h1 className="title-heading" style={{ color: "yellow" }}>
            BILLIARD
          </h1>
        </div>
        <video
          src={VideoHeader}
          autoPlay
          muted
          loop
          playsInline
          className="header-video"
        />
        <div className="header-bottom">
          <p className="header-text-bottom">SINCE 2022</p>
        </div>
      </div>

      <div className="gap-wrapper">
        <img src={gap} alt="gap" className="gap-img" />
      </div>
    </section>
  );
};

export default Header;
