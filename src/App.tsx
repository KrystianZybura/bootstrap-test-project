import Carousel from "./components/Carousel";
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
      </main>
    </>
  );
}

export default App;
