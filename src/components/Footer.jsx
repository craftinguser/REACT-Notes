 export const Footer = () => {
    return (
      <div className="footer">
        <div className="footer_links">
          <ul>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Social Links</li>
          </ul>
          <div className="social_links">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div>© Copyright reserved for HungerCaravan</div>
      </div>
    );
  };

