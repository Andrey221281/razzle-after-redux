import React from 'react';
import RedTest from '../../RedTest';
import { connect } from 'react-redux';

const Home = ({ books }) => {
  if (!books) {
    loading;
  }
  return (
    <div>
      {books.map(book => {
        return (
          <div key={book.id}>
            <div>{book.name}</div>
            <div>{book.prise}</div>
          </div>
        );
      })}
      {/* <RedTest /> */}
    </div>
  );
};

const mapStateToProps = ({ books }) => {
  return { books };
};

export default connect(mapStateToProps)(Home);
