import React from 'react';
import './SearchBar.css';

const sortByOptions= {
  "Best Match": 'best_match',
  "Highest Rated": 'rating',
  "Most Reviewed": 'review_count'
};

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                  term: '',
                  locations: '',
                  sortBy: 'best_match'
                };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
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

  handleTermChange(event){
    this.setState({term: event.target.value})
  }

  handleLocationChange(event){
    this.setState({locations: event.target.value})
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
              <input onChange = {this.handleTermChange} placeholder="Search Businesses" />
              <input onChange = {this.handleLocationChange} placeholder="Where?" />
            </div>
          <div className="SearchBar-submit">
            <a>Lets Go</a>
          </div>
        </div> //End main div
    ); //end of return statement
  } // end render method

}; // enb of SearchBar component

export default SearchBar;
