import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
const URL = 'http://api.giphy.com/v1/gifs/search?q='
const API_KEY = '&api_key=dc6zaTOxFJmzC&rating=g'

class GifListContainer extends Component {
  constructor() {
    super()

    this.state = {
      currentSearchTerm: '',
      firstThreeGifs: []
    }

  }

  updateSearchTerm = term => {
    this.setState({currentSearchTerm: term})
    fetch(URL + term + API_KEY)
      .then(resp => resp.json())
      .then(resp => this.setState({firstThreeGifs: resp.data.slice(0, 3)}))
  }

  render() {
    return (
      <div>
        <GifSearch updateSearchTerm={this.updateSearchTerm} />
        {this.state.firstThreeGifs !== [] && this.state.currentSearchTerm !== '' ? <div><GifList firstThreeGifs={this.state.firstThreeGifs} /></div> : <p>Please enter a search term above</p>}
    </div>
    )
  }
}

export default GifListContainer
