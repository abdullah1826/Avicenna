import React from 'react';
import "../ContactComponent/loc.css"
import { MdLocationOn } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { MdCall } from "react-icons/md";


function Location() {
  return (
    <div className='ServicesContainer'>
      <h3 className='heading' style={{color:'rgb(58, 242, 181)',fontSize:"35px",fontWeight:"700"}}>
        Get In <span style={{color:"white"}}>Touch</span>
      </h3>
      <p className='paragraph' style={{width:"70%",fontWeight:100,color:"white"}}>
        For the past decade, we have been creating high-performance, feature-packed mobile applications for iOS & Android. As an expert in mobile application development services, Folio3 can create the right app that will meet all your business and industry needs.
      </p>

      <div className='LocationMain'>
        <div className="leftdiv">
          <div className='icon-data'>
            <div style={{ display:'flex',justifyContent:"center",alignItems:'center',width:'80px',borderRadius:"10px",border:'1px solid grey',height:'70px',background:`linear-gradient(90.28deg, rgba(98, 98, 98, 0.25) 0%, rgba(168, 168, 168, 0.25) 100%)` }}>
              <MdLocationOn style={{color:"rgb(58, 242, 181)",fontSize:"30px"}}/>
            </div>
            <div style={{width:"76%"}}>
              <h5 style={{fontWeight:900,fontSize:'25px',color:"white"}}>Location</h5>
              <p style={{fontSize:"19px",fontWeight:100,width:'100%',color:"white"}}>79 P Block Rd, Block P Phase 2 Johar Town, Lahore</p>
            </div>
          </div>

          <div style={{paddingTop:"20px"}} className='icon-data'>
            <div style={{ display:'flex',justifyContent:"center",alignItems:'center',width:'80px',borderRadius:"10px",border:'1px solid grey',height:'70px',background:`linear-gradient(90.28deg, rgba(98, 98, 98, 0.25) 0%, rgba(168, 168, 168, 0.25) 100%)` }}>
              <IoMdMail style={{color:"rgb(58, 242, 181)",fontSize:"30px"}}/>
            </div>
            <div className='for-h5'  style={{width:"50%"}}>
              <h5  style={{fontWeight:900,fontSize:'25px',color:"white"}}>Email us</h5>
              <p style={{fontSize:"19px",fontWeight:100,width:'100%',color:"white"}}>info@avicennaenterprise.com</p>
            </div>
          </div>

          <div style={{paddingTop:"20px"}} className='icon-data'>
            <div style={{ display:'flex',justifyContent:"center",alignItems:'center',width:'80px',borderRadius:"10px",border:'1px solid grey',height:'70px',background:`linear-gradient(90.28deg, rgba(98, 98, 98, 0.25) 0%, rgba(168, 168, 168, 0.25) 100%)` }}>
              <MdCall style={{color:"rgb(58, 242, 181)",fontSize:"30px"}}/>
            </div>
            <div  style={{width:"61%"}}>
              <h5  style={{fontWeight:900,fontSize:'25px',color:"white"}}>Call us</h5>
              <p className='thip' style={{fontSize:"19px",color:"white",fontWeight:100,width:'100%'}}>+92 320 000 1511</p>
            </div>
          </div>
        </div>

        <div className="rightdiv">
          <iframe
     
     loading='lazy'
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13605.463625641337!2d74.2695761!3d31.4650163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905a6f333bf77%3A0x7212167063b40d65!2s79%20P%20Block%20Rd%2C%20Block%20P%20Phase%202%2C%20Johar%20Town%2C%20Lahore%2C%20Punjab%2054000!5e0!3m2!1sen!2s!4v1694887920565!5m2!1sen!2s"
            width="100%"
            height="320"
            style={{ border: "0", borderRadius: "30px" }}
            allowFullScreen=""
           
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;
