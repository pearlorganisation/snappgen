import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import HeaderLink from "./HeaderLink";
import SubDropdown from "../../SubDropdown/SubDropdown";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => {
  const location = useLocation();
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleCss, setToggleCss] = useState("");
  const [isDatingPage, setIsDatingPage] = useState(false);
  const [showMobDropdown, setShowMobDropdown] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (
      location.pathname === "/dating" ||
      location.pathname === "/dating-ai-headshots" ||
      location.pathname === "/dating-ai-headshot-generator"
    ) {
      setIsDatingPage(true);
      setToggleCss("bg-gradient-to-b from-[#c32352] to-[#7f0228]");
    } else {
      setIsDatingPage(false);
      setToggleCss("bg-gradient-to-r from-[#02AFDC] to-[#2563EB] ");
    }
  }, [location]);

  //state for window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect for window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Call handleResize once to set initial class
    handleResize();
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let offsetY = 50;

  useEffect(() => {
    const handleNavBar = () => {
      let currScroll = window.scrollY;
      if (currScroll > offsetY) {
        setToggleNav(true);
      } else {
        setToggleNav(false);
      }
    };

    window.addEventListener("scroll", handleNavBar);
    handleNavBar();

    return () => {
      window.removeEventListener("scroll", handleNavBar);
    };
  }, []);

  const navData = [
    {
      name: "How it works",
      path: "/how-it-works",
      showDropdown: false,
    },
    {
      name: "Headshots",
      paths: [
        {
          name: "Corporate Headshots",
          path: "/corporate-ai-headshots",
        },
        {
          name: "Doctor Headshots",
          path: "/doctor-ai-headshots",
        },
        {
          name: "Lawyer Headshots",
          path: "/lawyer-ai-headshots",
        },
        {
          name: "Sales Headshots",
          path: "/salesman-ai-headshots",
        },
        {
          name: "Students Headshots",
          path: "/students-ai-headshots",
        },
        {
          name: "Teacher Headshots",
          path: "/teacher-ai-headshots",
        },
        {
          name: "Free Headshots",
          path: "/free-ai-headshot-generator",
        },
      ],
      showDropdown: true,
    },
    {
      name: "Dating",
      path: "/dating-ai-headshot-generator",
      showDropdown: false,
    },
    {
      name: "Company",
      paths: [
        {
          name: "About Us",
          path: "/about-us",
        },
        {
          name: "Privacy Policy",
          path: "/privacy-policy",
        },
        {
          name: "Terms & Conditions",
          path: "/terms-and-conditions",
        },
        {
          name: "Cancellation & Refunds",
          path: "/cancellation-and-refunds",
        },
        {
          name: "Contact Us",
          path: "/contact-us",
        },
      ],
      showDropdown: true,
    },
    {
      name: "Blogs",
      path: "/blogs",
      showDropdown: false,
    },
    {
      name: "Reviews",
      path: "/reviews",
      showDropdown: false,
    },
  ];

  // country selection
  const countries = [
    // European countries first
    {
      countryImg: "https://flagcdn.com/w160/se.png",
      countryName: "Sweden",
    },
    {
      countryImg: "https://flagcdn.com/w160/dk.png",
      countryName: "Denmark",
    },
    {
      countryImg: "https://flagcdn.com/w160/gb.png",
      countryName: "United Kingdom",
    },
    {
      countryImg: "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1739351397/Flag_of_the_Netherlands.svg_a0wwqk.png",
      countryName: "Netherlands",
    },
    {
      countryImg: "https://flagcdn.com/w160/ch.png",
      countryName: "Switzerland",
    },
    {
      countryImg: "https://flagcdn.com/w160/no.png",
      countryName: "Norway",
    },
    {
      countryImg: "https://flagcdn.com/w160/fi.png",
      countryName: "Finland",
    },
    {
      countryImg: "https://flagcdn.com/w160/as.png",
      countryName: "Austria",
    },
    {
      countryImg: "https://flagcdn.com/w160/de.png",
      countryName: "Germany",
    },

    // Non-European countries
    {
      countryImg: "https://flagcdn.com/w160/us.png",
      countryName: "United States",
    },
    {
      countryImg: "https://flagcdn.com/w160/ua.png",
      countryName: "Canada",
    },
    {
      countryImg: "https://flagcdn.com/w160/nz.png",
      countryName: "New Zealand",
    },
    {
      countryImg: "https://flagcdn.com/w160/au.png",
      countryName: "Australia",
    },
    {
      countryImg: "https://flagcdn.com/w160/in.png",
      countryName: "India",
    },
    {
      countryImg: "https://flagcdn.com/w160/ae.png",
      countryName: "Dubai",
    },
    {
      countryImg:
        "https://res.cloudinary.com/dj2fvzfmm/image/upload/v1729681906/Screenshot_2024-10-23_164133_gthtvx.png",
      countryName: "Japan",
    },
    {
      countryImg: "https://flagcdn.com/w160/kr.png",
      countryName: "South Korea",
    },
  ];

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(JSON.parse(storedCountry));
    } else {
      localStorage.setItem(
        "selectedCountry",
        JSON.stringify({
          countryImg: "https://flagcdn.com/w160/se.png",
          countryName: "Sweden",
        },)
      );
      setSelectedCountry({
        countryImg: "https://flagcdn.com/w160/se.png",
        countryName: "Sweden",
      },);
    }
  }, []);


  const handleSelect = (country) => {
    setSelectedCountry(country);
    localStorage.setItem("selectedCountry", JSON.stringify(country));
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return (
    <nav
      className={`fixed w-screen ${toggleNav ? toggleCss : ""
        } py-3 px-5 sm:px-8 sm:py-1 2xl:px-[100px] h-fit border-[#737373] border-b-[2px] z-[99]  `}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <div className="flex flex-col justify-center">
          <Link to="/" aria-label="Home page link in header">
            <LazyLoadImage
              src="https://res.cloudinary.com/dj2fvzfmm/image/upload/v1738921221/Your_paragraph_text_-_2025-02-07T150932.516_t2m5p2.webp"
              alt=""
              className="w-[140px] sm:w-[180px] max-w-[180px]"
              height={"33px"}
              width={"180px"}
            />
          </Link>
        </div>

        <div className="xl:hidden flex gap-2 items-center">
          {/* country selection */}

          <div
            className="flex flex-col justify-center relative"
            ref={dropdownRef}
          >
            <button
              className="oswald text-[#f1f1f1] text-[18px] font-medium p-2 text-left bg-transparent"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedCountry ? (
                <div className="flex gap-2 items-center">
                  <img
                    src={selectedCountry.countryImg}
                    alt={`${selectedCountry.countryName} flag`}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  {/* <span className="oswald text-sm font-semibold">{selectedCountry.countryName}</span> */}
                </div>
              ) : (
                "Select a country"
              )}
            </button>
            {isOpen && (
              <div className="absolute z-10 w-[200px] mt-1 top-full left-1/2 -translate-x-1/2 bg-white border border-gray-300 rounded-md shadow-lg transition duration-300">
                <ul className="max-h-96 overflow-auto">
                  {countries.map((country) => (
                    <li
                      key={country.countryName}
                      className="flex gap-2 items-center p-2 cursor-pointer hover:bg-gray-100"
                      onTouchEnd={(e) => {
                        e.stopPropagation();
                        handleSelect(country);
                      }}
                    >
                      <img
                        src={country.countryImg}
                        alt={`${country.countryName} flag`}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="oswald text-sm font-semibold">
                        {country.countryName}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg"
            onClick={() => setShowMobDropdown(!showMobDropdown)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>
          <div
            className={`${showMobDropdown ? "" : "hidden"
              } absolute top-[102%] right-0 w-fit bg-[#2f2f31] flex flex-col shadow-[0_2px_2px#121212]`}
          >
            {navData &&
              navData.map((item, idx) => (
                <div key={`navData${idx}`}>
                  {item.showDropdown ? (
                    <SubDropdown
                      data={item}
                      setShowMobDropdown={setShowMobDropdown}
                    />
                  ) : (
                    <Link
                      to={item.path}
                      className="w-full flex justify-end hover:bg-gradient-to-r hover:from-[#02AFDC] hover:to-[#2563EB] text-[#ffffff] text-base py-2 px-3 hover:bg-blue-600 hover:text-white transition duration-300 "
                      onClick={() => setShowMobDropdown(false)}
                    >
                      <span className="w-[120px] text-right">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
          </div>
        </div>

        <div className="xl:flex flex-row gap-0 md:gap-2 hidden ">
          {navData.map((item, idx) => (
            <HeaderLink
              key={`header${idx}`}
              data={item}
              showDropdown={item?.showDropdown}
            />
          ))}

          {/* country selection */}

          <div
            className="flex flex-col justify-center relative"
            ref={dropdownRef}
          >
            <button
              className="oswald text-[#f1f1f1] text-[18px] font-medium p-2 text-left bg-transparent"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedCountry ? (
                <div className="flex gap-2 items-center">
                  <img
                    src={selectedCountry.countryImg}
                    alt={`${selectedCountry.countryName} flag`}
                    className="w-10 h-10 rounded-full object-fit object-cover"
                  />

                  {/* <span className="oswald text-sm font-semibold">{selectedCountry.countryName}</span> */}
                </div>
              ) : (
                "Select a country"
              )}
            </button>
            {isOpen && (
              <div className="absolute z-10 w-[200px] mt-1 top-full left-1/2 -translate-x-1/2 bg-white border border-gray-300 rounded-md shadow-lg transition duration-300">
                <ul className="max-h-96 overflow-auto">
                  {countries.map((country) => (
                    <li
                      key={country.countryName}
                      className="flex gap-2 items-center p-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSelect(country)}
                    >
                      <img
                        src={country.countryImg}
                        alt={`${country.countryName} flag`}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="oswald text-sm font-semibold">
                        {country.countryName}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* button */}
          <div className="h-full flex flex-col justify-center py-3">
            <Link
              to={`/${isDatingPage ? "dating-ai-headshots" : "corporate-ai-headshots"
                }`}
              className={`hover:squeezyBtn px-5 py-4 ${toggleNav
                ? `${isDatingPage
                  ? "shadow-[0_1px_2px_0_#131313] bg-gradient-to-b from-[#c91a4f] to-[#8a0930] hover:from-[#bb2c57] hover:to-[#861436]"
                  : "bg-[#224cc2] shadow-md hover:bg-[#1d2838]"
                }`
                : `${isDatingPage
                  ? "bg-gradient-to-b from-[#e73e71] to-[#af1040] hover:from-[#bb2c57] hover:to-[#861436]"
                  : "bg-[#224cc2] hover:bg-[#1d2838]"
                }`
                } hover:shadow-[0_0_0_1px_#babcbf80]  rounded-xl text-[#ffffff] text-[15px] font-medium transition duration-[0.6s]`}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
