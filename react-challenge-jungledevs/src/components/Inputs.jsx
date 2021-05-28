import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../services/api.js';
import validateEmail from '../services/validation';

function Inputs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState(false);

  const sendUserInformation = (name, email) => {
    try {
      api.post('challenge-newsletter/', { name, email });
    } catch (e) {
      console.log(e);
    }
    setRedirect(true);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const nameChange = (e) => setName(e.target.value);
  if (redirect === true) {
    return <Redirect to="/details-values" />;
  } else {
    return (
      <div className="register-inputs">
        <input
          onChange={(e) => nameChange(e)}
          placeholder="Your name"
          className="register-input"
          data-testid = "name-input"
        ></input>
        <input
          onChange={(e) => emailChange(e)}
          placeholder="Your email"
          className="register-input"
          data-testid = "email-input"
        ></input>
        <button
          className="send-button"
          data-testid="send-button"
          onClick={() => sendUserInformation(name, email)}
          disabled={validateEmail(email) === false}
        >
          Send
        </button>
      </div>
    );
  }
}

export default Inputs;
