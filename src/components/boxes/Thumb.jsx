import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Thumb(props) {
  return (
    <article className='object'>
      <div className='object-description'>
        Accommodation
        <br />
        {props.title}
      </div>
      <Link to={`/${props.title}`} className='object-image'>
        <img alt='Florest Banner' src={props.cover} />
      </Link>
    </article>
  );
}

export default Thumb;
