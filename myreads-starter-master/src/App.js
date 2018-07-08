import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import BookList from './BookList'
import { Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {

  }

  render() {
    BooksAPI.getAll().then(response => response.filter(item =>
      item.shelf === 'currentlyReading'
    )).then(data => console.log(data))
    return (
      <div className="app">
        <Route path="/add-book" render={({ history }) => (
          <SearchBook />
        )} />
        <Route exact path='/' render={({ history }) => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookList/>
                <BookList/>
                <BookList/>
              </div>
            </div>
            <div className="open-search">
              <Link to="/add-book">Add a book</Link>
            </div>
          </div>
        )}
        />
      </div>
    )
  }
}

export default BooksApp