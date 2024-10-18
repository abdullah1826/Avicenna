import React, { useEffect } from 'react';
import './client.css';
import same from '../image/same.png';
import same2 from '../image/same2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function For_client() {
  const client_card = [
    {
      image: same,
      heding: 'Dedicated Teams',
      para: 'Reduce Your time-to-market with our fully managed and cost-efficient project delivery.',
      btn: 'Build Your Team',
    },
    {
      image: same,
      heding: 'Build Your Team',
      para: 'Build a dream team to work exclusively on your project, well-aligned with your timeline and goals.',
      btn: 'Develop Your Projects',
    },
    {
      image: same,
      heding: 'Off-Shore Development',
      para: 'Minimal overhead, rapid scaling, and global expertise without any hassle of tedious hiring processes.',
      btn: 'See More',
    },
    {
      image: same,
      heding: 'IT Consulting and Solutions',
      para: 'The consultancy helps businesses to choose the right software solutions, optimize processes, and align technology with business goals.',
      btn: 'See More',
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div style={{ marginTop: '0px' }} className="ServicesContainer">
      <div>
        <h2 className="heading">For Our Clients!</h2>
        <p style={{ width: '90%' }} className="paragraph">
          For the past decade we have been creating high performance, feature-packed mobile applications for iOS & Android. As an expert in mobile
          application development services, Folio3 can create the right app that will meet all your business and industry needs.
        </p>
      </div>

      <div className="card-container">
        {client_card.map((item, index) => (
          <div
            key={index}
            className="my-card"
            data-aos={
  index === 0 ? 'slide-up' :
  index === 1 ? 'slide-up' :
  index === 2 ?'slide-up' :
  index === 3 ?'slide-up' :
  ''
}

          >
            <div className='inner-data'>
              <img loading='lazy' className='my-img' src={item.image} alt={item.heding} />

              <div style={{ display: 'flex', alignItems: 'end', gap: '10px' }} className='headnimg'>
                <img loading='lazy' style={{ width: '10px' }} src={same2} alt="" />
                <h2 className='my-head'>{item.heding}</h2>
              </div>

              <p className='my-para'>{item.para}</p>
              <button className='my-card-button'>{item.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default For_client;
