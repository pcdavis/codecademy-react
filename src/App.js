import React from 'react';
<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import BusinessList from './components/SearchBar/SearchBar';
>>>>>>> c9d54cce5fd128e59fc8cd3aac537683e5473f92

class App extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
            <h1>ravenous</h1>
            <SearchBar />
            <BusinessList businesses = {businesses} />
      </div>
=======
    <div className = "App">
      <h1>ravenous</h1>
      < SearchBar />
      < BusinessList />
    </div>
>>>>>>> c9d54cce5fd128e59fc8cd3aac537683e5473f92
    );
  }
}

export default App;
