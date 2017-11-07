import React from 'react';
import * as utils from './utils';

class Book extends React.Component {
  // TODO: Add type checking

  render = () => (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.smallThumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select defaultValue={this.props.shelf || 'none'} onChange={(e) => this.props.updateBook({id: this.props.id}, e.target.value)}>
            <option value="none" disabled>Move to...</option>
            {this.props.bookshelves.map(bookshelf => (
              <option key={bookshelf} value={utils.toCamelCase(bookshelf)}>{utils.titlize(bookshelf)}</option>
            ))}
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{this.props.title && this.props.title}</div>
      <div className="book-authors">{this.props.authors && this.props.authors.join(', ')}</div>
    </div>
  );
}

export default Book;