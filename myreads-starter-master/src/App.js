import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import { Route, Link } from 'react-router-dom'
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {
    books: [],
    bookFiles: []
  }

  saveShelfChange(bookId, shelf) {
    console.log(bookId);
    console.log(shelf);
    this.setState(state => ({
      books: state.books.concat([{
        book: bookId,
        shelf: shelf
      }])
    }))
  }

  getBooks() {
    this.state.books.map(item => (
      BooksAPI.get(item.book).then(data => this.setState(state => ({
        bookFiles: state.bookFiles.concat([data])
      })))
    ))
  }

  componentDidMount() {
    this.getBooks()
  }


  render() {

    // BooksAPI.getAll().then(data => console.log(data))
    // BooksAPI.update(this.book, 'read').then(data => console.log(data))

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
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {/* {
                        this.state.bookFiles.map((item, index) => (
                          <Book key={index} book={item} />
                        ))
                      } */}
                    </ol>
                  </div>
                </div>
                <BookShelf
                title="Want to Read"
                books = {
                  this.state.books.filter(item => (item.shelf === 'wantToRead' ))
                }
                />
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

                    </ol>
                  </div>
                </div>
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