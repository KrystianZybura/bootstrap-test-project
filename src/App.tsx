import Carousel from "./components/Carousel";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";

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
      </main>
    </>
  );
}

export default App;
