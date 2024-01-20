import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import prodcompare from "../images/prodcompare.svg";
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={` ${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
            <img src={watch2} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 18 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <Link to="/cart" className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={` ${
          location.pathname == "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product image" />
            <img src={watch2} className="img-fluid" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 18 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
