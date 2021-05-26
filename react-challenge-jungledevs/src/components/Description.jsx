import React from 'react';
import { Redirect, Link } from 'react-router-dom'

function Description() {
  return (
    <section className='share-container'>
      <img
        src='https://lh3.googleusercontent.com/NQsrk40CjS8u9zQu8Nrzkk8lSr7-XHrS93rQStfkHkOgOgtBCGeAZUyY46aN-N3bCFcM5zMjpYTGCZnbFRxmMsz_i4G5_4rBFH3o=w0'
        alt='map location'
        className='map'
      />
      <h3>Share your Home, nanny and costs</h3>
      <p>
        You have a fantastic home, a fantastic nanny and wouldn't cutting your costs in half be,
        well, fantastic?! If only it was easy to connect with other parents to share your costs?
        Well now it is, with Hapu. { <Link> Hapu means tribe </Link> } and it's our foundational
        3 tribal principles that empowers you to create and manage your own tribe. A tribe that
        together has the power to create new affordable solutions in childcare that work for you
        and your community.
      </p>
      <Link to='/register'>
        Ready to get Started?
      </Link>
    </section>
  )
}

export default Description