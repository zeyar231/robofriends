import React from 'react';
import Card from './card'

function CardList({ robots }) {
      return (
        <div className='mt3'>
          {
            robots.map((user, i) => {
            return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
              })
          }
        </div>
      );  
}

export default CardList;