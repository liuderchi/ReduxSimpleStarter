import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyCsXdbPrzBFmlIYc017K28qw6LiH8Hm-iM'

// create an functional component App
class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'nba playoff'}, videos => {
      this.setState({ videos })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }

}

// render component into DOM with specified DOM target
ReactDOM.render(<App />, document.querySelector('.container'))
