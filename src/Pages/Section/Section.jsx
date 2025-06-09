// import gambar logo
import rsvpLogo from "../../assets/rsvp.png";
import rightBall from "../../assets/right-ball.png";

import "./Section.css";
const SectionMain = () => {
  return (
    <section id="section-main">
      <div
        className="wrap-section"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="left-section">
          <img src={rsvpLogo} alt="" />
        </div>
        <div className="riht-section">
          <img src={rightBall} alt="" style={{ objectFit: "contain" }} />
        </div>
      </div>
    </section>
  );
};

export default SectionMain;
