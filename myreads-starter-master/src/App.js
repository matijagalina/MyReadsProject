import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import { Route, Link } from 'react-router-dom'
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {
    books: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

  saveShelfChange(book, shelf) {
    // this.setState(state => (
    //   {
    //     books: state.books.concat([{
    //       book: bookId,
    //       shelf: shelf
    //     }])
    //   }
    // ))
    BooksAPI.update(book, shelf).then(data => this.setState({
      books: data
    }))
  }


  render() {

    console.log(this.state.books)

    return (
      <div className="app">
        <Route path="/search" render={({ history }) => (
          <SearchBook
            shelfUpdate={(book, shelf) => this.saveShelfChange(book, shelf)}
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
                    this.state.books.currentlyReading.filter(item => item)
                  }
                  shelfUpdate={(bookId, shelf) => this.saveShelfChange(bookId, shelf)}
                />
                <BookShelf
                  title="Want to Read"
                  books={
                    this.state.books.wantToRead.filter(item => item)
                  }
                  shelfUpdate={(bookId, shelf) => this.saveShelfChange(bookId, shelf)}
                />
                <BookShelf
                  title="Read"
                  books={
                    this.state.books.read.filter(item => item)
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