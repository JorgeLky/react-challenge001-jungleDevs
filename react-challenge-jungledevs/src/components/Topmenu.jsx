import React from 'react'
import { Link } from 'react-router-dom';
import '../Css/initialpage.css'
import babyIcon from '../icons/babyicon.svg';

function TopMenu () {
  return (
    <header className='top-menu'>
      <div className='left-nav'>
      <button className='logo'>
        <img src={ babyIcon } height='50px' alt='baby representation icon' />
      </button>
      <Link className='desktop'>Create Your Nanny Share</Link>
      <Link className='desktop'>Browse Shares</Link>
      <Link className='desktop'>Our Story</Link>
      </div>
      <div className='right-nav'>
        <button className='nanny-host'>Become a Nanny Share Host</button>
        <Link className='desktop'>Sign in</Link>
      </div>
    </header>
  )
}

export default TopMenu