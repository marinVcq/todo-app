import React from 'react';

/* Container */
import Todos from './container/Todos';

/* Theme and style */
import styled, {ThemeProvider} from "styled-components/macro";
import {light,dark} from "./abstract/theme.js";


function App({darkThemeEnabled, toggleTheme}) {
  return (
    <ThemeProvider theme={darkThemeEnabled === true ? dark  : light}>
      <AppDiv className="app" >
          <Todos darkThemeEnabled={darkThemeEnabled} toggleTheme={toggleTheme}/>
      </AppDiv>
    </ThemeProvider>
  );
}

const AppDiv = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
`

export default App;
