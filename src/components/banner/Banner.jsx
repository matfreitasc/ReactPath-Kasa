import React from 'react';

function Banner(props) {
  return (
    <div className='banner'>
      <img alt='Florest Banner' src={props.src} />
      {props.title ? (
        <div className='text'>
          <h1> {props.title}</h1>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Banner;
