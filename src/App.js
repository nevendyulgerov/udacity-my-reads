import React from 'react';
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import Search from './Search';
import BookshelvesOrganizer from './BookshelvesOrganizer';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookshelvesOrganizer title={`My Reads`} bookshelves={this.props.bookshelves} books={this.state.books}/>
        )}/>
        <Route path="/search" render={() => (
          <Search books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
