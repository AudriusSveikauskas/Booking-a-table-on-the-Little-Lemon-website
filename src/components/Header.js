import logo from '../assets/logo.svg';
import Nav from './Nav';

// Site header: the brand logo plus the primary navigation. <header> is a
// landmark region; the logo links back to the homepage.
function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="/" className="header__logo" aria-label="Little Lemon home">
          <img src={logo} alt="Little Lemon logo" />
        </a>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
