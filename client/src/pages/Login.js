import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import "../styles/login.css";
import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="flex-row justify-center  imgepic">
      <div className="col-12 pt-5 col-lg-8 mx-auto my-0">
        <div className="card">
          <div className="card-body">
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
                      Login or <a href="Signup">Sign up</a>
                    </h3>
                    <div class="row kpx_row-sm-offset-3">
                      <div class="">
                        
                          <h6>Your Email</h6>
                          <div class="input-group">
                            <span class="input-group-addon">
                              <span class="fa fa-user"></span>
                            </span>
                            <input
                              className="form-input w-100 rounded py-md-1 px-md-1 py-lg-2 px-lg-4  w-xs-50"
                              placeholder=""
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                            />
                          </div>
                          <p class="mt-2 small">
                            You can you your username, mobile number, or email
                            address
                          </p>
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
                          Dont't have a CommuniTeam account
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

export default Login;
