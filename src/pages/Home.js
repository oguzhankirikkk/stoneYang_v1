import React from 'react';
import backgroundImage from './wallpaperflare.jpg'; // Resmi import edin
import './Home.css'; // Stil dosyasını import edin

const Home = () => {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <p className='font-link' style={{fontSize: '60px', margin:'5px'}}>STONEYANG</p>
        <p className='font-link' style={{fontSize: '48px', margin:'10px'}}>NFT GAME</p>
        <p></p>
      </div>
    </div>
  );
};

export default Home;