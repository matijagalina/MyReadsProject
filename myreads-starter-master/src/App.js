import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
// import Book from './Book'
import { Route, Link } from 'react-router-dom'
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  saveShelfChange(bookId, shelf) {
    console.log(bookId);
    console.log(shelf);
    this.setState(state => ({
      books : state.books.concat([{
        book: bookId,
        shelf: shelf
      }])
    }))
  }

  render() {

    const shelfTitles = ['Currently Reading', 'Want to Read', 'Read']
    // BooksAPI.getAll().then(data => console.log(data))
    // BooksAPI.update(this.book, 'read').then(data => console.log(data))

    return (
      <div className="app">
        <Route path="/search" render={({ history }) => (
          <SearchBook
            shelfUpdate={(bookId, shelf) => this.saveShelfChange(bookId, shelf)}
          />
        )} />
        <Route exact path='/' render={({history}) => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                  shelfTitles.map((title) => {
                    <BookShelf shelfName={title} />
                  })
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