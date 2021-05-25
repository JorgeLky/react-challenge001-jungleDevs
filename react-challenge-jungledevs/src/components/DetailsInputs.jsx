import React from 'react';

function DetailsInputs() {
  return (
    <section>
      <input
        type='radio'
        id='simple'
        value='simple'
        name='type'
      />
      <label htmlFor='simple'>
        Choose to enter a simple flat amount
        <br />
        <input
          placeholder='$00.00'
          type='number' />
          <button>hr</button>
      </label>
      <br />
      <input
        type='radio'
        id='shared-rates'
        value='shared'
        name='type'
      />
      <label htmlFor='shared'>
        Choose shared rates
        <br />
        <input
          placeholder='$00.00'
          type='number'>
        </input>
        <button>hr</button>
        <input
          placeholder='$00.00'
          type='number' />
        <button>hr</button>
        <input
          placeholder='$00.00'
          type='number' />
        <button>hr</button>
      </label>
    </section>
  )
}

export default DetailsInputs;