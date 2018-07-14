import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import { Route, Link } from 'react-router-dom'
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {
    books: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(data => this.setState({
        books: data
      }))
      .then(localStorage.setItem('my-reads.books', JSON.stringify(this.state.books)))
  }



  handleShelfChange(book, shelf) {
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(item => item.id !== book.id).concat([book])
        }))
      })
  }

  render() {

    if (this.state.books.length === 0) {
      return null;
    }

    return (
      <div className="app">
        <Route path="/search" render={({ history }) => (
          <SearchBook
          searchedValue = {(value) => this.setState({
            query: value
          })}
          query = {this.state.query}
          sendShelfChange={(book, shelf) => { this.handleShelfChange(book, shelf) }}
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
                    this.state.books.filter(item => item.shelf === 'currentlyReading')
                  }
                  sendShelfChange={(book, shelf) => { this.handleShelfChange(book, shelf) }}
                />
                <BookShelf
                  title="Want to Read"
                  books={
                    this.state.books.filter(item => item.shelf === 'wantToRead')
                  }
                  sendShelfChange={(book, shelf) => { this.handleShelfChange(book, shelf) }}
                />
                <BookShelf
                  title="Read"
                  books={
                    this.state.books.filter(item => item.shelf === 'read')
                  }
                  sendShelfChange={(book, shelf) => { this.handleShelfChange(book, shelf) }}
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