import React from 'react';
import Search from './components/Search.jsx';
import List from './components/List.jsx';
import regeneratorRuntime from 'regenerator-runtime';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      total: 0,
    };

    this.getEvents = this.getEvents.bind(this);
  };

  async getEvents(page = 1) {
    console.log('switch to page: ', page);
    const response = await fetch(`http://localhost:3000/events?_page=${page}&_limit=10&q=queen`);
    const events = await response.json();
    const total = response.headers.get('x-total-count');
    this.setState({events, total});
  };

  componentDidMount() {
    this.getEvents();
  };

  render() {
    return (
      <div>
       <Search />
       <List
          events={this.state.events}
          total={this.state.total}
          getEvents={this.getEvents}
        />
      </div>
    );
  };
};

export default App;

