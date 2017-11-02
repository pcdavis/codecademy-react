import React from 'react';
import './SearchBar.css';

const sortByOptions= {
  "Best Match": 'best_match',
  "Highest Rated": 'rating',
  "Most Reviewed": 'review_count'
};

<<<<<<< HEAD
class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                  term: '',
                  locations: '',
                  sortBy: 'best_match'
                };
  };



  getSortByClass(sortByOption){
    if(this.state.sortBy === sortByOption){
      return 'active';
    }else {
      return '';
    }
  }
  handleSortByChange(sortByOption){

    this.setState({sortBy: sortByOption})
  }

  renderSortByOptions(){
      return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this,sortByOptionValue)}>{sortByOption}</li>
    }); // end of mapping that produces list of ways to search/filter results
  } // end of renderSortByOptions method

  render(){
    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
              <ul>
                {this.renderSortByOptions()}
              </ul>
            </div>
            <div className="SearchBar-fields">
              <input placeholder="Search Businesses" />
              <input placeholder="Where?" />
            </div>
          <div className="SearchBar-submit">
            <a>Lets Go</a>
          </div>
        </div> //End main div
    ); //end of return statement
  } // end render method

}; // enb of SearchBar component
=======
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

>>>>>>> c9d54cce5fd128e59fc8cd3aac537683e5473f92

export default SearchBar;
