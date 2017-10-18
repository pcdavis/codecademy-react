import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
};

class SearchBar extends React.Component{
   renderSortByOptions(){
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key = {sortByOptionValue}> {sortByOption}</li>
    });
  }
  render(){
    return (
      <div className="SearchBar">
      <div className="SearchBar-sort-options">
      <ul>
      {this.renderSortByOptions()}  // This is probably wrong. I'm supposed to call the method and I'm assuming it retuns li items to poplate the ul
      </ul>
      </div>
      <div className="SearchBar-fields">
      <input placeholder="Search Businesses" />
      <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
      <a>Lets Go</a>
      </div>
      </div>

    )
  }
};


export default SearchBar;
