import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { MdArrowOutward } from "react-icons/md";
import "../Component/blog.css";
import { FetchBlogs } from "../Services/ApiServices";
import { format } from "date-fns";
import AOS from "aos";
import "aos/dist/aos.css";
function AllBlog() {
  const [blogData, setBlogData] = useState([]);

  const dataCallback = (data) => {
    // Assuming data is an array of blog posts
    setBlogData(data); // Set the blog data directly to the state
  };

  useEffect(() => {
    FetchBlogs(dataCallback);
    AOS.init({ duration: 2000 });
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate(); // Initialize navigate function

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Calculate styles based on window width
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch", // Equal height
    gap: "40px", // Space between cards
    margin: "0 auto",
    width: "100%",
  };

  const cardStyle1 = {
    background: "linear-gradient(to right, rgb(32, 35, 42), rgb(47, 49, 56))",
    border: "2px solid rgb(101, 102, 105)",
    overflow: "hidden",
    position: "relative",
    borderRadius: "34px",
    width: windowWidth > 768 ? "55%" : "100%", // Responsive width
    marginTop: "60px",
  };

  const cardStyle = {
    background: "linear-gradient(to right, rgb(32, 35, 42), rgb(47, 49, 56))",
    border: "2px solid rgb(101, 102, 105)",
    overflow: "hidden",
    position: "relative",
    borderRadius: "34px",
    height: "330px",
    width: "100%", // Responsive width for smaller screens
    marginTop: "60px",
  };

  const cardImageStyle = {
    width: "100%",
    objectFit: "cover",
    top: 0,
    borderBottomRightRadius: "20px",
    borderBottomLeftRadius: "20px",
  };

  const cardContentStyle = {
    width: "95%",
    marginTop: "20px",
    padding: "20px",
  };

  const cardTitleStyle = {
    margin: 0,
    color: "white",
    fontSize: windowWidth > 768 ? "30px" : "17px",
    fontWeight: 600,
    width: "70%",
  };

  const cardDescriptionStyle = {
    margin: "10px 0",
    color: "white",
    fontWeight: 100,
  };

  return (
    <div  style={{ margin: "0 auto", width: "90%", marginTop: "120px" }} className="firstclass">
      <div className="blog-main">
        <h2 style={{ color: "white", fontSize: "55px", fontWeight: 900 }}>
          Latest From{" "}
          <span style={{ color: "rgb(58, 237, 178)" }}> Our Blogs</span>
        </h2>
        <p
          style={{
            color: "white",
            fontSize: "20px",
            width: "80%",
            wordSpacing: "1px",
            letterSpacing: "0",
            fontWeight: 300,
          }}
        >
          Discover the most recent blogs about Avicenna Enterprise Solution
          here.
        </p>
      </div>

      <section className="blog-sec" style={containerStyle}>
        {blogData.map((item, index) => {
          if (index % 3 === 0) {
            return (
              <div
                data-aos="zoom-in"
                key={item.id}
                style={{ ...cardStyle1, flex: "1 1 60%" }}
              >
                <img
                  className="blog-pic"
                  loading="lazy"
                  style={{ ...cardImageStyle }}
                  src={item?.image}
                  alt={`Blog ${item.id}`}
                />
                <div style={cardContentStyle}>
                  <h2 style={cardTitleStyle}>{item.title}</h2>
                  <p
                    className="main-para-main"
                    style={cardDescriptionStyle}
                    dangerouslySetInnerHTML={{
                      __html:
                        item?.description?.split(" ").slice(0, 70).join(" ") +
                        (item?.description.split(" ").length > 30 ? "..." : ""),
                    }}
                  />
                  <p style={{ color: "white" }}>
                    {format(new Date(item.created_at), "MMMM dd, yyyy")}
                  </p>
                  <div className="butn">
                    <MdArrowOutward
                      style={{ fontSize: "40px" }}
                      onClick={() => {
                        scrollToTop();
                        navigate("/readBlogs", { state: item });
                      }} // Navigate to the respective route with item as state
                    />
                  </div>
                </div>
              </div>
            );
          } else if (index % 3 === 1) {
            // Start the wrapper for the right-side elements
            return (
              <div
                data-aos="zoom-in"
                key={`wrapper-${item.id}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "1 1 35%",
                }}
              >
                <div style={{ ...cardStyle, height: "50%" }}>
                  <img
                    className="my-bp"
                    loading="lazy"
                    style={{ ...cardImageStyle }}
                    src={item.image}
                    alt={`Blog ${item.id}`}
                  />
                  <div style={cardContentStyle}>
                    <h2 style={{ ...cardTitleStyle, fontSize: "17px" }}>
                      {item.title}
                    </h2>
                    <p
                      className="main-para-main"
                      style={cardDescriptionStyle}
                      dangerouslySetInnerHTML={{
                        __html:
                          item?.description?.split(" ").slice(0, 30).join(" ") +
                          (item?.description.split(" ").length > 30
                            ? "..."
                            : ""),
                      }}
                    />
                    <p style={{ color: "white" }}>
                      {format(new Date(item.created_at), "MMMM dd, yyyy")}
                    </p>
                    <div className="butn1">
                      <MdArrowOutward
                        style={{ fontSize: "25px" }}
                        onClick={() => {
                          scrollToTop();
                          navigate("/readBlogs", { state: item });
                        }} // Navigate to the respective route with item as state
                      />
                    </div>
                  </div>
                </div>

                {blogData[index + 1] && (
                  <div
                    data-aos="zoom-in"
                    key={blogData[index + 1].id}
                    style={{ ...cardStyle, height: "50%" }}
                  >
                    <img
                      className="my-bp"
                      loading="lazy"
                      style={{ ...cardImageStyle, height: "180px" }}
                      src={blogData[index + 1].image}
                      alt={`Blog ${blogData[index + 1].id}`}
                    />
                    <div style={cardContentStyle}>
                      <h2 style={{ ...cardTitleStyle, fontSize: "17px" }}>
                        {blogData[index + 1].title}
                      </h2>
                      <p
                        className="main-para-main"
                        style={{ ...cardDescriptionStyle, fontWeight: 100 }}
                        dangerouslySetInnerHTML={{
                          __html:
                            blogData[index + 1]?.description
                              ?.split(" ")
                              .slice(0, 20)
                              .join(" ") +
                            (blogData[index + 1]?.description.split(" ")
                              .length > 20
                              ? "..."
                              : ""),
                        }}
                      />
                      <p style={{ color: "white" }}>
                        {format(new Date(item.created_at), "MMMM dd, yyyy")}
                      </p>

                      <div className="butn1">
                        <MdArrowOutward
                          style={{ fontSize: "25px" }}
                          onClick={() => {
                            scrollToTop();
                            navigate("/readBlogs", {
                              state: blogData[index + 1],
                            });
                          }} // Navigate to the respective route with the next blog item as state
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
      </section>
    </div>
  );
}

export default AllBlog;
