/* eslint-disable import/extensions */
import React, { Component } from 'react';
import axios from 'axios';

import Fonts from './assets/Fonts.jsx';
import IdFetcher from './components/IdFetcher.jsx';
import MidPageImages from './components/MidPageImages.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      descriptions: [],
    };
    this.fetchId = this.fetchId.bind(this);
  }

  componentDidMount() {
    this.fetchId(window.location.pathname === '/' ? '/1' : window.location.pathname);
  }

  fetchId(id) {
    axios.get(`/api/midpageimages${id}`)
      .then(({ data }) => {
        const urls = data.urls.map((i) => i.url);
        const descriptions = data.descriptions.map((j) => j);
        this.setState({ urls, descriptions });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const {
      urls,
      descriptions,
    } = this.state;
    return (
      <div>
        <Fonts />
        <MidPageImages
          urls={urls}
          descriptions={descriptions}
        />
        {/* <IdFetcher fetchId={this.fetchId} /> */}
      </div>
    );
  }
}

export default App;
