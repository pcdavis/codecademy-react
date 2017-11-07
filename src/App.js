import React from 'react';
import './App.css';
import logo from './logo.svg';

import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
      business,
      business,
      business,
      business,
      business,
      business
    ];
      console.log(businesses);

class App extends React.Component {

  mysearchYelp(term,location,sortBy){
    console.log("search for "+ term);
    console.log(term);
    console.log(location);
    console.log(sortBy);
  }

  render() {
    return (
      <div className="App">
            <h1>ravenous</h1>
            <SearchBar searchYelpProp={this.mysearchYelp} />
            <BusinessList businesses = {businesses} />
      </div>
    );
  }
}

export default App;
