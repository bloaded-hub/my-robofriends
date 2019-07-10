import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-washed-green br3 pa3 ma2 dib bw1 shadow-1'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
