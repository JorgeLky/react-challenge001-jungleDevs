import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/initialpage.css'
import playIcon from '../icons/video button.svg';

function AboutArticle () {
  return (
    <div className='about-article'>
      <article>
          <h1>Easily create or join a local nanny share with Hapu</h1>
          <p>
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible,
            affordable solutions in child care
          </p>
        </article>
        <Link className='about-link'>
          <img src={playIcon} width='50px' />
          <p className='link'>
            See Hapu in action (27 Seconds)
          </p>
        </Link>
    </div>
  )
}

export default AboutArticle