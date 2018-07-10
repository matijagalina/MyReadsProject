import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SearchBook extends Component {

  state = {
    query: ''
  };

  handleInput(value) {
    this.setState({
      query: value.trim()
    });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.handleInput(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {

            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook