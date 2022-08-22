import React, { Fragment, useState, useEffect } from 'react';
import florest from '../assets/florest.png';
import Thumb from '../components/boxes/Thumb';
import data from '../data/data.json';

function Home() {
  return (
    <Fragment>
      <div className='banner'>
        <img alt='Florest Banner' src={florest} />
        <div className='text'>
          <h1> Home anywhere and everywhere</h1>
        </div>
      </div>
      <div className='container'>
        {data.map((item) => (
          <Thumb key={item.id} {...item} />
        ))}
      </div>
    </Fragment>
  );
}

export default Home;
