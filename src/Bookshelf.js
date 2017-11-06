import React from 'react';
import Book from './Book';

class Bookshelf extends React.Component {
  render = () => (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.title}</h2>
      <div className="bookshelf-books">
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

export default Bookshelf;