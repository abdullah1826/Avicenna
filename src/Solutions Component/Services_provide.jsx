import React, { useState, useEffect } from "react";
import "./services_provide.css";
import { LuMoveRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { FetchServices } from "../Services/ApiServices";
import AOS from "aos";
import "aos/dist/aos.css";
function Services_provide() {
  const [services, setServices] = useState([]);

  const dataCallback = (data) => {
    setServices(data);
  };
  useEffect(() => {
    FetchServices(dataCallback);
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate(); // useNavigate hook for navigation

  const scrollToTop = () => {
    const targetScrollY = 0; // Target scroll position
    const currentScrollY = window.scrollY; // Current scroll position
    const distance = currentScrollY - targetScrollY; // Distance to scroll
    const duration = 500; // Duration of the scroll (in ms)
    const startTime = performance.now(); // Get the current time

    const scrollStep = (timestamp) => {
      const elapsed = timestamp - startTime; // Calculate how much time has passed
      const progress = Math.min(elapsed / duration, 1); // Calculate progress (0 to 1)

      // Easing function (easeOutCubic)
      const easeOutCubic = (t) => {
        return 1 - Math.pow(1 - t, 3);
      };

      const scrollY = currentScrollY - distance * easeOutCubic(progress); // Calculate the new scroll position
      window.scrollTo(0, scrollY); // Scroll to the new position

      if (progress < 1) {
        requestAnimationFrame(scrollStep); // Continue the animation if not finished
      }
    };

    requestAnimationFrame(scrollStep); // Start the scrolling animation
  };

  return (
    <div className="ServicesContainer">
      <div className=" s-p">
        <h2 className="heading">
          Services <span className="my-span">We Provide</span>
        </h2>
        <p className="paragraph">
          For the past decade, we have been creating high-performance,
          feature-packed <br className="br" /> mobile applications for iOS &
          Android.
        </p>
      </div>
      <section
        data-aos="fade-up"
        className="container section-data"
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        {services?.map((item) => (
          <div key={item?.id} className="cards">
            <div className="card-data">
              <img
                loading="lazy"
                className="card-img"
                src={
                  "https://avicennaenterprise.com/mega_bot/assets/" +
                  item?.image
                }
                alt={item.title}
              />
              <h2 className="card-head">{item?.title}</h2>
              <p
                className="card-para"
                style={{
                  height: 170,
                  overflow:
                    item?.description?.length > 0 ? "hidden" : "visible",
                  textOverflow: "ellipsis", // This ensures ellipsis is shown when overflow is hidden
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: item?.description?.length > 0 ? 5 : "none", // Adjust the line clamp as needed
                }}
              >
                {item?.description}
              </p>
              <button
                onClick={() => {
                  const titleLower = item.title.trim().toLowerCase(); // Convert title to lowercase and trim

                  if (titleLower === "mobile application") {
                    scrollToTop();
                    navigate("/services");
                  } else if (titleLower === "website development") {
                    scrollToTop();
                    navigate("/webservices");
                  } else if (titleLower === "backend development") {
                    scrollToTop();
                    navigate("/webservices");
                  }
                }}
                className="card-button"
              >
                <LuMoveRight /> Read more
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Services_provide;
