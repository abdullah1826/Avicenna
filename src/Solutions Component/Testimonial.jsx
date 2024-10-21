import React from "react";
import "../Solutions Component/testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import c1 from "../image/c1.png";
import c2 from "../image/c2.png";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const testimonials = [
  {
    img: c1,
    heading: "Marya Mendelena",
    para: "Vizpro offers its revolutionary app “Vizlink” designed to convert cash collections to digital, streamline operations.",
    date: "04 August, 2023",
    rating: 5, // Add initial rating
  },

  {
    img: c1,
    heading: "Alexa",
    para: "Their work exceeded our expectations! The team was responsive, professional, and delivered on time.",
    date: "04 August, 2023",
    rating: 5, // Add initial rating
  },
];

function Testimonial({ data }) {
  const [ratings, setRatings] = React.useState(
    testimonials.map((t) => t.rating)
  ); // Create an array to manage ratings

  const carouselSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: "20px",
    border: "2px solid grey",
    padding: "20px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "10px",
    width: "90%",
  };

  const insideContentStyle = {
    padding: "20px",
    width: "100%",
  };

  const handleRatingChange = (index, newValue) => {
    const newRatings = [...ratings]; // Create a copy of the current ratings
    newRatings[index] = newValue; // Update the rating for the specific testimonial
    setRatings(newRatings); // Update state with the new ratings
  };

  return (
    <div
      className="ServicesContainer"
      style={{ margin: "20px auto", width: "100%" }}
    >
      <div style={{ width: "90%", margin: "0px auto" }}>
        <h2 style={{ color: "white" }} className="heading">
          Client <span style={{ color: data?.color }}>Testimonials</span>
        </h2>
        <p
          style={{ width: "50%", color: "white", fontWeight: 100 }}
          className="paragraph"
        >
          For the past decade we have been creating high performance,
          feature-packed mobile applications for iOS & Android.
        </p>
      </div>

      <div className="main-testo">
        <Slider
          style={{ width: "90%", margin: "0px auto" }}
          {...carouselSettings}
        >
          {testimonials.map((testimonial, index) => (
            <div className="its" style={slideStyle} key={index}>
              <div className="inside-content" style={insideContentStyle}>
                <img
                  src={testimonial.img}
                  alt="Client"
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    marginBottom: "15px",
                  }}
                />
                <h2 style={{ marginBottom: "10px", color: data?.color }}>
                  {testimonial.heading}
                </h2>
                <p
                  className="ppp"
                  style={{
                    marginBottom: "20px",
                    color: "whitesmoke",
                    fontWeight: 100,
                  }}
                >
                  {testimonial.para}
                </p>
                <div
                  className="stardata"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ width: 200, display: "flex", alignItems: "center" }}
                  >
                    <Rating
                      name={`hover-feedback-${index}`} // Give a unique name for each rating
                      value={ratings[index]} // Use the individual rating
                      precision={0.5}
                      onChange={(event, newValue) => {
                        handleRatingChange(index, newValue); // Update specific rating
                      }}
                      emptyIcon={
                        <StarIcon
                          className="mystar"
                          style={{
                            opacity: 0.55,
                            fontSize: 25,
                            color: data?.color,
                          }}
                        />
                      } // Set size for empty stars
                      icon={
                        <StarIcon sx={{ color: data?.color, fontSize: 30 }} />
                      } // Set size for filled stars
                    />
                  </Box>

                  <p className="my-date" style={{ color: data?.color }}>
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
