import tromso from "../../assets/tromso.jpg";
import yukon from "../../assets/yukon.jpg";
import iceland from "../../assets/iceland.jpeg";

const Packages = () => (
  <section id="packages" className="mt-5">
    <h2 className="text-center my-5 fs-1">Packages</h2>
    <div className="row m-5">
      <div className="col-lg">
        <div className="card">
          <img src={tromso} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg">
        <div className="card">
          <img src={iceland} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg">
        <div className="card">
          <img src={yukon} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Packages;
