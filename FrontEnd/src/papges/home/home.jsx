import React from 'react';
import './home.css';

export const Home = () => {
	
	return (
    		<div className="home">
      			<div className="hero-section">
        				<div className="hero-overlay"></div>
        				<div className="hero-images">
            						<img className="hero-image hero-img-1" alt="" src="image1.png" />
            						<img className="hero-image hero-img-2" alt="" src="image2.png" />
            						<img className="hero-image hero-img-3" alt="" src="image3.png" />
            						<img className="hero-image hero-img-4" alt="" src="image4.png" />
            						<img className="hero-image hero-img-5" alt="" src="image5.png" />
            						<img className="hero-image hero-img-6" alt="" src="image 6.png" />
        				</div>
        				<div className="hero-content">
          					<h1 className="hero-title">Music Instruments</h1>
          					<p className="hero-subtitle">Elevate Your Melodies with Premium</p>
          					<p className="hero-cta">Explore our Wide Selection Today!</p>
        				</div>
      			</div>

      			<div className="categories-section">
        				<h2 className="categories-title">Our Categories</h2>
        				<div className="categories-grid">
          					<div className="category-card">
            						<img className="category-image" alt="Guitars" src="image7.png"  />
            						<div className="category-overlay">
              							<h3 className="category-name">Guitars</h3>
            						</div>
          					</div>
          					<div className="category-card">
            						<img className="category-image" alt="Drums and Percussion" src="image8.png" />
            						<div className="category-overlay">
              							<h3 className="category-name">Drums and Percussion</h3>
            						</div>
          					</div>
          					<div className="category-card">
            						<img className="category-image" alt="Electronic Instruments" src="image9.png" />
            						<div className="category-overlay">
              							<h3 className="category-name">Electronic Instruments</h3>
            						</div>
          					</div>
          					<div className="category-card">
            						<img className="category-image" alt="Audio Equipment" src="image10.png" />
            						<div className="category-overlay">
              							<h3 className="category-name">Audio Equipment</h3>
            						</div>
          					</div>
          					<div className="category-card">
            						<img className="category-image" alt="Accessories" src="image11.png" />
            						<div className="category-overlay">
              							<h3 className="category-name">Accessories</h3>
            						</div>
          					</div>
          					<div className="category-card">
            						<img className="category-image" alt="Brass Instruments" src="image12.png" />
            						<div className="category-overlay">
              							<h3 className="category-name">Brass Instruments</h3>
            						</div>
          					</div>
          					<div className="category-card">
            						<img className="category-image" alt="String Instruments" src="image13.png" />
            						<div className="category-overlay">
              							<h3 className="category-name">String Instruments</h3>
            						</div>
          					</div>
          					<div className="category-card">
            						<img className="category-image" alt="Keyboards/Pianos" src="image14.png" />
            						<div className="category-overlay">
              							<h3 className="category-name">Keyboards/Pianos</h3>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Home;
