import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderOne = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='mean-expand-class'>+</span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".mean-expand-class");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };
  return (
    <>
      <header className="nav-header header-layout1">
        {/* <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fas fa-envelope" />
                      <Link to="mailto:info@example.com">info@example.com</Link>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      6391 Elgin St. Celina, 10299
                    </li>
                    <li>
                      <i className="fas fa-clock" />
                      Sunday - Friday
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-links ps-0">
                  <ul>
                    <li>
                      <div className="social-links">
                        <Link to="https://www.facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="https://www.instagram.com/">
                          <i className="fab fa-instagram" />
                        </Link>
                        <Link to="https://www.twitter.com/">
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link to="https://www.linkedin.com/">
                          <i className="fab fa-linkedin" />
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className={`sticky-wrapper ${scroll && "sticky"}`}>
          {/* Main Menu Area */}
          <div className="menu-area">
            <div className="header-navbar-logo">
              <Link to="/">
                <img src="assets/img/icon/14.png" alt="Eram" style={{height:'70px'}}/>
              </Link>
            </div>
            <div className="container">
              <div className="row align-items-center justify-content-lg-start justify-content-between">
                <div className="col-auto d-xl-none d-block">
                  <div className="header-logo">
                    <Link to="/">
                      <img src="assets/img/icon/14.png" alt="Eram" style={{height:'70px'}}/>
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                                        <li className="">
                                          <Link to="/">Home</Link>
                                          {/* <ul className="sub-menu">
                                            <li>
                                              <NavLink
                                                to="/"
                                                className={(navData) =>
                                                  navData.isActive ? "active" : ""
                                                }
                                              >
                                                Home 01
                                              </NavLink>
                                            </li>
                                            <li>
                                              <NavLink
                                                to="/home-2"
                                                className={(navData) =>
                                                  navData.isActive ? "active" : ""
                                                }
                                              >
                                                Home 02
                                              </NavLink>
                                            </li>
                                            <li>
                                              <NavLink
                                                to="/home-3"
                                                className={(navData) =>
                                                  navData.isActive ? "active" : ""
                                                }
                                              >
                                                Home 03
                                              </NavLink>
                                            </li>
                                            <li>
                                              <NavLink
                                                to="/home-4"
                                                className={(navData) =>
                                                  navData.isActive ? "active" : ""
                                                }
                                              >
                                                Home 04
                                              </NavLink>
                                            </li>
                                            <li>
                                              <NavLink
                                                to="/home-5"
                                                className={(navData) =>
                                                  navData.isActive ? "active" : ""
                                                }
                                              >
                                                Home 05
                                              </NavLink>
                                            </li>
                                            <li>
                                              <NavLink
                                                to="/home-6"
                                                className={(navData) =>
                                                  navData.isActive ? "active" : ""
                                                }
                                              >
                                                Home 06
                                              </NavLink>
                                            </li>
                                          </ul> */}
                                        </li>
                                        <li>
                                          <NavLink
                                            to="/about"
                                            className={(navData) =>
                                              navData.isActive ? "active" : ""
                                            }
                                          >
                                            About Us
                                          </NavLink>
                                        </li>
                                        <li className="menu-item-has-children submenu-item-has-children">
                                      <Link to="/service">Services</Link>
                                      <ul className="sub-menu submenu-class">
                                        <li>
                                          <NavLink
                                            to="/fabrication"
                                            className={(navData) =>
                                              navData.isActive ? "active" : ""
                                            }
                                          >
                                            Fabrication
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink
                                            to="/civil-mechanical"
                                            className={(navData) =>
                                              navData.isActive ? "active" : ""
                                            }
                                          >
                                            Civil & Mechanical Contracts
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink
                                            to="/material-supply"
                                            className={(navData) =>
                                              navData.isActive ? "active" : ""
                                            }
                                          >
                                            Project Material Supply Management
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink
                                            to="/warehousing"
                                            className={(navData) =>
                                              navData.isActive ? "active" : ""
                                            }
                                          >
                                            Warehousing, Marshalling, & Logistics
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink
                                            to="/maintenance"
                                            className={(navData) =>
                                              navData.isActive ? "active" : ""
                                            }
                                          >
                                            Maintenance, Repair, & Overhaul
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink
                                            to="/technical-support"
                                            className={(navData) =>
                                              navData.isActive ? "active" : ""
                                            }
                                          >
                                            Technical Spport and Value Added Services
                                          </NavLink>
                                        </li>
                                      </ul>
                                    </li>
                                        <li className="menu-item-has-children products-menu">
  <Link to="/products">Products</Link>

   <ul className="sub-menu products-grid" id="product-grid">
    {[
      { name: "Flanges", link: "/flanges" },
      { name: "Fasteners", link: "/fasteners" },
      { name: "Stainless Steel Pipes", link: "/stainless-steel-pipes" },
      { name: "PVDF Pipe Fittings & Valves", link: "/pvdf-pipe-fittings-valves" },

      { name: "Carbon Steel Pipes", link: "/carbon-steel-pipes" },
      { name: "UPVC & CPVC", link: "/upvc-cpvc" },
      { name: "Butt-Weld Fittings", link: "/butt-weld-fittings" },
      { name: "Mud Pump And Spare Parts Assembly", link: "/mud-pump-spares" },

      { name: "Forged Fittings", link: "/forged-fittings" },
      { name: "Crank Shaft Assembly For Mud Pump", link: "/mud-pump-crank-shaft" },
      { name: "Valves", link: "/valves" },
      { name: "Pinion Shaft Assembly For Mud Pump", link: "/mud-pump-pinion-shaft" },

      { name: "Instrumentation Tube Fitting", link: "/instrumentation-tube-fitting" },
      { name: "Cast Iron Dww Pipe Fittings System", link: "/cast-iron-dww" },
      { name: "Transmission Spare Parts", link: "/transmission-spare-parts" },
      { name: "Hydraulic Cylinder Assembly For Mud Pump", link: "/hydraulic-cylinder-mud-pump" },

      { name: "Oil Field Clutch", link: "/oil-field-clutch" },
      { name: "Mud Pump Fluid End Parts", link: "/mud-pump-fluid-end" },
      { name: "PS Series Hydraulic Disc Brake", link: "/ps-hydraulic-disc-brake" },
      { name: "Mud Pump Crosshead Assembly", link: "/mud-pump-crosshead" },

      { name: "Drilling Rig And Spare Parts", link: "/drilling-rig-spares" },
      { name: "Pulsation Dampener Assembly For Mud Pump", link: "/pulsation-dampener" },
      { name: "BOP Hoisting Equipment", link: "/bop-hoisting-equipment" },
      { name: "Downhole Tool", link: "/downhole-tools" },

      { name: "Relief Valve For Mud Pump", link: "/mud-pump-relief-valve" },
      { name: "Oil Tube And Casing Pipe", link: "/oil-tube-casing-pipe" },
      { name: "Spray Lubrication System For Mud Pump", link: "/spray-lubrication-system" },
      { name: "Pressure Transmitters & Transducers Portfolio", link: "/pressure-transmitters" },

      { name: "Discharge Strainer And Auxiliary Piping For Mud Pump", link: "/discharge-strainer-auxiliary-piping" }
    ].map((item, index) => (
      <li key={index}>
        <NavLink
          to={item.link}
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>

  {/* Inline CSS */}
  <style>{`
    /* Parent positioning */
    .products-menu {
      position: relative;
    }

    /* Center & adjust width for 4 columns */
    #product-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0px 2px;
      width: 1100px;              /* Increased width to accommodate 4 columns */
      max-width: 90vw;           /* Don't exceed viewport width */
      padding: 5px 5px;
      position: absolute;
      left: 250%;
      transform: translateX(-50%);
      background: white;
      border: 1px solid #ddd;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      z-index: 1000;
      margin-top: 0px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s, visibility 0.3s;
    }

    /* Show the dropdown on hover */
    .products-menu:hover #product-grid {
      opacity: 1;
      visibility: visible;
    }

    .products-grid li {
      list-style: none;
      padding: 1px 0;
    }

    .products-grid li a {
      display: block;
      font-size: 13.5px;
      line-height: 0.7;
      white-space: normal;
      padding: 5px 8px;
      color: #333;
      text-decoration: none;
      transition: background-color 0.2s;
    }

    .products-grid li a:hover {
      background-color: #f5f5f5;
    }

    .products-grid li a.active {
      font-weight: bold;
      color: #007bff;
    }

    /* Tablet */
    @media (max-width: 1024px) {
      #product-grid {
        width: 95%;
        grid-template-columns: repeat(3, 1fr);
        left: 50%;
        transform: translateX(-50%);
      }
    }

    /* Mobile */
    @media (max-width: 768px) {
      #product-grid {
        position: static;
        transform: none;
        width: 100%;
        grid-template-columns: 1fr;
        margin-top: 0;
        padding: 10px;
        box-shadow: none;
        border: none;
        opacity: 1;
        visibility: visible;
      }
      
      .products-menu:hover #product-grid {
        opacity: 1;
        visibility: visible;
      }
    }
  `}</style>
</li>
                                        {/* <li className="menu-item-has-children">
                                          <Link to="#">Blog</Link>
                                          <ul className="sub-menu">
                                            <li>
                                              <NavLink
                                                to="/blog"
                                                className={(navData) =>
                                                  navData.isActive ? "active" : ""
                                                }
                                              >
                                                Blog
                                              </NavLink>
                                            </li>
                                            <li>
                                              <NavLink
                                                to="/blog-details"
                                                className={(navData) =>
                                                  navData.isActive ? "active" : ""
                                                }
                                              >
                                                Blog Details
                                              </NavLink>
                                            </li>
                                          </ul>
                                        </li> */}
                                        {/* <li className="menu-item-has-children">
                                          <Link to="#">Pages</Link>
                                          <ul className="sub-menu">
                                            <li>
                                              <NavLink
                                                to="/team"
                                                className={(navData) =>
                                                  navData.isActive ? "active" : ""
                                                }
                                              >
                                                Team Page
                                              </NavLink>
                                            </li>
                                            <li>
                                              <NavLink
                                                to="/team-details"
                                                className={(navData) =>
                                                  navData.isActive ? "active" : ""
                                                }
                                              >
                                                Team Details
                                              </NavLink>
                                            </li>
                                            <li>
                                              <NavLink
                                                to="/shop"
                                                className={(navData) =>
                                                  navData.isActive ? "active" : ""
                                                }
                                              >
                                                Shop Page
                                              </NavLink>
                                            </li>
                                            <li>
                                              <NavLink
                                                to="/shop-details"
                                                className={(navData) =>
                                                  navData.isActive ? "active" : ""
                                                }
                                              >
                                                Shop Details
                                              </NavLink>
                                            </li>
                                            <li>
                                              <NavLink
                                                to="/cart"
                                                className={(navData) =>
                                                  navData.isActive ? "active" : ""
                                                }
                                              >
                                                Cart
                                              </NavLink>
                                            </li>
                                            <li>
                                              <NavLink
                                                to="/checkout"
                                                className={(navData) =>
                                                  navData.isActive ? "active" : ""
                                                }
                                              >
                                                Checkout
                                              </NavLink>
                                            </li>
                                            <li>
                                              <NavLink
                                                to="/wishlist"
                                                className={(navData) =>
                                                  navData.isActive ? "active" : ""
                                                }
                                              >
                                                Wishlist
                                              </NavLink>
                                            </li>
                                          </ul>
                                        </li> */}
                                        <li>
                                          <NavLink
                                            to="/contact"
                                            className={(navData) =>
                                              navData.isActive ? "active" : ""
                                            }
                                          >
                                            Contact
                                          </NavLink>
                                        </li>
                                      </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button
                      type="button"
                      className="menu-toggle icon-btn"
                      onClick={mobileMenu}
                    >
                      <i className="fas fa-bars" />
                    </button>
                  </div>
                </div>
                {/* <div className="col-auto ms-auto d-xl-block d-none">
                  <div className="navbar-right-desc">
                    <img src="assets/img/icon/chat.svg" alt="Eram" />
                    <div className="navbar-right-desc-details">
                      <h6 className="title">Need help?</h6>
                      <Link className="link" to="tel:+2590256215">
                        (307) 555-0133
                      </Link>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="logo-bg" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-wrapper  ${active && "body-visible"}`}>
          <div className="mobile-menu-area">
            <div className="mobile-logo">
              <Link to="/">
                <img src="assets/img/ICON/14.PNG" alt="Eram" style={{height:'70px'}}/>
              </Link>
              <button className="menu-toggle" onClick={mobileMenu}>
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="mobile-menu">
              <ul id="offcanvas-navigation">
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">Home</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Home 01
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home-2"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Home 02
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home-3"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Home 03
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home-4"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Home 04
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home-5"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Home 05
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/home-6"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Home 06
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    About
                  </NavLink>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">Pages</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/team"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Team Page
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/team-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Team Details
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/shop"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Shop Page
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/shop-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Shop Details
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/cart"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Cart
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/checkout"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Checkout
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/wishlist"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Wishlist
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children products-menu">
  <Link to="/products">Products</Link>

   <ul className="sub-menu products-grid" id="product-grid">
    {[
      { name: "Flanges", link: "/flanges" },
      { name: "Fasteners", link: "/fasteners" },
      { name: "Stainless Steel Pipes", link: "/stainless-steel-pipes" },
      { name: "PVDF Pipe Fittings & Valves", link: "/pvdf-pipe-fittings-valves" },

      { name: "Carbon Steel Pipes", link: "/carbon-steel-pipes" },
      { name: "UPVC & CPVC", link: "/upvc-cpvc" },
      { name: "Butt-Weld Fittings", link: "/butt-weld-fittings" },
      { name: "Mud Pump And Spare Parts Assembly", link: "/mud-pump-spares" },

      { name: "Forged Fittings", link: "/forged-fittings" },
      { name: "Crank Shaft Assembly For Mud Pump", link: "/mud-pump-crank-shaft" },
      { name: "Valves", link: "/valves" },
      { name: "Pinion Shaft Assembly For Mud Pump", link: "/mud-pump-pinion-shaft" },

      { name: "Instrumentation Tube Fitting", link: "/instrumentation-tube-fitting" },
      { name: "Cast Iron Dww Pipe Fittings System", link: "/cast-iron-dww" },
      { name: "Transmission Spare Parts", link: "/transmission-spare-parts" },
      { name: "Hydraulic Cylinder Assembly For Mud Pump", link: "/hydraulic-cylinder-mud-pump" },

      { name: "Oil Field Clutch", link: "/oil-field-clutch" },
      { name: "Mud Pump Fluid End Parts", link: "/mud-pump-fluid-end" },
      { name: "PS Series Hydraulic Disc Brake", link: "/ps-hydraulic-disc-brake" },
      { name: "Mud Pump Crosshead Assembly", link: "/mud-pump-crosshead" },

      { name: "Drilling Rig And Spare Parts", link: "/drilling-rig-spares" },
      { name: "Pulsation Dampener Assembly For Mud Pump", link: "/pulsation-dampener" },
      { name: "BOP Hoisting Equipment", link: "/bop-hoisting-equipment" },
      { name: "Downhole Tool", link: "/downhole-tools" },

      { name: "Relief Valve For Mud Pump", link: "/mud-pump-relief-valve" },
      { name: "Oil Tube And Casing Pipe", link: "/oil-tube-casing-pipe" },
      { name: "Spray Lubrication System For Mud Pump", link: "/spray-lubrication-system" },
      { name: "Pressure Transmitters & Transducers Portfolio", link: "/pressure-transmitters" },

      { name: "Discharge Strainer And Auxiliary Piping For Mud Pump", link: "/discharge-strainer-auxiliary-piping" }
    ].map((item, index) => (
      <li key={index}>
        <NavLink
          to={item.link}
          className={(navData) => (navData.isActive ? "active" : "")}
        >
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
</li>
                <li className=" submenu-item-has-children">
                  <Link to="/service">Service</Link>
                  {/* <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/service"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Service
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/service-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Service Details
                      </NavLink>
                    </li>
                  </ul> */}
                </li>
                {/* <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">Shop</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/shop"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Shop
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/shop-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Shop Details
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/cart"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Cart
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/checkout"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Checkout
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/wishlist"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Wishlist
                      </NavLink>
                    </li>
                  </ul>
                </li> */}
                {/* <li className="menu-item-has-children submenu-item-has-children">
                  <Link to="#">Blog</Link>
                  <ul className="sub-menu submenu-class">
                    <li>
                      <NavLink
                        to="/blog"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog-details"
                        className={(navData) =>
                          navData.isActive ? "active" : ""
                        }
                      >
                        Blog Details
                      </NavLink>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <NavLink
                    to="/contact"
                    className={(navData) => (navData.isActive ? "active" : "")}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
