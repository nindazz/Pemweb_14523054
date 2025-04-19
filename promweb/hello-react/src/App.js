// import libraries
import React from 'react'
import Header from './Header';
import Footer from './footer';
import Images from './images';
import List from './list';
import Top from './Top';
import './App.css';

// create component


const app = () => {
  
   return (
    <div className='App'>
      <h1>Hello react</h1>
      <p>my name is azarine</p>
      <Header />
      <Header list="10 daftar makanan" />
      <Top/>
      <Images/>
      <List/>
    

      <Footer />git
    </div>
   );
  }

// export component
export default app;