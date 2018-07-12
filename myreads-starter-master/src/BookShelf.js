import React, { Component } from 'react';
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class BookShelf extends Component {

  books = [];

  componentWillMount() {
    this.props.books.map(item => (
      BooksAPI.get(item.book).then(data => this.books.push(data))
    ))
  }

  sendShelfChange(bookId, shelf) {
    this.props.shelfUpdate(bookId, shelf)
  }

  render() {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.books.map((item, index) => (
                <Book key={index} book={item} endShelfChange={(book, shelf) => {this.sendShelfChange(book.id, shelf)}}/>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf