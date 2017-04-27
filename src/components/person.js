import React from 'react'
import Name from './name'

class Person extends React.Component {
  constructor(props) {
    super(props)

    this.refresh = this.refresh.bind(this)
  }

  componentDidMount() {
    setTimeout(this.refresh, 1000)
  }

  refresh() {
    this.setState({})    // invoke render
  }

  render() {
    console.info('render person')
    return (
      <div>
        <h3>person info</h3>
        <Name name={this.props.name || 'derek'}/>
      </div>
    )
  }
}

export default Person
