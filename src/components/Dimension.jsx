let Dimension = () => {
  return (
    <>
      <div className="container mb-5">
        <h6 className="mt-5 mb-5">SELECT DIMENSION</h6>
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6">
                  <div className="row">
                        <div className="col-md-4">
                            <b><small>Length</small></b>
                            <br />
                            <i className="fas fa-info-circle"></i>
                        </div>
                      <div className="col-md-8">
                            <select className="form-select" style={{ width: "40%" }} aria-label="Default select example">
                                <option id="option">1 ft</option>
                                <option id="option">2 ft</option>
                                <option id="option">3 ft</option>
                                <option id="option">4 ft</option>
                                <option id="option">5 ft</option>
                                <option id="option">6 ft</option>
                            </select>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-4">
                            <b><small>Breadth</small></b>
                            <br />
                            <i className="fas fa-info-circle"></i>
                      </div>
                      <div className="col-md-8">
                            <select className="form-select" style={{ width: "40%" }} aria-label="Default select example">
                                <option>1 ft</option>
                                <option>2 ft</option>
                                <option>3 ft</option>
                                <option>4 ft</option>
                                <option>5 ft</option>
                                <option>6 ft</option>
                            </select>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dimension;
