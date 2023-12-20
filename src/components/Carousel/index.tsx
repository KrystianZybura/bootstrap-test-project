import nothernLightsImage from "../../assets/nothernLightsImage.jpg";
import treesImage from "../../assets/treesImage.jpg";
import newYorkCityImage from "../../assets/newYorkCityImage.jpg";
import { Image, ImageWrapper } from "./styled";

const Carousel = () => (
  <section id="carouselIndicators" className="carousel slide">
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div className="carousel-inner">
      <ImageWrapper className="carousel-item active">
        <Image src={nothernLightsImage} className="d-block w-100" alt="..." />
        <div className="carousel-caption top-0 mt-5">
          <p className="fs-3 text-uppercase">Discover the hidden world</p>
          <h1 className="display-1 fw-bolder text-capitalize">
            The Aurora Tours
          </h1>
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 py-2 mt-5"
            data-bs-toggle="modal"
            data-bs-target="#booking-modal"
          >
            Book a tour
          </button>
        </div>
      </ImageWrapper>
      <ImageWrapper className="carousel-item">
        <Image src={treesImage} className="d-block w-100" alt="..." />
        <div className="carousel-caption top-0 mt-5">
          <p className="fs-3 text-uppercase">The season has arrived</p>
          <h1 className="display-1 fw-bolder text-capitalize">
            3 available tours
          </h1>
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 py-2 mt-5"
            data-bs-toggle="modal"
            data-bs-target="#booking-modal"
          >
            Book a tour
          </button>
        </div>
      </ImageWrapper>
      <ImageWrapper className="carousel-item">
        <Image src={newYorkCityImage} className="d-block w-100" alt="..." />
        <div className="carousel-caption top-0 mt-5">
          <p className="fs-3 text-uppercase">Destination activities</p>
          <h1 className="display-1 fw-bolder text-capitalize">Visit a city</h1>
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 py-2 mt-5"
            data-bs-toggle="modal"
            data-bs-target="#booking-modal"
          >
            Book a tour
          </button>
        </div>
      </ImageWrapper>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </section>
);

export default Carousel;
