import React from 'react';
import { Route } from 'react-router-dom';
import Search from './Search';
import BookshelvesOrganizer from './BookshelvesOrganizer';
import * as BooksAPI from './BooksAPI';
import './App.css';


class BooksApp extends React.Component {
  // TODO: Add type checking

  state = {
    books: []
  };

  setBooks = () => BooksAPI.getAll().then(books => this.setState({ books }));

  updateBook = (book, shelf) => BooksAPI.update(book, shelf).then(this.setBooks);

  componentDidMount = () => this.setBooks();

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookshelvesOrganizer
            books={this.state.books}
            bookshelves={this.props.bookshelves}
            updateBook={this.updateBook}
          />
        )}/>
        <Route path="/search" render={() => (
          <Search
            books={this.state.books}
            bookshelves={this.props.bookshelves}
            updateBook={this.updateBook}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
