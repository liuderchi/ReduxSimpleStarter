import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyCsXdbPrzBFmlIYc017K28qw6LiH8Hm-iM'

// hit youtube API
YTSearch({key: API_KEY, term: 'nba playoff'}, (data) => {
  console.log(data);
})

// create an functional component App
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
  // NOTE JSX is transpiled into React.createElement(...)
}

// render component into DOM with specified DOM target
ReactDOM.render(<App />, document.querySelector('.container'))
