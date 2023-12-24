import Carousel from "./components/Carousel";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Packages from "./components/Packages";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Carousel />
        <Modal />
        <Overview />
        <Packages />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default App;
