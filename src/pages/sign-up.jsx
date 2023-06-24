import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Loading from "../components/loading";
import { Helmet } from "react-helmet-async";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const SignIn = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });
  const signUpBtn = (eo) => {
    eo.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // ...
        sendEmailVerification(auth.currentUser).then(() => {
          // Email verification sent!
          console.log("Email verification sent!");
          // ...
        });
        updateProfile(auth.currentUser, {
          displayName: userName,
        })
          .then(() => {
            // Profile updated!
            // ...
            navigate("/sign-in");
            console.log(user);
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        // ..
        console.log(errorCode);
      });
  };
  if (loading) {
    return (
      <div>
        <Header />
        <main>
          <Loading />
        </main>
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
          <title>sign-up</title>
          <meta
            name="description"
            content="sign-up pageeeeeeeeeeeeeeeeeeeeee"
          />
        </Helmet>
        <Header />
        <main>
          <form>
            <p style={{ fontSize: "23px", marginBottom: "22px" }}>
              Create New Account
            </p>
            <input
              onChange={(eo) => {
                setuserName(eo.target.value);
              }}
              type="text"
              placeholder="userName:"
              required
            />
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
                signUpBtn(eo);
              }}
              type="submit"
            >
              sign-up
            </button>
          </form>{" "}
        </main>
        <Footer />
      </>
    );
  }
};

export default SignIn;
