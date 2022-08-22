import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <section className='error-container'>
      <h1>404</h1>
      <h2>Oops! It looks like this page doesn't exist.</h2>
      <Link to='/'>Go back to home page</Link>
    </section>
  );
}

export default Error;
