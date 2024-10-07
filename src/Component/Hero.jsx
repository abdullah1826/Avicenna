import React from 'react'
import logo1 from '../image/logo1.png'; // This path seems correct
import Talktous from '../Component/Talktous'; // Consistent path to Talktous component
import Nav from '../Component/Nav'; // Fixed path
import Develop from './Develop';
export default function Hero({data},{dataa}) {
  return (
    <div className='Heros'  style={{    width: '100%', 
    backgroundPosition: 'center',

backgroundSize: 'cover',

zIndex: 10,
    paddingBottom: '20px',
    backgroundImage: `url(${data?.imageUrl})`, 
 
}}>
<div className='header-wrap' style={{ width: '90%', margin: '0px auto', paddingTop: "50px" }}>
            <header className='header'>
                <img loading='lazy' src={logo1} alt="Avicenna" />
                <div className='b-f' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "20px" }}>
                    <h3 style={{ color: 'white' }}>+92 320 0001511</h3>
                    <button className='main-btn'  > 
                        Start Your Project
                    </button>
                </div>
            </header>
        </div>

<Nav/>     
      <div>
      <Talktous data={data} dataa={dataa}/>

      </div>
</div>
  )
}
