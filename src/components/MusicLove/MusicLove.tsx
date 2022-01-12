import React from 'react';
import { musicLove, pickedPlaylists } from '../../core/data/music-love';
import './Musiclove.scss';

const MusicLove = () => {
  return (
    <div className='music-love-wrapper'>
      <section className='row justify-content-between  align-items-center my-4'>
        <div className='col-lg-8  row m-0 p-0 flex-sm-wrap flex-nowrap  order-2 order-lg-1  justify-content-start   overflow-auto'>
          {musicLove.map((item, index) => (
            <div className='item col-xl-3 col-lg-2 col-md-2 col'>
              <img src={item} alt={`brand-${index}`} className='me-3 ' />
            </div>
          ))}
        </div>

        <div className='col-lg-4 m-0 p-0 col-md-10 order-lg-2 order-1 ms-lg-0 ms-3'>
          <h1>The music you love</h1>
          <p className='display-1'>
            With over 60 million tracks and tons of exclusive interviews and videos, TIDAL is here to bring you closer
            to the artists you listen to.
          </p>
        </div>
      </section>
      <section className='row justify-content-center m-0 p-0  align-items-center mt-5 '>
        <div className='col-xl-4 col-lg-5  col-md-10'>
          <h1>Hand-picked playlists</h1>
          <p className='display-1'>
            Stream guest playlists curated by the artists you love. Also, check out our original playlists hand-picked
            by our team of experts.
          </p>
        </div>
        <div className='col-xl-6 col-lg-7 offset-xl-2 row   flex-nowrap flex-sm-wrap   justify-content-start  overflow-auto'>
          {pickedPlaylists.map((item, index) => (
            <div className=' item2   col-sm-5 col mx-3'>
              <img src={item} alt={`brand-${index}`} className='ms-3 '  />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MusicLove;
