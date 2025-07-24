import React from "react";

const Service = () => {
  return (
    <div
      className="container-service"
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        margin: "0 100px",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "55px" }}>Our Service</h1>
      <p>
        We don’t just provide a pool table — we provide an experience. With a
        comfortable atmosphere, quality equipment, and friendly, helpful staff,
        our services are designed to provide maximum enjoyment and comfort for
        every visitor. Whether you come to relax, practice seriously, or just
        hang out with friends, our services will make every moment at our venue
        special.
      </p>
    </div>
  );
};

export default Service;
