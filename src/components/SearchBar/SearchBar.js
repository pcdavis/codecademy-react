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
                  location: '',
                  sortBy: 'best_match'
                };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
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
    console.log(this.state.term)
  }

  handleLocationChange(event){
    this.setState({location: event.target.value})
    console.log(this.state.location)
  }

  handleSearch(event){
    this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
    event.preventDefault(); // prevents the default action that happens when a link is clicked
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
          <div  className="SearchBar-submit">
            <a onClick={this.handleSearch}>Lets Go</a>
          </div>
        </div> //End main div
    ); //end of return statement
  } // end render method

}; // enb of SearchBar component

export default SearchBar;
