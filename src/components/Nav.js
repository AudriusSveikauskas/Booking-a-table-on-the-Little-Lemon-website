import { NavLink } from 'react-router-dom';

// Primary site navigation. Uses a <nav> landmark with a list of links so
// screen readers can announce it. NavLink applies an "active" class to the
// link matching the current route. Pages without a route yet use plain anchors.
function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <ul className="nav__list">
        <li><NavLink to="/">Home</NavLink></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><NavLink to="/booking">Reserve a table</NavLink></li>
        <li><a href="/order">Order online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
