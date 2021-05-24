import React from 'react';
import { Link } from 'react-router-dom';

function AboutArticle () {
  return (
    <div>
      <article>
          <h3>Easily create or join a local nanny share with Hapu</h3>
          <p>
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible,
            affordable solutions in child care
          </p>
        </article>
        <Link>
          See Hapu in action (27 Seconds)
        </Link>
    </div>
  )
}

export default AboutArticle