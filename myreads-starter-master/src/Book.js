import React, { Component } from 'react';

class Book extends Component {

  handleChange(value) {
    this.props.sendShelfChange(this.props.book, value);
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover">
              <img src={this.props.book.imageLinks.smallThumbnail} style={{ width: 128, height: 193 }} alt={this.props.book.title} />
            </div>
            <div className="book-shelf-changer">
              <select
                value={this.props.book.shelf || "none"}
                onChange={(event) => this.handleChange(event.target.value)} >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">
            {this.props.book.authors}
          </div>
        </div>
      </li>
    )
  }
}

export default Book