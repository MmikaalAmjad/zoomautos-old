import React from 'react';
import { MdDesignServices } from "react-icons/md";
import Carousel from '@/components/homepage/carousel/carousel';

const services = [
  { description: "Driven Vehicle Movements — We provide professional drivers to move your vehicles from A to B across the UK, including dealer-to-dealer transfers, auction collections, and direct home deliveries." },
  { description: "Transported Vehicle Movements — We use specialist vehicle transporters to safely move your vehicles without adding mileage, ideal for prestige and performance cars." },
  { description: "Breakdown & Accident Recovery — 24/7 nationwide recovery service with fast response times. We get your vehicle to its destination safely after a breakdown or accident." },
  { description: "Emergency Motorway Assistance — Rapid response to motorway incidents, ensuring your vehicle is recovered quickly and safely with minimal disruption." },
  { description: "Fleet Logistics — Comprehensive fleet management and large-scale vehicle movements for dealerships, leasing companies, and corporate fleet operators." },
  { description: "Auction Collections & Deliveries — Efficient collection and delivery of vehicles from UK auctions, ensuring timely and secure transport to your site or customer." },
];

const imagesWithText = [
  { image: "/truck1.jpg" },
  { image: "/truck2.jpg" },
];

const Services = () => {
  return (
    <>
      <Carousel imagesWithText={imagesWithText} />
      <div className='moveoverlay-text'>
        <h1>Welcome To Zoom Autos</h1>
        <h2 style={{ color: 'red' }}>Our Services</h2>
      </div>
      <div className='grid-container-services'>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              width: '18rem',
              background: 'linear-gradient(135deg, #01103b, #e80f17)',
              boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.09)',
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '8px',
              border: '4px solid #7C3AED',
              minHeight: '30rem',
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '20px',
              color: 'white',
            }}
          >
            <div
              style={{
                width: '6rem',
                height: '6rem',
                backgroundColor: '#7C3AED',
                borderRadius: '50%',
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p style={{ color: 'white', fontSize: '1.5rem' }}>{index + 1}</p>
            </div>
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <MdDesignServices size={48} color="#7C3AED" />
            </div>
            <div style={{ flexGrow: 1, textAlign: 'center' }}>
              <p style={{ color: '#FFFFFF', fontSize: '0.875rem' }}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
