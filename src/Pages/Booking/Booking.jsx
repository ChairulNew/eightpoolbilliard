import React from "react";
import BgBooking from "../../assets/bg-booking.png";
const Booking = () => {
  return (
    <div style={{ margin: "100px 49px" }} className="container-booking">
      <div
        className="header-booking"
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "190px",
        }}
      >
        <div className="image-header-booking">
          <img
            style={{ width: "500px", height: "300px" }}
            src="https://placehold.co/600x400"
          />
        </div>
        <div
          className="text-header-booking"
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            margin: "0 100px",
          }}
        >
          <p
            style={{
              marginBottom: "46px",
              color: "white",
              color: "white",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Join Us in a Game, or Table Booking Options
          </p>
          <button
            style={{
              border: "7px solid #FC0",
              width: "151px",
              height: "44px",
              color: "#FC0",
            }}
          >
            BOOK NOW
          </button>
        </div>
      </div>
      <div
        className="content-booking-left"
        style={{ display: "flex", flexDirection: "row", padding: "0 15px" }}
      >
        <div className="image-booking-wrap">
          <img src="https://placehold.co/600x400" />
        </div>
        <div
          style={{
            boxShadow: "10px 4px 4px 10px rgba(0, 0, 0, 1)",
            color: "white",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2>POOL 1</h2>
          <p>
            4 Lounge sofa tables can fit up to 7 people with minimum spend 300k
            after 6pm for food and drinks per hour. Billiards is charged usual
            rate of 100K++ per hour not including tax. 
          </p>
        </div>
      </div>
      <div
        className="content-booking-left"
        style={{ display: "flex", flexDirection: "row", padding: "0 15px" }}
      >
        <div className="image-booking-wrap">
          <img src="https://placehold.co/600x400" />
        </div>
        <div
          style={{
            boxShadow: "10px 4px 4px 10px rgba(0, 0, 0, 1)",
            color: "white",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2>POOL 1</h2>
          <p>
            4 Lounge sofa tables can fit up to 7 people with minimum spend 300k
            after 6pm for food and drinks per hour. Billiards is charged usual
            rate of 100K++ per hour not including tax. 
          </p>
        </div>
      </div>
      <div
        className="content-booking-left"
        style={{ display: "flex", flexDirection: "row", padding: "0 15px" }}
      >
        <div className="image-booking-wrap">
          <img src="https://placehold.co/600x400" />
        </div>
        <div
          style={{
            boxShadow: "10px 4px 4px 10px rgba(0, 0, 0, 1)",
            color: "white",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2>POOL 1</h2>
          <p>
            4 Lounge sofa tables can fit up to 7 people with minimum spend 300k
            after 6pm for food and drinks per hour. Billiards is charged usual
            rate of 100K++ per hour not including tax. 
          </p>
        </div>
      </div>
      <div
        className="content-booking-left"
        style={{ display: "flex", flexDirection: "row", padding: "0 15px" }}
      >
        <div className="image-booking-wrap">
          <img src="https://placehold.co/600x400" />
        </div>
        <div
          style={{
            boxShadow: "10px 4px 4px 10px rgba(0, 0, 0, 1)",
            color: "white",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2>POOL 1</h2>
          <p>
            4 Lounge sofa tables can fit up to 7 people with minimum spend 300k
            after 6pm for food and drinks per hour. Billiards is charged usual
            rate of 100K++ per hour not including tax. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
