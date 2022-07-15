import React from 'react';
import Todos from './container/Todos'

/* Theme and style */
import {light,dark} from "./abstract/theme.js";
import styled, {ThemeProvider} from "styled-components/macro";


function App() {

  return (
    <ThemeProvider theme={light}>
      <AppDiv className="app">
        <Todos/>
      </AppDiv>
    </ThemeProvider>
  );
}

const AppDiv = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
`

export default App;
