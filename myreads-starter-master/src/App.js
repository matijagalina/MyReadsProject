import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import { Route, Link } from 'react-router-dom'
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => this.setState({
      books: data
    })
    )
  }

  render() {

    if (this.state.books.length === 0) {
      return null;
    }

    return (
      <div className="app">
        <Route path="/search" render={({ history }) => (
          <SearchBook
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
                />
                <BookShelf
                  title="Want to Read"
                  books={
                    this.state.books.filter(item => item.shelf === 'wantToRead')
                  }
                />
                <BookShelf
                  title="Read"
                  books={
                    this.state.books.filter(item => item.shelf === 'read')
                  }
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