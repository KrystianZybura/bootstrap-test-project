const Faq = () => (
  <section className="container pt-md-5 my-5" id="faq">
    <h2 className="text-center">FAQ</h2>
    <div className="accordion w-75 mx-auto mt-4 mt-md-5" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            How long are the trips?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            voluptatem dicta magni voluptatibus sapiente quidem quisquam totam
            commodi unde repellendus cum iure quos, laboriosam tempora
            reprehenderit reiciendis saepe facilis enim?
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Is the flight included?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            distinctio aspernatur quaerat, voluptatum harum debitis illo sunt
            aperiam ipsum unde inventore recusandae veritatis nihil
            reprehenderit, fuga corrupti maiores? Consequuntur, ipsam?
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Can I cancel after booking?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            numquam ipsum cupiditate modi? Aut, asperiores, eos reiciendis illum
            minus, ex nam doloribus repellat reprehenderit a adipisci laudantium
            fuga pariatur optio!
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Faq;
