import React from 'react'
import './App.css'
import SearchBook from './SearchBook'
import BookList from './BookList'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {

  }

  listNames = ['Currently reading', 'Want to read', 'Read']
  shelfNames= ['currentlyReading', 'wantToRead', 'read']

  render() {

    return (
      <div className="app">
        <Route path="/search" render={({ history }) => (
          <SearchBook />
        )} />
        <Route exact path='/' render={({ history }) => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                  this.shelfNames.map((item, index) =>
                    <BookList key={index} listName={this.listNames[index]} shelfName={item}/>
                  )
                }
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