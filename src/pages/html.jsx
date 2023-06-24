import Header from '../components/header';
import Footer from '../components/footer';
import MainContent from '../components/mainContent';
import Loading from '../components/loading';
import { Helmet } from "react-helmet-async";
import {auth} from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react';

const Html = () => {
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
  if (user) {
    if (user.emailVerified) {
      return (
        <>
        <Helmet>
        <title>HTML Page</title>
            <meta name="description" content="html pageeeeeeeeeeeeeeeeeeeeee" />
        </Helmet>
          <Header />
          <MainContent namePage={'HTML'} />
          <Footer />
        </>
      );
    }
  }
};

export default Html;
