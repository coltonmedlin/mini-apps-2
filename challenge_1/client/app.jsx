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
      page: 1,
      query: '',
    };

    this.getEvents = this.getEvents.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  };

  async getEvents() {
    const response = await fetch(`http://localhost:3000/events?_page=${this.state.page}&_limit=10&q=${this.state.query}`)
    const events = await response.json();
    const total = response.headers.get('x-total-count');
    this.setState({events, total});
  };

  componentDidMount() {
    this.getEvents();
  };

  updatePage(page) {
    this.setState({page}, () => {
      this.getEvents();
    });
  };

  updateQuery(query) {
    //new query resets to first page of results
    this.setState({page: 1, query}, () => {
      this.getEvents();
    });
  };

  render() {
    return (
      <div>
       <Search updateQuery={(arg) => {this.updateQuery(arg)}}/>
       <List
          events={this.state.events}
          total={this.state.total}
          updatePage={(arg) => {this.updatePage(arg)}}
        />
      </div>
    );
  };
};

export default App;

