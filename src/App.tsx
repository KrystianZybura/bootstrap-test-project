import Carousel from "./components/Carousel";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Carousel />
        <Modal />
      </main>
    </>
  );
}

export default App;
