import React, { useState ,useEffect} from 'react';
import logo1 from '../image/logo1.png';
import Talktous from '../Component/Talktous';
import Nav from '../Component/Nav';
import "../Pages/Main.css";
import {fetchData} from "../Services/ApiServices";


export default function Hero({ data, dataa, newdata, page ,iosd}) {
    console.log('Page:', page);
    console.log('Data:', data);
    console.log('DataA:', dataa);
    console.log('NewData:', newdata);
    let [homeData, setHomeData] = useState({
        image: "",
        phone: "",
    });

    const dataCallback = (data) => {
        setHomeData(
            {
                image: data?.image,
                phone: data?.phone,
            }
        );
    }
    useEffect(() => {
        fetchData(dataCallback);
      }, []);

    return (
        <div
            className='Heros'
            style={{
                width: '100%',
                height:"max-content",
                minHeight:"100vh",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                zIndex: 10,
                paddingBottom: '20px',
                backgroundImage: `url(${data?.imageUrl})`,
            }}
        >
            <div className='header-wrap' style={{ width: '90%', margin: '0px auto', paddingTop: "50px" }}>
                <header className='header'>
                    <img  src={homeData.image} alt="Avicenna" />
                    <div className='b-f' style={{ display: 'flex', justifyContent: 'center', alignItems: 'end', gap: "10px" }}>
                        <h3 style={{ color: 'white' }}>{homeData?.phone}</h3>
                        <button  className={newdata === "android" ? "main-btn2" : "main-btn"}>
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
