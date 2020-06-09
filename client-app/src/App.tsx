import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header as='h2'>
    <Icon name='users' />
    <Header.Content>ReactApp</Header.Content>
    </Header>
    </div>
  );
}

export default App;
