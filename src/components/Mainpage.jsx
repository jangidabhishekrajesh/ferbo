import React from "react";
import Dimension from "./Dimension";
import Filter from "./Filter";
import Newproduct from "./Newproduct";
import Panel from "./Panel";
import Product from "./Product";
import Sort from "./Sort";




let Mainpage = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-sm-6 col-xs-6">
          <Filter/>
        </div>
        <div className="col-md-2 col-sm-6 col-xs-6">
          <Sort/>
        </div>
      </div>
      <Product/>
      <Newproduct/>
      <Dimension/>
    </div>
    <Panel/>
    </> 
  );
};
export default Mainpage;
