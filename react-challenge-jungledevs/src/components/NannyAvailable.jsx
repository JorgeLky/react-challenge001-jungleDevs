import React from 'react';
import { Link } from 'react-router-dom'
import '../Css/initialpage.css';
import nannyicon from '../icons/nannyicon.svg';

function NannyAvailable () {
  return (
    <section className='Mcphee-container'>
      <div className='nanny-container'>
        <img
          src={ nannyicon }
          alt='nanny available'
          className='nanny-example'
          data-testid='nanny-representation'
          />
        <Link className='nanny-link'>
            Sarah's day care available now in North Sydney
        </Link>
      </div>
      <p className='date'>
        Wednesdey, Thursday, Friday - 7:30 - 5:30
      </p>
    </section>
  )
}

export default NannyAvailable