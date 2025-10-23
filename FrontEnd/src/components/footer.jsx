import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="footer-newsletter-content">
          <h3 className="footer-newsletter-title">Subscribe Our Newsletter</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-lg)', fontSize: 'var(--font-size-sm)' }}>
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="footer-newsletter-form">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="footer-newsletter-input"
            />
            <button className="footer-newsletter-button">Subscribe</button>
          </div>
        </div>
      </div>
      
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-lg)', fontSize: 'var(--font-size-lg)' }}>Jbanez</h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', lineHeight: '1.8' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. 
              Cum sociis natoque penatibus.
            </p>
            <div style={{ marginTop: 'var(--spacing-lg)', display: 'flex', gap: 'var(--spacing-md)' }}>
              <a href="#" style={{ color: 'var(--color-text-primary)', fontSize: '20px' }}>f</a>
              <a href="#" style={{ color: 'var(--color-text-primary)', fontSize: '20px' }}>t</a>
              <a href="#" style={{ color: 'var(--color-text-primary)', fontSize: '20px' }}>in</a>
              <a href="#" style={{ color: 'var(--color-text-primary)', fontSize: '20px' }}>yt</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-lg)', fontSize: 'var(--font-size-base)' }}>Other Pages</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <a href="/" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', textDecoration: 'none' }}>Home</a>
              <a href="/about" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', textDecoration: 'none' }}>About Us</a>
              <a href="/shop" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', textDecoration: 'none' }}>Shop</a>
              <a href="/blog" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', textDecoration: 'none' }}>Blog</a>
              <a href="/contact" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-lg)', fontSize: 'var(--font-size-base)' }}>Quick Link</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <a href="#" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', textDecoration: 'none' }}>Website Builder</a>
              <a href="#" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', textDecoration: 'none' }}>Ecommerce Web</a>
              <a href="#" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', textDecoration: 'none' }}>Web Hosting</a>
              <a href="#" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', textDecoration: 'none' }}>Online Support</a>
              <a href="#" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)', textDecoration: 'none' }}>Careers</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 style={{ color: 'var(--color-text-primary)', marginBottom: 'var(--spacing-lg)', fontSize: 'var(--font-size-base)' }}>Our Store</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
              <div>
                <p style={{ margin: 0, lineHeight: '1.6' }}>Jalan Sunset Road No. 189</p>
                <p style={{ margin: 0, lineHeight: '1.6' }}>Kuta – Bali</p>
              </div>
              <div>
                <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                  <span style={{ color: 'var(--color-primary)' }}>📞</span> +62 345 678 890
                </p>
                <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginTop: 'var(--spacing-xs)' }}>
                  <span style={{ color: 'var(--color-primary)' }}>📧</span> Jbanez@Domain.Com
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-text" style={{ marginTop: 'var(--spacing-3xl)', textAlign: 'center', paddingTop: 'var(--spacing-xl)', borderTop: '1px solid var(--color-border)' }}>
          <p className="footer-copyright">
            Copyright © 2023 Chanu@Music.
          </p>
          <p className="footer-rights">
            All Rights Reserved
          </p>
          <div className="footer-payment" style={{ marginTop: 'var(--spacing-lg)', alignItems: 'center' }}>
            <img 
              className="footer-payment-img" 
              alt="Payment methods" 
              src="615-6155786_card-payments-logo-uk-png-transparent-png 1.png" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
