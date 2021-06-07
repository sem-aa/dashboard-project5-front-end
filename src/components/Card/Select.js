// import React, { Component } from 'react'
// import Select from 'react-select'



//  const MyComponent = () => (
//   <Select options={options} />
// )

// export  default MyComponent

import React from 'react';
import chroma from 'chroma-js';
import Select from 'react-select';



const optionsColors = ['Easy', 'Normal', 'Normal']
// const difficulty = 


const dot = (color = chroma('#D4F880') ) => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});


export default () => (
  <Select
    defaultValue={[2]}
    label="Single select"
    options={optionsColors}

  />
);