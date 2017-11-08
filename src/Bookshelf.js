import React from 'react';
import Book from './Book';

class Bookshelf extends React.Component {
  render = () => (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.title}</h2>
      <div className="bookshelf-books">
        {this.props.books.length > 0 && (
          <ol className="books-grid">
            {this.props.books.map(book => (
              <li key={book.id}>
                <Book
                  id={book.id}
                  title={book.title}
                  authors={book.authors}
                  shelf={book.shelf}
                  smallThumbnail={book.imageLinks.smallThumbnail}
                  bookshelves={this.props.bookshelves}
                  updateBook={this.props.updateBook}
                />
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default Bookshelf;
