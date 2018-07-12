import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import { Route, Link } from 'react-router-dom'
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  saveShelfChange(bookId, shelf) {
    this.setState(state => (
      {
        books: state.books.concat([{
          book: bookId,
          shelf: shelf
        }])
      }
    ))
  }


  render() {

    return (
      <div className="app">
        <Route path="/search" render={({ history }) => (
          <SearchBook
            shelfUpdate={(bookId, shelf) => this.saveShelfChange(bookId, shelf)}
          />
        )} />
        <Route exact path='/' render={({ history }) => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  title="Currently Reading"
                  books={
                    this.state.books.filter(item => (item.shelf === 'currentlyReading'))
                  }
                  shelfUpdate={(bookId, shelf) => this.saveShelfChange(bookId, shelf)}
                />
                <BookShelf
                  title="Want to Read"
                  books={
                    this.state.books.filter(item => (item.shelf === 'wantToRead'))
                  }
                  shelfUpdate={(bookId, shelf) => this.saveShelfChange(bookId, shelf)}
                />
                <BookShelf
                  title="Read"
                  books={
                    this.state.books.filter(item => (item.shelf === 'read'))
                  }
                  shelfUpdate={(bookId, shelf) => this.saveShelfChange(bookId, shelf)}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}
        />
      </div>
    )
  }
}

export default BooksApp