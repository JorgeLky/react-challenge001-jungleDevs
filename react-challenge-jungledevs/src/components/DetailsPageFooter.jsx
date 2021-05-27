import React from 'react';
import { Link } from 'react-router-dom';
import hapuLogo from '../icons/hapulogo.svg';
import facebookIcon from '../icons/facebookicon.svg';
import twitterIcon from '../icons/twittericon.svg';
import instagramIcon from '../icons/instagramicon.svg';

function DetailsPageFooter () {
  return (
    <section className='details-page-footer'>
      <h2>Become a nanny share host</h2>
      <p>Take less than 5 minutes to get started</p>
      <button className='create-nanny'>
        <h3>Create Your nanny share</h3>
        <p>Takes less than 5 minutes</p>
      </button>
      <br />
      <Link className='browse-local-nanny'>
        Or browse local nanny-shares
      </Link>
      <br />
      <img src={ hapuLogo } alt='hapu logo' className='hapu-logo'/>
      <nav>
        <Link>Share your nanny</Link>
        <Link>Our Story</Link>
        <Link>Blog</Link>
        <Link>Terms & Privacy</Link>
        <Link><img src={ facebookIcon } alt='facebook icon' className='social-network' /></Link>
        <Link><img src={ twitterIcon } alt='facebook icon' className='social-network' /></Link>
        <Link><img src={ instagramIcon } alt='facebook icon' className='social-network' /></Link>
      </nav>
      <br />
      <p className='copyright'>
        Copyright © Hapu PTY Limited All rights reserved
      </p>
    </section>
  )
}

export default DetailsPageFooter;