import React from 'react';
import babyIcon2 from '../icons/babyIcon2.svg'

function ComingSoon () {
  return(
    <article className='coming-soon-component'>
      <img src={babyIcon2} alt='baby icon' className='baby-icon'/>
      <h3>Coming soon: Nanny Share Daily Diary!</h3>
      <p>
        With the hapu daily diary your nanny will be able to update you and
        your sharers with photos and commentary of the day.
        You and sharers will receive notifications and you'll be able to login
        to view the daily adventures fo your little ones. We can't wait!
      </p>
    </article>
  )
}

export default ComingSoon;
