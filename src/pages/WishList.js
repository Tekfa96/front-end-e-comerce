import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
const WishList = () => {
  return (
    <>
      <Meta title={"wishlist"} />
      <BreadCrumb title="wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor T1 7.0.1 GB RAM 8GB Inch With Wi-fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$ 100.00 </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor T1 7.0.1 GB RAM 8GB Inch With Wi-fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$ 100.00 </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor T1 7.0.1 GB RAM 8GB Inch With Wi-fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$ 100.00 </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WishList;
