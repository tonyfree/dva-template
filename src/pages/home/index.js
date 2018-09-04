import React from 'react';
import { connect } from 'dva';
import './index.css';
import MainLayout from '../../components/MainLayout/MainLayout';

@connect()
class IndexPage extends React.Component {
  render () {
    const { location } = this.props
    return (
      <MainLayout location={location}>
        <div className="home-normal">
          <h1 className="home-title">Yay! Welcome to dva!</h1>
          <div className="home-welcome" />
          <ul className="home-list">
            <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
            <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
          </ul>
        </div>
      </MainLayout>
    );
  }
}

IndexPage.propTypes = {
};

export default IndexPage;
