import { useContext, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { ThemeContext } from "../../context/ThemeContext";
import "./index.css";

const Login = () => {
  const [isLight] = useContext(ThemeContext);
  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    navigate("/", { replace: true });
  };

  const handleFailure = (error) => {
    setShowError(true);
    setErrorMsg(error);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      handleSuccess(data.jwt_token);
    } else {
      handleFailure(data.error_msg);
    }
  };

  const logoUrl = isLight
    ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
    : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png";

  return (
    <>
      <div className={isLight ? "light-container" : "dark-container"}>
        <div className={isLight ? "container-light" : "container-dark"}>
          <img src={logoUrl} className="logo" />
          <form className="form-container" onSubmit={handleLoginSubmit}>
            <label
              className={isLight ? "label-light" : "label-dark"}
              htmlFor="username"
            >
              USERNAME
            </label>
            <input
              className={isLight ? "input-light" : "input-dark"}
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <label
              className={isLight ? "label-light" : "label-dark"}
              htmlFor="password"
            >
              PASSWORD
            </label>
            <input
              className={isLight ? "input-light" : "input-dark"}
              id="password"
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div className="check-div">
              <input
                type="checkbox"
                id="checkbox"
                className={isLight ? "checkbox-light" : "checkbox-dark"}
                value={showPass}
                onChange={(e) => setShowPass((prev) => !prev)}
              />
              <label
                className={isLight ? "check-light" : "check-dark"}
                htmlFor="checkbox"
              >
                Show Password
              </label>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            {showError && <p className="errorMsg">{errorMsg}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
