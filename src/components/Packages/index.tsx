import tromso from "../../assets/tromso.jpg";
import yukon from "../../assets/yukon.jpg";
import iceland from "../../assets/iceland.jpeg";

const Packages = () => (
  <section id="packages" className=" mt-sm-5">
    <h2 className="text-center my-4 my-sm-5 fs-1">Packages</h2>
    <div className="row mx-5 row-gap-5">
      <div className="col-lg">
        <div className="card">
          <img src={tromso} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Tromso, Norway - $899</h5>
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              laborum earum pariatur. Debitis nihil pariatur culpa voluptatibus
              et quas amet architecto libero sequi molestias. Necessitatibus
              nulla maiores dolor? Voluptate, ipsa!
            </p>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#booking-modal"
            >
              Book tour
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg">
        <div className="card">
          <img src={iceland} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Reykjavik, Iceland - $799</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              aperiam iure corporis amet architecto voluptatem saepe illum minus
              consequuntur! Commodi ut ad rerum cumque omnis. Laboriosam
              aspernatur est nihil maxime!
            </p>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#booking-modal"
            >
              Book tour
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg">
        <div className="card">
          <img src={yukon} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Yukon, Canada - $849</h5>
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              possimus id maxime natus excepturi omnis animi. Quod asperiores,
              blanditiis quam, adipisci dolore rem assumenda doloremque mollitia
              omnis possimus ipsum sequi.
            </p>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#booking-modal"
            >
              Book tour
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Packages;
