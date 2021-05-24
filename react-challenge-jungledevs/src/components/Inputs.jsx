import React from 'react';

function Inputs () {
  let nanny = '';
  let email = '';
  const emailChange = (e) => email = e.target.value;
  const nameChange = (e) => nanny = e.target.value
  return (
    <div>
      <input onChange={(e) => nameChange(e)} placeholder='Your name' ></input>
      <input onChange={(e) => emailChange(e)} placeholder='Your email'></input>
      <button> Send </button>
    </div>
  );
};

export default Inputs;