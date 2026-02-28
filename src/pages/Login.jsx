import "./Login.css";
import { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { FaLongArrowAltRight } from "react-icons/fa";

function Login() {
  const initialFormState = {
    email: "",
    password: "",
  };

  function formReducer(state, action) {
    switch (action.type) {
      case "SET_EMAIL":
        return { ...state, email: action.payload };
      case "SET_PASSWORD":
        return { ...state, password: action.payload };
      default:
        return state;
    }
  }

  const [formState, formDispatch] = useReducer(formReducer, initialFormState);

  // error
  const [error, setError] = useState({
    email: false,
    password: false,
  });

  //   handle handle an
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation
    let isValid = true;
    const newError = { email: false, password: false };

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      newError.email = true;
      isValid = false;
    }

    // Validate password (4+ characters)
    if (formState.password.length < 4) {
      newError.password = true;
      isValid = false;
    }

    setError(newError);

    if (isValid) {
      dispatch({
        type: "LOGIN",
        payload: { email: formState.email },
      });

      navigate("/products");
    }
  };

  return (
    <div className="login-form-container-bg">
      <div className="login-form-container">
        <div className="orange-line"></div>

        <p className="welcome-text">WELCOME BACK</p>
        <p className="Sign-to-account-text">Sign in to your account</p>
        <p className="explanation-text">
          Access your cart and continue shopping
        </p>

        <form className="login-form" onSubmit={handleLogin}>
          {error.email && (
            <p className="error-message">Enter a valid email address.</p>
          )}
          <label>EMAIL ADDRESS</label>
          <input
            type="text"
            name="email"
            placeholder="you@example.com"
            value={formState.email}
            onChange={(e) =>
              formDispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />

          {error.password && (
            <p className="error-message">
              Password must be at least 4 characters.
            </p>
          )}
          <label>PASSWORD</label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={(e) =>
              formDispatch({ type: "SET_PASSWORD", payload: e.target.value })
            }
          />

          <button className="submit-btn" type="submit">
            Sign in <FaLongArrowAltRight className="panah" />
          </button>
        </form>

        <p className="sign-in-condition">
          Use any email + password (4+ chars) to sign in.
        </p>
      </div>
    </div>
  );
}

export default Login;
