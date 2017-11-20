import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './component/home/navbar';

const App = () => (
  <MuiThemeProvider>
    <NavBar />
  </MuiThemeProvider>
);

export default App;

