import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    actions.signup(email, password, navigate);
  };

  return (
    <div
      className="container mt-5"
      style={{ maxWidth: "800px", margin: "0 auto" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div
            className="card border-0 shadow-lg"
            style={{ borderRadius: "15px" }}
          >
            <div className="card-body">
              <h1
                className="card-title text-center mb-4"
                style={{ color: "#333", fontSize: "2em" }}
              >
                Registro
              </h1>
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Correo:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="form-label"
                    style={{ fontWeight: "bold" }}
                  >
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSignup}
                    style={{ padding: "10px 20px", borderRadius: "5px" }}
                  >
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
