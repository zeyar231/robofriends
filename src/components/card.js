import React from 'react';

function Card({ id, name, email }) {
  return (
    <div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

// const Card = () => {
//   return (
//     <div className='tc'>
//       <img alt='robots' src='https://robohash.org/zeyar' />
//       <div>
//         <h2>Jane Doe</h2>
//         <p>something@gmail.com</p>
//       </div>
//     </div>
//   );
// }

export default Card;