import nothernLightsImage from "../../assets/nothernLightsImage.jpg";
import treesImage from "../../assets/treesImage.jpg";
import newYorkCityImage from "../../assets/newYorkCityImage.jpg";
import { Image, ImageWrapper } from "./styled";

const Carousel = () => (
  <div id="carouselIndicators" className="carousel slide">
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
      </ImageWrapper>
      <ImageWrapper className="carousel-item">
        <Image src={treesImage} className="d-block w-100" alt="..." />
      </ImageWrapper>
      <ImageWrapper className="carousel-item">
        <Image src={newYorkCityImage} className="d-block w-100" alt="..." />
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
  </div>
);

export default Carousel;
