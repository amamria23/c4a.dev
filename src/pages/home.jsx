import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Loading from '../components/loading';
const Home = () => {
  const [user, loading, error] = useAuthState(auth);
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
  if (user) {
    if (!user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>Home Page</title>
            <meta name="description" content="home pageeeeeeeeeeeeeeeeeeeeee" />
          </Helmet>
          <Header />
          <main style={{ alignItems: "center" }}>
            <h1 style={{ color: "blue", textAlign: "center" }}>
              welcome {user.displayName} <span>🔥</span>
            </h1>
            <p style={{ color: "red" }}>
              Your Email is not Verified!!!! please check your mailbox
            </p>
          </main>
          <Footer />
        </>
      );
    }
    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>Home Page</title>
            <meta name="description" content="home pageeeeeeeeeeeeeeeeeeeeee" />
          </Helmet>
          <Header />
          <main>
            <h1 style={{ color: "blue", textAlign: "center" }}>
              welcome {user.displayName} <span>🔥</span>
            </h1>
          </main>
          <Footer />
        </>
      );
    }
  }
  if (!user) {
    return (
      <>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="home pageeeeeeeeeeeeeeeeeeeeee" />
        </Helmet>
        <Header />
        <main>
          <p className="home">
            please <Link to={"/sign-in"}>Sign-in</Link> to continue
            ....  <span>&#128152;</span>
          </p>
        </main>
        <Footer />
      </>
    );
  }
};

export default Home;
