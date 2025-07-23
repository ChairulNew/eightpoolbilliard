import React from "react";
import "./Booking.css";

const poolData = [
  {
    title: "POOL 1",
    desc: "4 Lounge sofa tables can fit up to 7 people with minimum spend 300k after 6pm for food and drinks per hour. Billiards is charged usual rate of 100K++ per hour not including tax. ",
    image: "https://placehold.co/600x400",
  },
  {
    title: "POOL 2",
    desc: "4 Lounge sofa tables can fit up to 7 people with minimum spend 300k after 6pm for food and drinks per hour. Billiards is charged usual rate of 100K++ per hour not including tax. ",
    image: "https://placehold.co/600x400",
  },
  {
    title: "POOL 3",
    desc: "3 Classic tables suited for 2 person with no minimun spend before 6pm and 200K after 6pm for food and drinks. Billiards is charged usual rate of 100K++ per hour not including tax.",
    image: "https://placehold.co/600x400",
  },
  {
    title: "POOL 4",
    desc: "4 Lounge sofa tables can fit up to 7 people with minimum spend 300k after 6pm for food and drinks per hour. Billiards is charged usual rate of 100K++ per hour not including tax. ",
    image: "https://placehold.co/600x400",
  },
];

const Booking = () => {
  return (
    <div className="container-booking">
      <div className="header-booking">
        <div className="image-header-booking">
          <img src="https://placehold.co/600x400" alt="Header" />
        </div>
        <div className="text-header-booking">
          <p className="booking-heading">
            Join Us in a Game, or Table Booking Options
          </p>
          <button
            className="booking-btn"
            style={{
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            BOOK NOW
          </button>
        </div>
      </div>

      {poolData.map((pool, idx) => (
        <div
          key={idx}
          className={`content-booking-section ${
            idx % 2 === 0 ? "left" : "right"
          }`}
        >
          {idx % 2 === 0 ? (
            <>
              <div className="image-booking-wrap">
                <img src={pool.image} alt={pool.title} />
              </div>
              <div className="desc-booking">
                <h2>{pool.title}</h2>
                <p>{pool.desc}</p>
              </div>
            </>
          ) : (
            <>
              <div className="desc-booking">
                <h2>{pool.title}</h2>
                <p>{pool.desc}</p>
              </div>
              <div className="image-booking-wrap">
                <img src={pool.image} alt={pool.title} />
              </div>
            </>
          )}
        </div>
      ))}

      <div className="service-section-booking">
        <h2>Enjoy Our Service</h2>
        <button className="service-btn">More</button>
        <p>@2025 8Pool Billiard Medan</p>
      </div>
    </div>
  );
};

export default Booking;
