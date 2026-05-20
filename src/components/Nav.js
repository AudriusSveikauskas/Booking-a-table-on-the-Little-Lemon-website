// Primary site navigation. Uses a <nav> landmark with a list of links so
// screen readers can announce it and let users jump straight to it.
// Plain anchors are used here; client-side routing is introduced later.
function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/booking">Reserve a table</a></li>
        <li><a href="/order">Order online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
