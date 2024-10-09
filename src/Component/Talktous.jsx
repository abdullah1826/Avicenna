import React from 'react';
import "./talk.css";

function Talktous({ data, newdata, page = null }) {
    console.log(page); // Debugging to check the structure of data

    const modifyTitle = (title) => {
      const words = title.split(' '); // Split title into words
      return words.map((word, index) => {
          // Change color for the fourth (index 3) and fifth (index 4) words
          if (index === 2 || index === 3) { // 0-based index
              return `<span style="color: rgb(58, 242, 181);">${word}</span>`;
          }
          return word;
      }).join(' '); // Join the words back into a single string
  };

    return (
        <section style={{ margin: '0px auto', width: '90%', marginTop: "140px", height: '100%' }}>
            <div className='best-in-app'>
                {/* Render title and description safely */}
                {page == "blogRead" ? (
                <div style={{ width: data.width, fontSize: "55px", width: "60%", color: 'white',fontWeight:900 }} dangerouslySetInnerHTML={{ __html: modifyTitle(data.title) }} />
                ) : 
                (  <div style={{ width: data.width }} dangerouslySetInnerHTML={{ __html: data.title }} /> )}
                
                <div dangerouslySetInnerHTML={{ __html: data.description }} />
               
                {/* Conditional button style based on newdata */}
                <button style={{ marginTop: "20px" }} className={newdata === "android" ? 'talk-btn2' : 'talk-btn'}>
                    Talk to us
                </button>
            </div>
        </section>
    );
}

export default Talktous;
