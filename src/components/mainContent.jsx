 import React from 'react';
import '../components/main.css';

const MainContent = ({namePage, disigner}) => {
  return (
    <div>
      <main>{namePage} Page <br /> <br />  disigned by {disigner}</main>
    </div>
  );
}

export default MainContent;
