const Modal = () => (
  <section className="modal fade" id="booking-modal" tabIndex={-1}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Book a tour</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="row g-2">
              <div className="col-sm-6">
                <div className="form-floating">
                  <input
                    id="email1"
                    type="email"
                    className="form-control"
                    placeholder="Your email"
                  />
                  <label htmlFor="email1">Email adress</label>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-floating">
                  <select id="select1" className="form-select">
                    <option>Tromso, Norway - $899</option>
                    <option>Reykjavik, Iceland - $799</option>
                    <option>Yukon, Canada - $849</option>
                  </select>
                  <label htmlFor="select1">Pick a tour</label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Checkout
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Modal;
