import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { FaTimes, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { navData } from "../../../data";
import { ourMenuItems } from "../../../data";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setVisible(currentScrollPosition > 145);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (visible && window.gsap) {
      window.gsap.fromTo(".navbar", { y: -250 }, { y: 0, top: 0 });
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [visible]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavigate = (tab) => {
    setOpen(false);
    if (isHome && tab.type === "scroll") return;
    if (tab.type === "scroll") {
      navigate(`/?scrollTo=${tab.id}`);
    } else {
      navigate(tab.id);
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const handleDropdownMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setTimeout(() => {
      setDropdownOpen(false);
    }, 100);
  };

  return (
    <nav className={`navbar ${visible ? "visible" : ""}`}>
      {open && (
        <div className="sidebar_overlay" onClick={() => setOpen(false)}></div>
      )}
      <div
        className="logo"
        onClick={() => {
          navigate("/");
          setOpen(false);
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 100);
        }}
        style={{ cursor: "pointer" }}
      >
        <img src={Logo} className="logo-navbar" alt="Logo" />
      </div>

      <div className={`box nav_tabs ${open ? "open" : ""}`}>
        <div
          className="icon_container cancel_btn"
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </div>

        {navData.map((tab, index) => {
          if (tab.name === "INSTAGRAM") {
            return (
              <a
                key={index}
                href="https://www.instagram.com/kinisocialclub"
                target="_blank"
                rel="noopener noreferrer"
                className="tab icon_tab"
                onClick={() => setOpen(false)}
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            );
          }

          if (tab.name === "WHATSAPP") {
            return (
              <a
                key={index}
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="tab icon_tab"
                onClick={() => setOpen(false)}
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            );
          }

          if (tab.name === "TIKTOK") {
            return (
              <a
                key={index}
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="tab icon_tab"
                onClick={() => setOpen(false)}
                aria-label="TikTok"
              >
                <FaTiktok size={20} />
              </a>
            );
          }
          if (tab.name === "RSPV") {
            return (
              <a
                key={index}
                href={tab.id}
                target="_blank"
                rel="noopener noreferrer"
                className="tab"
                onClick={() => setOpen(false)}
              >
                <p>{tab.name}</p>
              </a>
            );
          }

          if (tab.name === "OUR MENU") {
            return (
              <div
                key={index}
                className="tab dropdown_tab"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <p>{tab.name}</p>
                <div className={`dropdown_menu ${dropdownOpen ? "show" : ""}`}>
                  {ourMenuItems.map((item, i) => (
                    <RouterLink
                      key={i}
                      to={item.path}
                      className="dropdown_item"
                      onClick={() => {
                        setOpen(false);
                        setDropdownOpen(false);
                        setTimeout(() => {
                          window.scrollTo(0, 0);
                        }, 100);
                      }}
                    >
                      {item.label}
                    </RouterLink>
                  ))}
                </div>
              </div>
            );
          }

          if (isHome && tab.type === "scroll") {
            return (
              <ScrollLink
                key={index}
                to={tab.id}
                className="tab"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-70}
                onClick={() => {
                  setOpen(false);
                  if (tab.id === "section1") {
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }, 100);
                  }
                }}
              >
                <p>{tab.name}</p>
              </ScrollLink>
            );
          } else if (tab.type === "link") {
            return (
              <RouterLink
                key={index}
                to={tab.id}
                className="tab"
                onClick={() => {
                  localStorage.setItem("scrollTo", tab.scrollTo || "");
                  setOpen(false);
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 100);
                }}
              >
                <p>{tab.name}</p>
              </RouterLink>
            );
          } else {
            return (
              <RouterLink
                key={index}
                to="/"
                className="tab"
                onClick={() => {
                  localStorage.setItem("scrollTo", tab.id);
                  setOpen(false);
                  setTimeout(() => {
                    window.scrollTo(0, 0);
                  }, 100);
                }}
              >
                <p>{tab.name}</p>
              </RouterLink>
            );
          }
        })}
      </div>
      <div className="box buttons"></div>
      <div className="icon_container menu_btn" onClick={() => setOpen(!open)}>
        <RiMenu3Fill />
      </div>
    </nav>
  );
};

export default Navbar;
