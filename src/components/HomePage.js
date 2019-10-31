import React from 'react';
import '../App.css';
import Header from './Header'
import ClickButton from './ClickButton';

function HomePage() {
  return (
    <div className="background">
      <Header />
      <div className="App-Clickbutton">
        <ClickButton />
      </div>
    

    </div>
  );
}

export default HomePage;
