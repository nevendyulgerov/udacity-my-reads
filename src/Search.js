import React from 'react';
import {Link} from 'react-router-dom';
import Book from './Book';
import {search} from './BooksAPI';
import {bufferedEvent, isArray} from './utils';

class Search extends React.Component {
  // TODO: Add type checking

  state = {
    query: '',
    searchableBooks: []
  };

  searchBooks = (callback) => search(this.state.query, 40).then(books => {
    this.setState({ searchableBooks: books });
    callback();
  });

  setSearchQuery = (query) => {
    this.setState({ query: query.trim() });
  };

  render = () => {
    const buffer = bufferedEvent();
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="trigger close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => {
                e.persist();

                // buffer 'on change' event and allow event handling after 500 milliseconds of idle state
                buffer('buffered-search', 500, () => {
                  const searchBooksBar = e.target.closest('.search-books-bar');

                  // turn on loading icon
                  searchBooksBar.classList.add('loading');

                  // set query
                  this.setSearchQuery(e.target.value);

                  // search in available books, then turn off loading
                  this.searchBooks(() => searchBooksBar.classList.remove('loading'));
                });
              }}
            />
            <span className="icon loading"></span>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {isArray(this.state.searchableBooks) && this.state.searchableBooks.map(book => {
              const existingBooks = this.props.books.filter(existingBook => existingBook.id === book.id);
              return (
                <li key={book.id}>
                  <Book
                    id={book.id}
                    title={book.title}
                    authors={book.authors}
                    shelf={existingBooks.length > 0 ? existingBooks[0].shelf : ''}
                    smallThumbnail={book.imageLinks.smallThumbnail}
                    bookshelves={this.props.bookshelves}
                    updateBook={this.props.updateBook}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
