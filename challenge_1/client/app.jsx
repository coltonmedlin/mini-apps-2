import React from 'react';
import Search from './components/Search.jsx';
import List from './components/List.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
       <Search />
       <List />
      </div>
    );
  }
}

export default App;

