import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBook extends Component {

  state = {
    query: '',
    books: []
  };

  handleInput(value) {
    this.setState({
      query: value
    });
    this.fetchBooks()
  }

  sendShelfChange(book, shelf) {
    this.props.sendShelfChange(book, shelf)
  }

  fetchBooks() {
    if (!!this.state.query) {
      BooksAPI.search(this.state.query).then(data => {
        if (!!data.error) {
          this.setState({
            books: []
          });
        } else {
          data.map(item => (
            BooksAPI.get(item.id).then(data => this.setState(state => ({
              books: state.books.concat([data])
            })))
          ))
        }
      })
    }
  }

  render() {

    const { query, books } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.handleInput(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              (!!query && books.length !== 0) && books.map((book, index) => (
                <Book key={index} book={book} sendShelfChange={(book, shelf) => {this.sendShelfChange(book, shelf)}}/>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook