import React, { Component } from 'react';
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class BookShelf extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    this.props.books.map(item => (
      BooksAPI.get(item.id).then(data => this.setState(state => ({
        books: state.books.concat([data])
      })))
    ))
  }

  sendShelfChange(book, shelf) {
    this.props.sendShelfChange(book, shelf)
  }

  render() {

    if (this.state.books.length === 0) {
      return null;
    }

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.state.books.length > 0 && this.state.books.map((item, index) => (
                <Book key={index} book={item} sendShelfChange={(book, shelf) => {this.sendShelfChange(book, shelf)}}/>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf