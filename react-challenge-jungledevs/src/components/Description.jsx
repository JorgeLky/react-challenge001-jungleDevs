import React from 'react';
import { Link } from 'react-router-dom';
import mapIcon from '../icons/mapicon.svg';

function Description() {
  return (
    <section className="share-container">
      <h2>Share your Home, nanny and costs</h2>
      <div className="description-container">
        <img src={ mapIcon } alt="map location" className="map" />
        <div className="description-text">
          <p data-testid='paragraph-description'>
            You have a fantastic home, a fantastic nanny and wouldn't cutting
            your costs in half be, well, fantastic?! If only it was easy to
            connect with other parents to share your costs? Well now it is, with
            Hapu. {<Link> Hapu means tribe </Link>} and it's our foundational 3
            tribal principles that empowers you to create and manage your own
            tribe. A tribe that together has the power to create new affordable
            solutions in childcare that work for you and your community.
          </p>
        </div>
      </div>
      <div className="link-register">
        <Link to="/register">Ready to get Started?</Link>
      </div>
    </section>
  );
}

export default Description;
