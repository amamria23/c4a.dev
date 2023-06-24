import Header from "../components/header";
import Footer from "../components/footer";
import Loading from '../components/loading';
import { Helmet } from "react-helmet-async";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";
import {useEffect} from 'react';
import { getAuth, deleteUser } from "firebase/auth";

const Profile = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (!user) {
      navigate('/')
    }
    if (user) {
      if (!user.emailVerified) {
        navigate('/')
      }
    }  
  });
  const deleteAccount = () => {
    const auth = getAuth();
                  const user = auth.currentUser;

                  deleteUser(user).then(() => {
                    // User deleted.
                    navigate('/sign-in')
                  }).catch((error) => {
                    // An error ocurred
                    // ...
                  });
  }
  if (loading) {
    return(
      <div>
        <Header />
        <main><Loading /></main>
        <Footer />
      </div>
    )
  }
  if (error) {
    return(
      <div>
        <Header />
        <main>Error: {error}</main>
        <Footer />
      </div>
    )
  }
  if (user) {
    if (user.emailVerified) {
      return (
        <>
          <Helmet>
            <title>Profile</title>
            <meta
              name="description"
              content="javascript pageeeeeeeeeeeeeeeeeeeeee"
            />
          </Helmet>
          <Header />
          <main style={{textAlign:'left'}}>
                <h5>User name : {user.displayName}</h5>
                <h5>email: {user.email}</h5>
                <h5>
                  last connect:{" "}
                  <Moment
                    style={{ color: "black" }}
                    fromNow
                    date={user.metadata.lastSignInTime}
                  />{" "}
                </h5>
                <h5>
                  creation account:
                  <Moment
                    style={{ color: "black" }}
                    fromNow
                    date={user.metadata.creationTime}
                  />{" "}
                </h5>
                <button onClick={(eo) => {
                  deleteAccount()
                }} className="btnr">delete Account</button>
          </main>
          <Footer />
        </>
      );
    }
  }
};

export default Profile;
