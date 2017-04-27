import React from 'react'
import ReactDOM from 'react-dom'

import Person from './component/person'

const Hello = () => {
  return (
    <div>
      <h2>Hello</h2>
      <Person />
    </div>
  )
}

ReactDOM.render(<Hello />, document.querySelector('.container'))
