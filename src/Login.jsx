import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/authen", {
        username,
        password,
      });

      if (response.data.response === "Login successfully!") {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("isAuth", true);
        console.log("Login successful!");
        console.log(response.data.token);
        navigate("/admin"); // Redirect to the admin page
      } else {
        alert(response.data.response);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="bg-white vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card border shadow-sm">
              <div className="card-body p-4 text-center">
                <div className="mb-4">
                  <div
                    className="mx-auto bg-white text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "100px",
                      height: "100px",
                      margin: "0 auto",
                    }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HCMUT_official_logo.png/640px-HCMUT_official_logo.png"
                      alt="logo"
                      width="100%"
                    />
                  </div>
                </div>
                <h3 className="text-primary mb-5">Đăng nhập</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-grid mt-5">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                    >
                      Đăng nhập
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
