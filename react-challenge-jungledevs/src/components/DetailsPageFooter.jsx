import React from 'react';
import { Link } from 'react-router-dom';

function DetailsPageFooter () {
  return (
    <section>
      <h2>Become a nanny share host</h2>
      <p>Take less than 5 minutes to get started</p>
      <button>
        <h3>Create Your nanny share</h3>
        <p>Takes less than 5 minutes</p>
      </button>
      <br />
      <Link>
        Or browse local nanny-shares
      </Link>
      <br />
      [logo]
      <nav>
        <Link>Share your nanny</Link>
        <Link>Our Story</Link>
        <Link>Blog</Link>
        <Link>Terms & Privacy</Link>
        <Link>Facebook</Link>
        <Link>Twitter</Link>
        <Link>Instagram</Link>
      </nav>
      <br />
      Copyright © Hapu PTY Limited All rights reserved
    </section>
  )
}

export default DetailsPageFooter;