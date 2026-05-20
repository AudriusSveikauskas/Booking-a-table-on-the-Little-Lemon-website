import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Root component. A React fragment keeps the markup free of an extra,
// non-semantic wrapper <div>; the page is described entirely by the
// header / main / footer landmark components.
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
