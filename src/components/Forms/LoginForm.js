import { useState, useEffect } from "react";
import "./Login.styles.css";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../../services/api";

const LoginForm = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [users, setUsers] = useState("");
  const navigate = useNavigate();

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  useEffect(() => {
    GetAllUsers();
  }, []);

  const GetAllUsers = async () => {
    const response = await getAllUsers();
    setUsers(response.data);
  };

  const handleSubmit = (event) => {
    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = users.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
        event.preventDefault();
      } else {
        setIsSubmitted(true);
        localStorage.setItem("logged", true);
        navigate("/");
      }
    } else {
      localStorage.removeItem("logged");
      setErrorMessages({ name: "uname", message: errors.uname });
      event.preventDefault();
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title text-center">Sign In</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <button className="button-add" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
