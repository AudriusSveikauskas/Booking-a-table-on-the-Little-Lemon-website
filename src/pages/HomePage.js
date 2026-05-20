import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import Chicago from '../components/Chicago';

// The homepage composes the four content bands in the order set by the
// wireframe: call-to-action, specials, testimonials and the about section.
function HomePage() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <Chicago />
    </>
  );
}

export default HomePage;
