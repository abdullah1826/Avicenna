import React from 'react';
import "./talk.css";
import { useNavigate } from 'react-router-dom';

function Talktous({ data, newdata, page = null }) {
    const navigate = useNavigate();

    // Modify the title by changing the color of specific words
    const modifyTitle = (title) => {
        if (!title) return ''; // Safeguard against undefined title

        const words = title.split(' '); // Split title into words
        return words.map((word, index) => {
            // Change color for the third (index 2) and fourth (index 3) words
            if (index === 2 || index === 3) { // 0-based index
                return <span key={index} style={{ color: 'rgb(58, 242, 181)' }}>{word}</span>;
            }
            return <span key={index}>{word} </span>; // Add a space after each word
        });
    };

    return (
        <section style={{ margin: '0 auto', width: '90%', marginTop: "140px", height: '100%' }}>
            <div className='best-in-app'>
                {/* Render title and description safely */}
                {page === "blogRead" ? (
                    <div className='heading' style={{ width: data?.width || "100%", fontSize: "55px", color: 'white', fontWeight: 900 }}>
                        {modifyTitle(data?.title)}
                    </div>
                ) : (
                    <div style={{ width: data?.width || "100%" }} dangerouslySetInnerHTML={{ __html: data?.title || '' }} />
                )}
                
                <div dangerouslySetInnerHTML={{ __html: data?.description || '' }} />
               
                {/* Conditional button style based on newdata */}
                <button
                    style={{ marginTop: "20px" }}
                    className={newdata === "android" ? 'talk-btn2' : 'talk-btn'}
                    onClick={() => navigate('/contactus')}
                >
                    Talk to us
                </button>
            </div>
        </section>
    );
}

export default Talktous;
