import React from 'react';
import { Link } from 'react-router-dom'
import '../Css/initialpage.css';

function NannyAvailable () {
  return (
    <section className='Mcphee-container'>
      <img
        src='https://i.pinimg.com/originals/9b/fc/6e/9bfc6ecef06015e389d5aebace7c9623.jpg'
        alt='nanny available'
        className='nanny-example'
      />
      <Link className='nanny-link'>
          Mcphee day care available now in North Sydney
      </Link>
      <p>
        Wednesdey, Thursday, Friday - 7:30 - 5:30
      </p>
    </section>
  )
}

export default NannyAvailable