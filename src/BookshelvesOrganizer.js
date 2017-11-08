import React from 'react';
import {Link} from 'react-router-dom';
import Bookshelf from './Bookshelf';
import * as utils from './utils';

class BookshelvesOrganizer extends React.Component {
  render = () => (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {this.props.bookshelves.map(bookshelf => (
            <Bookshelf
              key={bookshelf}
              name={bookshelf.name}
              title={utils.titlize(bookshelf)}
              bookshelves={this.props.bookshelves}
              books={this.props.books.filter(book => book.shelf === utils.toCamelCase(bookshelf))}
              updateBook={this.props.updateBook}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" className="trigger search">Add a book</Link>
      </div>
    </div>
  );
}

export default BookshelvesOrganizer;
