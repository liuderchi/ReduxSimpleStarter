import React from 'react'

const Name = (props) => {
  console.info('render name')
  return (
    <p>Name: {props.name}</p>
  )
}

export default Name
