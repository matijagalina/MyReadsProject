import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import Book from './Book'
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
        <Route exact path='/' render={({ }) => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <Book />
                      <Book />
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <Book />
                      <Book />
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <Book />
                      <Book />
                      <Book />
                    </ol>
                  </div>
                </div>
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