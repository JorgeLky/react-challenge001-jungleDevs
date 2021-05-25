import React from 'react';
import {
  DetailsInputs,
  SharedDescription,
  LongTerm,
  ComingSoon,
  DetailsPageFooter,
} from '../components/Index';

function DetailsPage () {
  return (
    <div>
      <DetailsInputs />
      <SharedDescription />
      <LongTerm />
      <ComingSoon />
      <DetailsPageFooter />
    </div>
  )
}

export default DetailsPage;