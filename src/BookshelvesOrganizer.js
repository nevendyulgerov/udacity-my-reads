import React from 'react';
import {Link} from 'react-router-dom';
import Bookshelf from './Bookshelf';

class BookshelvesOrganizer extends React.Component {
  render = () => (
    <div className="list-books">
      <div className="list-books-title">
        <h1>{this.props.title}</h1>
      </div>
      <div className="list-books-content">
        <div>
          {this.props.bookshelves.map(bookshelf => (
            <Bookshelf key={bookshelf} title={bookshelf.split('-').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ')} books={this.props.books} name={bookshelf}/>
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