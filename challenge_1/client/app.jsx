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
      page: 1
    };

    this.getEvents = this.getEvents.bind(this);
  };

  async getEvents(page = 1) {
    const response = await fetch(`http://localhost:3000/events?_page=${page}&_limit=10`);
    const events = await response.json();
    const total = response.headers.get('x-total-count');
    this.setState({events, total, page});
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
          page={this.state.page}
        />
      </div>
    );
  };
};

export default App;

