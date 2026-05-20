import logo from '../assets/logo.svg';

// Site footer: brand mark, secondary navigation, contact details and social
// links, grouped into labelled <nav> regions for clarity.
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img src={logo} alt="Little Lemon logo" />

        <nav aria-label="Footer navigation">
          <h2>Navigation</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/booking">Reserve a table</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>

        <address>
          <h2>Contact</h2>
          <ul>
            <li>123 Citrus Avenue, Chicago, IL</li>
            <li><a href="tel:+13125550199">+1 (312) 555-0199</a></li>
            <li><a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a></li>
          </ul>
        </address>

        <nav aria-label="Social media">
          <h2>Social media</h2>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
          </ul>
        </nav>
      </div>

      <p className="container footer__copyright">
        &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
