import React, { Component } from 'react';
import Book from './Book'


class BookList extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.listName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <Book />
            <Book />
          </ol>
        </div>
      </div>
    )
  }
}

export default BookList