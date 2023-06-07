import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <Meta title={"Signup"} />
      <BreadCrumb title="Create Account" />
      <Container class1="signup-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Create Account</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="text" name="Name" placeholder="Name" />
                <CustomInput type="email" name="Email" placeholder="Email" />
                <CustomInput
                  type="tel"
                  name="Mobile Number"
                  placeholder="Mobile Number"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                    <Link to="/login" className="button border-0" type="submit">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
