import React, { Fragment, useState, useEffect } from 'react';
import florest from '../assets/florest.png';
import Banner from '../components/banner/Banner';
import Thumb from '../components/boxes/Thumb';
import data from '../data/data.json';

function Home() {
  return (
    <Fragment>
      <Banner src={florest} title='Home anywhere and everywhere' />
      <div className='container'>
        {data.map((item) => (
          <Thumb key={item.id} {...item} />
        ))}
      </div>
    </Fragment>
  );
}

export default Home;
