import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Loading from '../components/loading';
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./sign-in.css";

const SignIn = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailpass, setemailpass] = useState("");
  const [password, setPassword] = useState("");
  const [hidemail, sethidemail] = useState("");
  const [hasError, sethasError] = useState(false);
  const [sendMail, setsendMail] = useState(false);
  const [hasError2, sethasError2] = useState("");
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });
  const resetPass = (eo) => {
    eo.preventDefault()
                sendPasswordResetEmail(auth, emailpass)
                  .then(() => {
                    setsendMail(true);
                    // Password reset email sent!
                    // ..
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode)
                    // ..
                  });
  }

  const signInBtn = (eo) => {
    eo.preventDefault();
                signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    navigate("/");
                    console.log(user);
                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    sethasError(true);
                    sethasError2(errorCode);
                  });
  }

  if (loading) {
    return (
      <div>
        <Header />
        <main><Loading /></main>
        <Footer />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <Header />
        <main>Error: {error}</main>
        <Footer />
      </div>
    );
  }
  if (!user) {
    return (
      <>
        <Helmet>
          <title>sign-in</title>
          <meta
            name="description"
            content="sign-in pageeeeeeeeeeeeeeeeeeeeee"
          />
        </Helmet>
        <Header />
        <main>
          <form className= {`Forget-password ${hidemail}`}>
            <div onClick={(eo) => {
              sethidemail('')
            }} className="close">X</div>
            <input
              onChange={(eo) => {
                setemailpass(eo.target.value)
              }}
              type="email"
              placeholder="email:"
              required
            />
            <button
              onClick={(eo) => {
                resetPass(eo)
              }}
              className="btnr"
            >
              Reset password
            </button>
            {sendMail && <p style={{color:'red'}}>please check your email to reset password</p>}
          </form>
          <form>
            <input
              onChange={(eo) => {
                setEmail(eo.target.value);
              }}
              type="email"
              placeholder="email:"
              required
            />
            <input
              onChange={(eo) => {
                setPassword(eo.target.value);
              }}
              type="password"
              placeholder="password:"
              required
            />
            <button
              className="btnr"
              onClick={(eo) => {
                signInBtn(eo)
              }}
              type="submit"
            >
              sign-in
            </button>
          </form>
          <p>
            Don't have an account <Link to={"/sign-up"}>Sign-up</Link>
          </p>
          <p style={{marginTop:'-7px'}}>
            Forget password{" "}
            <Link
              onClick={(eo) => {
                sethidemail('show')
              }}
            >
              click here
            </Link>
          </p>
          {hasError && (
            <p>
              {" "}
              <h1>{hasError2}</h1>
            </p>
          )}
        </main>
        <Footer />
      </>
    );
  }
};

export default SignIn;
