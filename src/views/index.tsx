import React from 'react';
import Brand from '../components/Brand/Brand';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MusicLove from '../components/MusicLove/MusicLove';
import NavBar from '../components/Navbar/Navbar';
import WhyRadioHead from '../components/WhyRadioHead/WhyRadioHead';


const Home = () => {
  return (
    <div className=''>
      <NavBar />
       <Header/>
       <Brand/>
       <MusicLove/>
       <WhyRadioHead/>
       <Footer/>
    </div>
  );
};

export default Home;
