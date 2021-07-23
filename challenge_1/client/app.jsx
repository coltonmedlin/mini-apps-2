import React from 'react';
import Search from './components/Search.jsx';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };

    this.getEvents = this.getEvents.bind(this);
  }

  getEvents(page = 1) {
    fetch(`http://localhost:3000/events?_page=${page}&_limit=10`)
    .then(response => response.json())
    .then(data => {
      this.setState({events: data});
    })
    .catch(err => {
      console.log('error: ', err);
    })
  }

  componentDidMount() {
    this.getEvents();
  }

  render() {
    return (
      <div>
       <Search />
       <List events={this.state.events}/>
      </div>
    );
  }
}

export default App;

