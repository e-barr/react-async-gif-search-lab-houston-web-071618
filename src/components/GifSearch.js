import React, { Component } from 'react'

class GifSearch extends Component {
  constructor() {
    super()

    this.state = {
      value: ''
    }
  }

  updateGifSearchTerm = event => {
    console.log(`updateSearchTerm entered! term is ${event.target.value}`)
    this.setState({value: event.target.value})
  }

  render () {
    return (
      <div>
          <input type="text" value={this.state.value} onChange={this.updateGifSearchTerm} />

          <button onClick={() => this.props.updateSearchTerm(this.state.value)}>Submit</button>
      </div>
    )
  }
}

export default GifSearch
