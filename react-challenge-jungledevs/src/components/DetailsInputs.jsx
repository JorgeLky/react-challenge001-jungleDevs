import React from 'react';
import '../Css/detailspage.css';

function DetailsInputs() {
  return (
    <section className="inputs-container">
      <div>
        <input type="radio" id="simple" value="simple" name="type" />
        <label htmlFor="simple">
          Choose to enter a simple flat amount
          <br />
          <input placeholder="$00.00" type="number" className="inputs"/>
          <button className="buttons">hr</button>
          <p className='price-details'>e.g $100/day for a 10hr day</p>
        </label>
      </div>
      <br />
      <div>
        <input type="radio" id="shared-rates" value="shared" name="type" />
        <label htmlFor="shared-rates">
          Choose shared rates
          <br />
          <input placeholder="$00.00" type="number" className="inputs" />
          <button className="buttons">hr</button>
          <p className='price-details'>Shared 2 children $12.50/hr * 2</p>
          <br />
          <input placeholder="$00.00" type="number" className="inputs" />
          <button className="buttons">hr</button>
          <p className='price-details'>Shared 3 children $10.00/hr * 3</p>
          <br />
          <input placeholder="$00.00" type="number" className="inputs" />
          <button className="buttons">hr</button>
          <p className='price-details'>Shared 4 children $8.75/hr * 4</p>
          <br />
        </label>
      </div>
    </section>
  );
}

export default DetailsInputs;
