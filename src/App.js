import React from 'react';
import './App.css';
import logo from './logo.svg';

import BusinessList from './components/BusinessList/BusinessList';
import Business from './components/Business/Business';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      businesses:[]
    };//end of states
    this.mysearchYelp = this.mysearchYelp.bind(this);
  }

  mysearchYelp(term,location,sortBy){
    Yelp.search(term,location,sortBy).then((businesses) => {
      this.setState({businesses: businesses})
    })
  }

  render() {
    return (
      <div className="App">
            <h1>ravenous</h1>
            <SearchBar searchYelpProp={this.mysearchYelp} />
            <BusinessList businesses = {this.state.businesses} />
      </div>
    );
  }
}

export default App;
