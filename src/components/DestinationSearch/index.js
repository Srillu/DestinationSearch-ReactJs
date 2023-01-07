// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const destinationResults = destinationsList.filter(eachDestinationItem =>
      eachDestinationItem.name
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div>
          <h1>Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              placeholder="search"
              className="input-box"
            />
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
        </div>
        <ul>
          {destinationResults.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              destinationDetails={eachDestination}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
