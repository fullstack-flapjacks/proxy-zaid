import React from 'react';

//title section of the component
const Title = (props) => {
  return (
    <div> 
      <h1 style={{'text-align': 'center', marginTop: '15px', marginBottom: '15px', marginRight: '300px', marginLeft: '30px', borderBottom: '1px solid black'}}>{props.restaurant.name}</h1>
    </div>
  )
};


export default Title;
