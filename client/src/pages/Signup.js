import React, { useState } from "react";
import { Link } from "react-router-dom";
import BG from "../img/img3.jpg";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center position-relative">
      <div className="position-absolute">
        <img src={BG} class="img-fluid " alt="Responsive image"></img>
      </div>
      <div className="col-12 col-md-10 pt-5 col-lg-10 w-50 mx-auto my-0">
        <div className="card">
          
          <div className="card-body d-flex">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div class="container">
                  <div class="kpx_login">
                    <h3 class="kpx_authTitle">
                    <a href="Login">Login</a> or Sign up
                    </h3>
                    <div class="row kpx_row-sm-offset-3">
                      <div class="">
                        <h6>Username</h6>
                        <div class="input-group">
                          <span class="input-group-addon">
                            <span class="fa fa-user"></span>
                          </span>
                          <input
                            className="form-input mb-2 w-100 rounded py-md-1 px-md-1 py-lg-2 px-lg-4  w-xs-50"
                            placeholder=""
                            name="username"
                            type="text"
                            value={formState.name}
                            onChange={handleChange}
                          />
                        </div>
                        {/* <p class=" small">
                          You can use your username
                        </p> */}
                        <h6>Email</h6>
                        <div class="input-group">
                          <span class="input-group-addon">
                            <span class="fa fa-user"></span>
                          </span>
                          <input
                            className="form-input mb-2 w-100 rounded py-md-1 px-md-1 py-lg-2 px-lg-4  w-xs-50"
                            placeholder=""
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                          />
                        </div>
                        <h6>Password</h6>
                        <div class="input-group">
                          <span class="input-group-addon">
                            <span class="fa fa-key"></span>
                          </span>
                          <input
                            className="form-input rounded w-100 py-md-1 px-md-1 py-lg-2 px-lg-4 w-xs-100"
                            placeholder=""
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange}
                          />
                        </div>
                        <span class="custom-control-description">
                          <input type="checkbox" /> Keep me signed in
                        </span>
                        <div class=" d-flex justify-content-between">
                          <p class="kpx_forgotPwd">
                            <a href="#">Forgot your login in details?</a>
                          </p>
                          <button
                            className="btn btn-block btn-primary"
                            style={{ cursor: "pointer" }}
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="row kpx_row-sm-offset-3">
                      <div class="">
                        <label class="custom-control custom-checkbox">
                          <span class="custom-control-indicator"></span>
                        </label>
                      </div>

                      <div class="text-center">
                        <p class="small text-lg-center text-md-center text-sm-center text-xs-center">
                          Dont't have a My Community Directory account
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
