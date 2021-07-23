import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    this.handleChange = this.handelChange.bind(this);
  };

  handelChange(event) {
    this.setState({query: event.target.value}, () => {
      console.log('query: ', this.state.query)
    })
  }

  render() {
    return(
      <div>
        <input type='text' placeholder="search" value={this.state.query} onChange={this.handleChange}></input>
      </div>
    )
  };
};


export default Search;