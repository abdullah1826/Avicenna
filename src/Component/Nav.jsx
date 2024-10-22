import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import logo1 from "../image/logo1.png"; // Import your logo
import "./nav.css";

function Nav({ navbar, data }) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [isFixed, setIsFixed] = useState(false);
  const navHeight = 100;
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleScroll = () => {
    if (window.scrollY > 180) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (path) => {
    navigate(`/${path}`);
    setOpen(false);

    const scrollToTop = () => {
      const targetScrollY = 0;
      const currentScrollY = window.scrollY;
      const distance = currentScrollY - targetScrollY;
      const duration = 500;
      const startTime = performance.now();

      const scrollStep = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
        const scrollY = currentScrollY - distance * easeOutCubic(progress);
        window.scrollTo(0, scrollY);

        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        }
      };

      requestAnimationFrame(scrollStep);
    };

    scrollToTop();
  };

  const DrawerList = (
    <Box
      sx={{
        width: "200px",
        background: "#111419",
        height: "100%",
        color: "white",
        borderRight: "1px solid transparent",
        borderLeft: "1px solid transparent",
        borderImageSource: `
          linear-gradient(90deg, rgba(100, 101, 103, 0.1) 0%, rgba(100, 101, 103, 1) 50%, rgba(100, 101, 103, 0.1) 100%)
        `,
        borderImageSlice: 1,
      }}
      role="presentation"
    >
      <Box sx={{ padding: "16px", display: "flex", justifyContent: "center" }}>
        <img
          src={logo1}
          alt="Logo"
          style={{ width: "100%", maxWidth: "150px", height: "auto" }}
        />
      </Box>
      <List>
        {[
          "Solutions",
          "Services",
          "Portfolio",
          "Blogs",
          "Careers",
          "Contact Us",
        ].map((text) => {
          const isServices = text === "Services";
          const isAndroidServicesPage =
            location.pathname === "/androidservices" && navbar === "android";
          const isActive =
            (text === "Solutions" &&
              (location.pathname === "/" ||
                location.pathname === "/solutions")) ||
            location.pathname.includes(text.toLowerCase().replace(" ", ""));

          // Set initial active color for "Services" to rgb(58, 237, 178) and update with data?.color if available
          const activeColor =
            isServices && !data?.color
              ? "rgb(58, 237, 178)"
              : data?.color || "rgb(58, 237, 178)";

          return (
            <ListItem className="list-i" key={text} disablePadding>
              <ListItemButton
                onClick={() =>
                  handleNavigation(text.toLowerCase().replace(" ", ""))
                }
                className={isAndroidServicesPage ? "hvr2" : "hvr"}
                sx={{
                  color:
                    isServices && isAndroidServicesPage
                      ? "rgb(91, 126, 29)"
                      : isActive
                      ? activeColor // Set the color based on whether it's Services or not
                      : "white",
                  padding: "5px 10px",
                  "&:hover": {
                    color: activeColor, // Hover color for active items
                  },
                }}
              >
                <span
                  className={`dot ${
                    isServices && isAndroidServicesPage
                      ? "active2"
                      : isActive
                      ? "active"
                      : ""
                  }`}
                  style={{
                    backgroundColor: isActive ? activeColor : "transparent", // Dot color visible only when active
                    display: "inline-block",
                    height: "7px",
                    width: "7px",
                    borderRadius: "50%",
                    marginRight: "8px",
                    marginTop: "8px",
                    visibility: isActive ? "visible" : "hidden", // Ensure the dot is only visible when active
                  }}
                />
                <ListItemText sx={{ fontSize: "1rem" }} primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <Box sx={{ padding: "16px", display: "flex", justifyContent: "center" }}>
        <button
          style={{
            fontSize: "12px",
            marginLeft: "0px",
            borderColor: data?.color,
            color: isHovered ? "black" : data?.color, // Use data?.color for text
            backgroundColor: isHovered ? data?.color : "transparent", // Use data?.color for background on hover
          }}
          className="main-btn hvr active"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Start Your Project
        </button>
      </Box>
    </Box>
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{}}>
      {isMobile && (
        <MenuSharpIcon
          style={{
            fontSize: "20px",
            zIndex: "2",
          }}
          className="drawer-toggle"
          onClick={toggleDrawer(true)}
        />
      )}

      {!isMobile && (
        <div style={{ height: `${navHeight}px`, marginTop: "70px" }}>
          <nav
            className={isFixed ? "fixed-nav" : ""}
            style={{
              width: "100%",
              top: isFixed ? "-71px" : "0px",
              position: isFixed ? "fixed" : "relative",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, rgba(9, 14, 23, 0.6), transparent 20%)," +
                  "linear-gradient(90deg, transparent 70%, rgba(9, 14, 23, 0.6))," +
                  "linear-gradient(90deg, rgba(98, 98, 98, 0.25) 0%, rgba(168, 168, 168, 0.25) 100%)," +
                  "linear-gradient(90deg, #14171C 0%, rgba(20, 23, 28, 0) 29.84%)," +
                  "linear-gradient(90deg, rgba(16, 18, 24, 0) 61.08%, #0E1016 100%)",
                borderTop: "1px solid transparent",
                borderBottom: "1px solid transparent",
                borderImageSource: `
              linear-gradient(90deg, rgba(100, 101, 103, 0.1) 0%, rgba(100, 101, 103, 1) 50%, rgba(100, 101, 103, 0.1) 100%)
            `,
                borderImageSlice: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  justifyContent: "center",
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                }}
              >
                {[
                  "Solutions",
                  "Services",
                  "Portfolio",
                  "Blogs",
                  "Careers",
                  "Contact Us",
                ].map((text, index) => {
                  const isServices = text === "Services";
                  const isAndroidServicesPage =
                    location.pathname === "/androidservices" &&
                    navbar === "android";
                  const isActive =
                    (text === "Solutions" &&
                      (location.pathname === "/" ||
                        location.pathname === "/solutions")) ||
                    location.pathname.includes(
                      text.toLowerCase().replace(" ", "")
                    );

                  // Set the active color based on your requirements
                  const activeColor =
                    isServices && !data?.color
                      ? "rgb(58, 237, 178)"
                      : data?.color || "rgb(58, 237, 178)";

                  // Determine the color for hover state
                  const currentColor =
                    isActive || hoveredIndex === index ? activeColor : "white";

                  return (
                    <li
                      key={text}
                      className={`
                    ${isAndroidServicesPage ? "hvr2" : "hvr"}
                    ${isServices && isAndroidServicesPage ? "active2" : ""}
                    ${isActive && !isAndroidServicesPage ? "active" : ""}
                  `}
                      onClick={() =>
                        handleNavigation(text.toLowerCase().replace(" ", ""))
                      }
                      onMouseEnter={() => setHoveredIndex(index)} // Set the hovered index
                      onMouseLeave={() => setHoveredIndex(null)} // Clear the hovered index
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: currentColor, // Use currentColor for text
                        transition: "color 0.3s ease", // Smooth transition for color change
                      }}
                    >
                      <span
                        className={`dot ${isActive ? "active" : ""}`}
                        style={{
                          backgroundColor: currentColor, // Dot color based on active or hover state
                          display: "inline-block",
                          height: "7px",
                          width: "7px",
                          borderRadius: "50%",
                          marginRight: "8px",
                          marginTop: "8px",
                          visibility:
                            isActive || hoveredIndex === index
                              ? "visible"
                              : "hidden", // Show dot if active or hovered
                        }}
                      />
                      {text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      )}

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Nav;
