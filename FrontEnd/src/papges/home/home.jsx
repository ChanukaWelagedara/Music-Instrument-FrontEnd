import './home.css';

export const Home = () => {
	
	return (
    		<div className="home">
      			<div className="hero-section">
        				<div className="hero-overlay"></div>
        				<div className="hero-content">
							<div className="hero-text">
								<p className="hero-subtitle">Chanu Music – New Series</p>
								<h1 className="hero-title">
									<span className="hero-title-highlight">Paul Timmons</span>
									Signature Collection
								</h1>
								<p className="hero-description">
									Discover our premium range of musical instruments, designed for musicians of all skill levels. Every product is brand new, certified, and ready for professional use.
								</p>
								<div className="hero-features">
									<div className="hero-feature">
										<span className="hero-feature-icon">✓</span>
										<span>Certified Authentic Instruments</span>
									</div>
									<div className="hero-feature">
										<span className="hero-feature-icon">✓</span>
										<span>Superior Quality and Craftsmanship</span>
									</div>
									<div className="hero-feature">
										<span className="hero-feature-icon">✓</span>
										<span>Official Manufacturer Guarantee</span>
									</div>
									<div className="hero-feature">
										<span className="hero-feature-icon">✓</span>
										<span>Authorized Products and Permissions</span>
									</div>
								</div>
								<div className="hero-cta">
									<a href="/shop" className="hero-btn">Explore Our Products →</a>
								</div>
							</div>
							<div className="hero-image-container">
								<img className="hero-guitar-image" alt="Jbanez Paul Timmons Guitar" src="image1.png" />
								<div className="hero-spec-badge">
									<p className="hero-spec-title">⊕ Specification</p>
									<p className="hero-spec-desc">Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
									<p className="hero-spec-desc">Donec pede justo, fringilla vel, aliquet nec.</p>
								</div>
								<div className="hero-price-badge">$ 3,799</div>
							</div>
        				</div>
      			</div>

					<div className="about-home-section">
						<div className="about-home-header">
							<p className="about-home-subtitle">Why Choose Chanu Music?</p>
							<h2 className="about-home-title">
								<span className="about-home-title-highlight">Our Collections</span>
							</h2>
						</div>
						<div className="about-home-content">
							<img className="about-home-image" alt="Guitar Collection" src="image7.png" />
							<div className="about-home-text">
								<p className="about-home-description">
									We offer an extensive collection of guitars and other musical instruments, catering to beginners, enthusiasts, and professionals. Experience the perfect blend of quality, performance, and style.
								</p>
								<div className="about-home-stats">
									<div className="about-home-stat">
										<div className="about-home-stat-icon">🏆</div>
										<div className="about-home-stat-content">
											<div className="about-home-stat-value">12 +</div>
											<div className="about-home-stat-label">Years of Expertise in Musical Instruments</div>
										</div>
									</div>
								</div>
								<div className="hero-cta" style={{ marginTop: 'var(--spacing-xl)' }}>
									<a href="/about" className="hero-btn">About Us →</a>
								</div>
							</div>
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
