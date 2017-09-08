import React, { Component } from "react"; // {Component} pulls Component out of "react" with that variable name

// Give searchBar all functionality from React.Component
class SearchBar extends Component {
  constructor(props) {
    // Calling the parent
    super(props);

    this.state = { term: "" };
  }

  // Every class based component must have a render method
  render() {
    return (
      <div className="search-bar">
        <input
          //controlled component. When user types it doesn't actually change value in input. Only fires an event. Value is always = to state.
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  // This code is not es6. The above is how an es6 function is called
  // on or handle + name of element + name of event
  // event object comes with each event handler
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }
}

export default SearchBar;
