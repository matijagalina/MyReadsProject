import React, { Component } from 'react';

class ShelfChanger extends Component {

  handleChange(shelf) {

  }

  render() {

    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.book || "none"}
          onChange={(event) => this.handleChange(event.target.value)} >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger;