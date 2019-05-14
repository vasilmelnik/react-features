import React, { useState } from 'react';

const data = [
  {id: 1, name: 'Amsterdam'},
  {id: 2, name: 'Los Angeles'},
  {id: 3, name: 'Pittsbourg'},
  {id: 4, name: 'Stuttgart'},
  {id: 5, name: 'Minsk'}
];


export const LiveSearch = () => {

  const [arr, filterArr] = useState(data);

  const getRenderedList = () => (
    arr.map(
      item => (<li key={item.id}>{item.name}</li>)
    )
  );

  const getFilteredList = (data, value) => (
    data.filter(
      item => item.name.includes(value)
    )
  );

  const handleChange = e => (
    filterArr(
      getFilteredList(data, e.target.value)
    )
  );


  return (
    <div className='divide'>
    <h5>Live search</h5>
      <input onChange={handleChange}/>
      <ul>
        {getRenderedList()}
      </ul>
    </div>
  );

};
