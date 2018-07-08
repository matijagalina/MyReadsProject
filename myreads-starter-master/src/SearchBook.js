import React, { Component } from 'react';
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class SearchBook extends Component {

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    })
    BooksAPI.search(this.state.query)
      .then(data => this.setState(state => ({
        books: data
      })))
  }

  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <input onChange={(event) => {
              this.updateQuery(event.target.value)
            }}
              type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.books ? this.state.books.map((item, index) => <Book key={index} book={item} />) : ''
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook