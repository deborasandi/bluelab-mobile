import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './App.css'
import Routes from './routes'
import ButtonAppBar from './componentes/buttonAppBar'
import MenuList from './componentes/menuList'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1b4965",
    },
    secondary: {
      main: "#5fa8d3",
    },
  },
});

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <ButtonAppBar title="Blue Digital Lab" user="Débora" />

        <div className="Content">
          <BrowserRouter>
            <MenuList />
            <Routes />
          </BrowserRouter>
        </div>

      </MuiThemeProvider >
    </div>
  );
}

export default App;
