import React from 'react';
import logo1 from '../image/logo1.png';
import Talktous from '../Component/Talktous';
import Nav from '../Component/Nav';
import "../Pages/Main.css";


export default function Hero({ data, dataa, newdata, page }) {
    console.log('Page:', page);
    console.log('Data:', data);
    console.log('DataA:', dataa);
    console.log('NewData:', newdata);

    return (
        <div
            className='Heros'
            style={{
                width: '100%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                zIndex: 10,
                paddingBottom: '20px',
                backgroundImage: `url(${data?.imageUrl})`,
            }}
        >
            <div className='header-wrap' style={{ width: '90%', margin: '0px auto', paddingTop: "50px" }}>
                <header className='header'>
                    <img  src={logo1} alt="Avicenna" />
                    <div className='b-f' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "20px" }}>
                        <h3 style={{ color: 'white' }}>+92 320 0001511</h3>
                        <button className={newdata === "android" ? "main-btn2" : "main-btn"}>
                            Start Your Project
                        </button>
                    </div>
                </header>
            </div>

            <Nav navbar={"android"} />
            <>
           
                <Talktous data={data} newdata={newdata} dataa={dataa} page = {page === "read" ? "blogRead" : null} />
           
            </>
        </div>
    );
}
