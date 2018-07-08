import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class BookList extends Component {

  state = {
    shelf: this.props.shelfName,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(response => response.filter(item =>
      item.shelf === this.state.shelf
    )).then(data => this.setState(state => ({
      books: data
    })))
  }

  render() {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.listName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.state.books.map((item, index) =>
                <Book key={index} book={item} />
              )
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookList