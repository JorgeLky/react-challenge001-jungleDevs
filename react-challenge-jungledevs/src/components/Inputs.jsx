import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../services/api.js'

function Inputs () {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState(false)

  const sendUserInformation = (name, email) => {
    api.post('posts', {name, email});
    setRedirect(true);
  }

  const emailChange = (e) => setEmail(e.target.value);
  const nameChange = (e) => setNome(e.target.value);
  if (redirect == true) {
    return <Redirect to='/details-values' />
  } else { return (
    <div className='register-inputs'>
      <input
        onChange={(e) => nameChange(e)} placeholder='Your name'
        className='register-input'
      ></input>
      <input
        onChange={(e) => emailChange(e)} placeholder='Your email'
        className='register-input'
      ></input>
      <button
        className='send-button'
        onClick={() => sendUserInformation(nome, email)}
      >Send</button>
    </div>
  )};
};

export default Inputs;