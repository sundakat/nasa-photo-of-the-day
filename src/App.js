import React from 'react';
import List from './components/List';
import './App.css';
import styled from 'styled-components';

function App() {
  const App = styled.div`
		background: #000000;
		text-align: center;
	`;
  return (
    <App>
      {/* <p>Read through the instructions in the README.md file to build your NASA app! Have fun!</p>  🚀!*/}
      <List />
    </App>
  );
}

export default App;
