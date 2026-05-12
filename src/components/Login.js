import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useContext(AuthContext);

  const [error, setError] = useState("");

  const history = useHistory();

  const submitHandler = async (event) => {

    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    try {

      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message || "Authentication Failed");
      }
      localStorage.setItem("token", data.idToken);

      alert("Login Successful");
      login(data.idToken);
      history.push('/store');

    } catch (err) {

      setError(err.message);
    }
  };

  return (
    <section>

      <h1>Login</h1>

      <form onSubmit={submitHandler}>

        <div>
          <label>Email</label>
          <input type="email" ref={emailRef} required />
        </div>

        <div>
          <label>Password</label>
          <input type="password" ref={passwordRef} required />
        </div>

        <button>Login</button>

        {error && <p>{error}</p>}

      </form>

    </section>
  );
};

export default Login;