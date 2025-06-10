// import assets gambar
import rsvpLogo from "../../assets/rsvp.png";
import rightBall from "../../assets/right-ball.png";
import blueBall from "../../assets/blue-ball.png";
import redBall from "../../assets/red-ball.png";
import stick from "../../assets/stik.png";
import ourPromoBall1 from "../../assets/our-promo1.png";
import ourPromoBall2 from "../../assets/our-promo2.png";
// import card1Image from "../../assets/card1.png";
// import card2Image from "../../assets/card2.png";
// import card3Image from "../../assets/card3.png";

import yellowBall from "../../assets/yellow-ball.png";
import redRightBall from "../../assets/red-right-ball.png";

import { testimonial } from "../../data.js";
import LogoFooter from "../../assets/logo.png";

// library swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Section.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const SectionMain = () => {
  // Update TestimonialCard component untuk efek yang lebih baik
  const TestimonialCard = ({ name, date, description }) => {
    return (
      <div
        className="TestimonialCard"
        style={{
          backgroundColor: "white",
          borderRadius: 16,
          padding: 32,
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
          maxWidth: 360,
          minHeight: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          margin: "auto",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        {/* Gradient background overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #FFD700, #FFA500, #FFD700)",
          }}
        />

        {/* Icon avatar dengan efek glow */}
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "#f8f9fa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            border: "2px solid rgba(255, 215, 0, 0.2)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#666"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        </div>

        {/* Nama dengan style yang lebih menarik */}
        <h3
          style={{
            margin: 0,
            fontSize: 18,
            fontWeight: 700,
            color: "#1a1a1a",
            letterSpacing: "0.5px",
          }}
        >
          {name}
        </h3>

        <span
          style={{
            fontSize: 14,
            color: "#666",
            marginBottom: 20,
            fontStyle: "italic",
          }}
        >
          {date}
        </span>

        {/* Deskripsi dengan line-height yang lebih baik */}
        <p
          style={{
            fontSize: 15,
            color: "#444",
            lineHeight: "1.6",
            margin: 0,
            fontWeight: 400,
          }}
        >
          {description.length > 380
            ? description.slice(0, 377) + "..."
            : description}
        </p>
      </div>
    );
  };

  // Data dinamis untuk card
  const cardData = [
    {
      id: 1,
      topColor: "#304FFE",
      image: null,
      title: "Premium Table",
      description: "Experience luxury billiards",
      buttonColor: "red",
    },
    {
      id: 2,
      topColor: "#FF5722",
      image: null,
      title: "VIP Room",
      description: "Exclusive private gaming",
      buttonColor: "#4CAF50",
    },
    {
      id: 3,
      topColor: "#9C27B0",
      image: null, //
      title: "Tournament Area",
      description: "Professional competition space",
      buttonColor: "#FF9800",
    },
  ];

  return (
    <>
      <style jsx>{`
        .swiper-slide {
          transition: all 0.5s ease;
          filter: blur(2px);
          opacity: 0.7;
          transform: scale(0.9);
        }

        .swiper-slide-active {
          filter: blur(0px) !important;
          opacity: 1 !important;
          transform: scale(1.05) !important;
          z-index: 2 !important;
        }

        .swiper-slide-next,
        .swiper-slide-prev {
          filter: blur(3px);
          opacity: 0.5;
          transform: scale(0.85);
        }

        .swiper-button-prev-custom:hover,
        .swiper-button-next-custom:hover {
          background-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.1);
        }

        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #ffd700;
          transform: scale(1.3);
        }

        .swiper-slide-active .TestimonialCard {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3) !important;
          border: 2px solid rgba(255, 215, 0, 0.3);
        }

        @media (max-width: 768px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            width: 40px;
            height: 40px;
          }

          .swiper-slide {
            filter: blur(1px);
          }

          .swiper-slide-active {
            transform: scale(1.02) !important;
          }
        }
      `}</style>

      <section id="section-main">
        {/* Header */}
        <div
          className="wrap-section"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className="left-section">
            <img src={rsvpLogo} alt="" />
          </div>
          <div className="riht-section">
            <img src={rightBall} alt="" style={{ objectFit: "contain" }} />
          </div>
        </div>

        {/* Welcome Section */}
        <div
          className="wrap-section"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: 10,
          }}
        >
          <div
            className="left-section"
            style={{
              display: "flex",
              flexDirection: "row",
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <img
                src={blueBall}
                alt=""
                style={{
                  marginLeft: "35%",
                  width: 177,
                  height: 177,
                  objectFit: "contain",
                  display: "inline-block",
                }}
              />
              <h2
                style={{
                  color: "yellow",
                  fontSize: 50,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Welcome to the club
              </h2>
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 23,
                  fontWeight: "400",
                }}
              >
                Enter an exclusive arena for billiard lovers. Here, it's not
                just your game that's judged, it's your style and your
                instincts. Be part of a community that knows how to play — and
                win.
              </p>
            </div>
          </div>

          <div
            className="riht-section"
            style={{ width: "50%", marginRight: -100 }}
          >
            <div>
              <img
                src={stick}
                alt=""
                style={{ objectFit: "contain", marginRight: -300 }}
              />
              <img
                src={redBall}
                alt=""
                style={{
                  marginTop: -200,
                  marginLeft: 250,
                  objectFit: "contain",
                  width: 177,
                  height: 177,
                }}
              />
            </div>
          </div>
        </div>

        {/* Noble Game Section */}
        <div className="wrap-section" style={{ marginTop: 99 }}>
          <div className="right-section" style={{ paddingRight: 55 }}>
            <h1
              style={{
                marginBottom: 22,
                color: "yellow",
                textAlign: "right",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize: 46,
                fontWeight: "bold",
              }}
            >
              THE MOST NOBLE GAME
            </h1>
            <p
              style={{
                textAlign: "right",
                color: "white",
                fontSize: 22,
                fontWeight: 400,
              }}
            >
              From classic rooms to the modern era, billiards retains its charm.
              A
              <br />
              game that tests character, not just skill.
            </p>
          </div>
        </div>

        <div
          className="wrap-section our-promo"
          style={{
            display: "flex",
            marginTop: 99,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "0 20px",
          }}
        >
          <img
            src={ourPromoBall1}
            alt=""
            style={{ width: 160, height: 152, flexShrink: 0 }}
          />
          <div
            className="column-row"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <span style={{ color: "yellow", fontSize: 22 }}>DON'T MISS</span>
            <h2 style={{ color: "white", fontSize: 35, fontWeight: 600 }}>
              OUR PROMO
            </h2>
          </div>
          <img
            src={ourPromoBall2}
            alt=""
            style={{ width: 160, height: 152, flexShrink: 0 }}
          />
        </div>

        <div
          className="wrap-section"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: 99,
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          {cardData.map((card) => (
            <div
              key={card.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div
                className="card"
                style={{
                  width: 586,
                  display: "flex",
                  flexDirection: "column",
                  height: 380,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  border: "1px solid #ccc",
                  overflow: "hidden",
                  backgroundColor: "#f0f0f0",
                  borderRadius: 8,
                }}
              >
                <div
                  style={{
                    backgroundColor: card.topColor,
                    height: 40,
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                ></div>

                <div
                  style={{
                    flex: 1,
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {card.image && (
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{
                        width: "100%",
                        maxWidth: 200,
                        height: 150,
                        objectFit: "cover",
                        marginBottom: 20,
                        borderRadius: 6,
                      }}
                    />
                  )}

                  <h3
                    style={{
                      color: "#333",
                      fontSize: 24,
                      fontWeight: "bold",
                      marginBottom: 10,
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      color: "#666",
                      fontSize: 16,
                      margin: 0,
                      marginTop: 10,
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>

              <button
                style={{
                  backgroundColor: card.buttonColor,
                  color: "white",
                  padding: "12px 24px",
                  fontSize: 18,
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = "0.8";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = "1";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                BOOKING
              </button>
            </div>
          ))}
        </div>

        <div className="wrap-section" style={{ position: "relative" }}>
          <h1
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 200,
              fontSize: 30,
              fontWeight: "bold",
              marginBottom: 60,
            }}
          >
            COMMENTS
          </h1>

          <Swiper
            modules={[EffectCoverflow, Navigation, Pagination]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            spaceBetween={0}
            coverflowEffect={{
              rotate: 25,
              stretch: 80,
              depth: 200,
              modifier: 1.5,
              slideShadows: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            style={{
              marginTop: 80,
              paddingTop: 50,
              paddingBottom: 50,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonial.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{
                    transform: "perspective(1000px)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <TestimonialCard
                    name={item.name}
                    date={item.date}
                    description={item.description}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div
            className="swiper-button-prev-custom"
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "50px",
              height: "50px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              transition: "all 0.3s ease",
            }}
          >
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </div>

          <div
            className="swiper-button-next-custom"
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "50px",
              height: "50px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              transition: "all 0.3s ease",
            }}
          >
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </div>

          {/* Custom Pagination */}
          <div
            className="swiper-pagination-custom"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
              gap: "10px",
            }}
          ></div>
        </div>
        <div
          className="wrap-section"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "right",
          }}
        >
          <img
            src={yellowBall}
            style={{ width: 158.252, height: 169, aspectRatio: 158.25 / 169.0 }}
            alt=""
          />
        </div>
        <div
          className="wrap-section"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "left",
          }}
        >
          <img
            src={redRightBall}
            style={{ width: 158.252, height: 169, aspectRatio: 158.25 / 169.0 }}
            alt=""
          />
        </div>
        <div
          className="wrap-section"
          style={{
            color: "white",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 50,
          }}
        >
          <form
            action=""
            style={{ marginLeft: 180, width: "100%", maxWidth: 800 }}
          >
            <label htmlFor="" style={{ fontSize: 24 }}>
              FEEDBACK :
            </label>
            <hr
              style={{
                width: "75%",
                color: "white",
                borderTop: "2px solid white",
                minWidth: 300,
                marginLeft: 180,
                marginBottom: 50,
              }}
            />
            <label
              htmlFor=""
              style={{ color: "white", marginLeft: 425, fontSize: 18 }}
            >
              FROM
            </label>
            <br />
            <br />
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 50,
              }}
            >
              <label htmlFor="" style={{ minWidth: 100 }}>
                NAME :
              </label>
              <input
                type="text"
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  borderBottom: "2px solid white",
                  color: "white",
                  padding: "8px 0",
                  marginLeft: 20,
                  outline: "none",
                  fontSize: 16,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 50,
              }}
            >
              <label htmlFor="" style={{ minWidth: 100 }}>
                EMAIL :
              </label>
              <input
                type="email"
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  borderBottom: "2px solid white",
                  color: "white",
                  padding: "8px 0",
                  marginLeft: 20,
                  outline: "none",
                  fontSize: 16,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 50,
              }}
            >
              <label htmlFor="" style={{ minWidth: 100 }}>
                ADDRESS :
              </label>
              <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                <input
                  type="text"
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    borderBottom: "2px solid white",
                    color: "white",
                    padding: "8px 0",
                    marginLeft: 20,
                    outline: "none",
                    fontSize: 16,
                  }}
                />
                <button
                  style={{
                    backgroundColor: "yellow",
                    color: "black",
                    border: "none",
                    padding: "10px 20px",
                    marginLeft: 20,
                    borderRadius: 4,
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "0.8";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "1";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  SEND
                </button>
              </div>
            </div>
          </form>
          <div
            className="wrap-section-footer"
            style={{ display: "flex", flexDirection: "row", width: "100%" }}
          >
            <div className="left-footer" style={{ width: "50%" }}>
              <div
                className="top"
                style={{ display: "flex", flexDirection: "row", gap: 19 }}
              >
                <p
                  style={{
                    color: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  On the 2nd floor of{" "}
                </p>
                <img
                  src={LogoFooter}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  alt=""
                />
              </div>
              <br />
              <div className="bottom" style={{ display: "flex" }}>
                <p>
                  Jl. Sei Serayu No.93/95, Babura Sunggal, Kec. Medan Sunggal,
                  Kota Medan, Sumatera Utara 20154
                </p>
              </div>
              <br />
              <br />
              <div
                className="bottom-medsos"
                style={{ display: "flex", gap: 10 }}
              >
                <FaLocationDot />
                <FaWhatsapp />
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionMain;
