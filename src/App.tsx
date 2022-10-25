import React from 'react';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Main />
      <SideBar />
      <Footer />
    </div>
  );
}

export default App;
