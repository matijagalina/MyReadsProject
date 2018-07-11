import React, { Component } from 'react';
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class BookShelf extends Component {

  books = [];

  componentDidMount() {
    this.props.books.map(item => (
      BooksAPI.get(item.book).then(data => this.books.push(data))
    ))
  }

  render() {
    console.log(this.books)

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.books.map((item, index) => (
                <Book key={index} book={item} />
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf