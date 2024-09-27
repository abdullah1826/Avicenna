import React from 'react'

function Info() {
  return (
    <section style={{margin:'0px auto',width:'90%'}}>
        <div style={{ 
  border: '1px solid rgb(101, 102, 104)', 
  height: "180px", 
  borderRadius:"20px",
  background: 'rgb(44, 46, 54, 0.5)',
  display: 'flex',
  flexDirection: "column",
  justifyContent: "center"
}}>
  <div style={{
    paddingTop: "20px",
    color: 'white',
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    flexWrap: 'wrap' // allow wrapping if needed
  }}>
    <div style={{ width: '24%', textAlign: "center" }}>
      <h1 style={{ 
          fontSize: "65px", 
          color: 'white', 
          margin: "0", 
          lineHeight: "1" // reduces space between h1 and span
        }}>
        300<span style={{ color: 'rgb(174, 175, 177)', margin: "0", padding: "0" }}>+</span>
      </h1>
      <p style={{
        fontSize: "15px",
        color: 'rgb(174, 175, 177)',
        paddingRight:"10px"
      }}>Designer, Developer <br /> and Miracle Workers</p>
    </div>

    <div style={{ width: '24%', textAlign: "center" }}>
      <h1 style={{ 
        fontSize: "65px",
        color: 'white',  
        margin: "0", 
        lineHeight: "1"
      }}>
        500<span style={{ color: 'rgb(174, 175, 177)', margin: "0", padding: "0" }}>+</span>
      </h1>
      <p style={{
        fontSize: "15px",
        color: 'rgb(174, 175, 177)',
        paddingRight:"10px"
      }}>Satisfied Customer</p>
    </div>

    <div style={{ width: '24%', textAlign: "center" }}>
      <h1 style={{ 
          fontSize: "65px", 
          color: 'white',  
          margin: "0", 
          lineHeight: "1"
        }}>
        1000<span style={{ color: 'rgb(174, 175, 177)', margin: "0", padding: "0" }}>+</span>
      </h1>
      <p style={{
        fontSize: "15px",
        color: 'rgb(174, 175, 177)',
        paddingRight:"10px"
      }}>Delivered Projects</p>
    </div>

    <div style={{ width: '24%', textAlign: "center" }}>
      <h1 style={{ 
          fontSize: "65px", 
          color: 'white',  
          margin: "0", 
          lineHeight: "1"
        }}>
        15<span style={{ color: 'rgb(174, 175, 177)', margin: "0", padding: "0" }}>+</span>
      </h1>
      <p style={{
        fontSize: "15px",
        color: 'rgb(174, 175, 177)',
        paddingRight:"10px"

      }}>Years of Development <br />Experience</p>
    </div>
  </div>
</div>
    </section>
  )
}

export default Info