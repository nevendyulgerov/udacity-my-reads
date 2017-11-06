import React from 'react';
import {Link} from 'react-router-dom';
import Book from './Book';

class Search extends React.Component {
  render = () => (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="trigger close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author"/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.props.books.map(book => (
            <li key={book.id}>
              <Book title={book.title} authors={book.authors} smallThumbnail={book.imageLinks.smallThumbnail}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Search;