import React from 'react';
import { Link } from 'react-router-dom';

function SharedDescription() {
  return (
    <article className='shared-description-container'>
      <h3>Shared Payments made simple</h3>
      <p>
        Sometimes it's hard enougth just sharing a restaurant bill.
        Try sharing that bill week in, week out and you might encounter
        more than a few snares. But not with Hapu. Simply set your rates
        and our automated payment system takes care of the rest. You need
        never talk money or who owes what.
      </p>
      <Link>
        Read how Bridget's share (without Hapu) ended over $15
      </Link>
    </article>
  )
}

export default SharedDescription;