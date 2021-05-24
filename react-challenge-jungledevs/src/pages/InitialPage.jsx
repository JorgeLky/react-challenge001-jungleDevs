import React from 'react';
import {
  Topmenu,
  AboutArticle,
  NannyAvailable,
  Description,
} from '../components/Index';

function InitialPage() {
  return (
    <div>
      <Topmenu />
      <AboutArticle />
      <NannyAvailable />
      <Description />
    </div>
  );
}

export default InitialPage;
