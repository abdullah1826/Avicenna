import React from 'react'
import "./talk.css"
function Talktous({data,newdata}) {
  console.log(data)
  return (
    <section  style={{margin:'0px auto',width:'90%',marginTop:"140px",height:'100%'}}>
        <div className='best-in-app'>


        <div style={{width: data.width}} dangerouslySetInnerHTML={{ __html: data.title }} />

<div dangerouslySetInnerHTML={{ __html: data.description }} />

<button style={{marginTop:"20px"}}   className= {newdata=="android"? 'talk-btn2':'talk-btn'}>Talk to us</button>
</div>

    </section>
  )
}

export default Talktous