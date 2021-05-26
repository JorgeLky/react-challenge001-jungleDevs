import React from 'react';

function Inputs () {
  let nanny = '';
  let email = '';
  const emailChange = (e) => email = e.target.value;
  const nameChange = (e) => nanny = e.target.value
  return (
    <div className='register-inputs'>
      <input
        onChange={(e) => nameChange(e)} placeholder='Your name'
        className='register-input'
      ></input>
      <input
        onChange={(e) => emailChange(e)} placeholder='Your email'
        className='register-input'
      ></input>
      <button className='send-button'> Send </button>
    </div>
  );
};

export default Inputs;