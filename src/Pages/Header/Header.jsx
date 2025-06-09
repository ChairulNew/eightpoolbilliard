import VideoHeader from "../../assets/video-header.mp4";
import "./Header.css";
import gap from "../../assets/gap.png";
// import gapBottom from "../../assets/gap-bottom.png";
// import "../Section/Section1";

const Header = () => {
  const handleScrollToSection = () => {
    const section = document.getElementById("section1");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="header">
      <div className="header-wrap">
        <div className="slogan-text-wrap" style={{ marginTop: -100 }}>
          <h1 className="title-heading">8POOL</h1>

          <h1 className="title-heading" style={{ color: "yellow" }}>
            BILLIARD
          </h1>
          {/* <button className="btn_title" onClick={handleScrollToSection}>
            Click for more information
          </button> */}
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
