import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/initialpage.css'
import playIcon from '../icons/video button.svg';
import nannyicon from '../icons/nannyicon.svg';
import womanicon from '../icons/womanicon.svg';

function AboutArticle () {
  return (
    <div className='about-article'>
      <article>
          <h1>Easily create or join a local nanny share with Hapu</h1>
          <p>
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible,
            affordable solutions in child care
          </p>
          <div className='desktop manage-nanny'>
            <div>
              <img src={ nannyicon } alt='nanny icon' className='nanny-icon' />
              <strong>Kate</strong>
            </div>
            <div>
              <img src={ womanicon } alt='woman icon' className='woman-icon' />
              <strong>Jane</strong>
            </div>
            <p className='notification'>
              Congratulations Kate has joined your nanny share
            </p>
          </div>
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