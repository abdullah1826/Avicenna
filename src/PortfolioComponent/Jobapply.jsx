import React, { useEffect, useState } from "react";
import img1 from "../image/img1.png";
import "./jobapply.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FetchCareer } from "../Services/ApiServices";
import { IoMdClose } from "react-icons/io";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

function Jobapply() {
  const [career, setCareer] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const dataCallback = (data) => {
    setCareer(data);
  };

  useEffect(() => {
    FetchCareer(dataCallback);
    AOS.init({ duration: 1000 });
  }, []);

  const handleDialogOpen = (job) => {
    setSelectedJob(job);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedJob(null);
  };

  return (
    <div className="ServicesContainer" style={{ marginTop: "10px" }}>
      {career.map((job) => {
        const words = job.description.split(" ");
        const shouldTruncate = words.length > 40;
        const displayedDescription = words.slice(0, 30).join(" ");

        return (
          <div
            data-aos="fade-up"
            style={{ marginTop: "30px" }}
            className="main_data"
            key={job.id}
          >
            <div className="image1" style={{ width: "20%" }}>
              <img src={img1} alt={job.title} />
            </div>
            <div className="inner1">
              <div className="data1" style={{ width: "70%" }}>
                <h3>{job.title}</h3>
                <div className="three-btn">
                  {/* {job.buttons.map((btn, btnIndex) => (
                    <button key={btnIndex}>{btn}</button>
                  ))} */}
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: displayedDescription }}
                ></p>
                {shouldTruncate && (
                  <span
                    onClick={() => handleDialogOpen(job)}
                    style={{ color: "rgb(58, 237, 178)", cursor: "pointer" }}
                  >
                    ... Show More
                  </span>
                )}
              </div>
              <button
                style={{
                  width: "150px",
                  height: "55px",
                  fontSize: "13px",
                }}
                className="talk-btn new-btn"
              >
                Apply now
              </button>
            </div>
          </div>
        );
      })}

      {/* Dialog to show full job description */}
      <Dialog
        style={{ backgroundColor: "rgb(42, 46, 52,0.3)" }}
        open={openDialog}
        onClose={handleDialogClose}
      >
        {selectedJob && (
          <>
            <DialogContent
              className="main-cl"
              style={{
                backgroundColor: "rgb(42, 46, 52)",
                borderRadius: "20px",
              }}
            >
              <DialogActions>
                <IoMdClose
                  onClick={handleDialogClose} // Add the onClick event handler here
                  style={{
                    fontSize: "30px",
                    cursor: "pointer",
                    color: "rgb(58, 237, 178)",
                    position: "relative",
                    top: "-19px",
                    right: "-19px",
                  }}
                />
              </DialogActions>

              <img
                className="new-i"
                style={{
                  borderRadius: "55px", // Remove any border radius
                  width: "100%", // Make the image responsive
                  height: "300px", // Set the desired height
                }}
                src={img1}
                alt="qskjd"
              />
              <h3 style={{ color: "rgb(58, 237, 178)", paddingTop: "30px" }}>
                {selectedJob.title}
              </h3>
              <p
                style={{ color: "white", marginTop: "40px", width: "100%" }}
                dangerouslySetInnerHTML={{ __html: selectedJob.description }}
              ></p>
              <button
                style={{
                  width: "100%",
                  height: "55px",
                  fontSize: "23px",
                }}
                className="talk-btn new-btn"
              >
                Apply now
              </button>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
}

export default Jobapply;
