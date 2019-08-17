import React, { Component } from 'react';
// import './Home.css';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { connect } from 'react-redux';

class Home extends Component {
  // static async getInitialProps({ req, res, match, history, location, ...ctx }) {
  //   return { whatever: 'stuff' };
  // }

  render() {
    return (
      <div className="Home">
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Link to="/about">About -></Link>
      </div>
    );
  }
}

const mapStateToProps = props => {
  console.log(props);
};

export default Home;
