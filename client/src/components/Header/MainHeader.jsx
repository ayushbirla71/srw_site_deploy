import React from 'react';
import './MainHeader.css';
import TopHeader from './components/TopHeader';
import Header from './components/Header';
import NavHeader from './components/NavHeader';

const MainHeader = () => {
  return (
    <div className='mainheader'>
      <TopHeader/>
      <Header/>
      <NavHeader/>
    </div>
  )
}

export default MainHeader