import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import GiphyList from './GiphyList';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const Container = styled.div`
  max-width: 56em;
  width: calc(100% - 2em);
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <GiphyList/>
      </Container>
    </>
  );
}

export default App;
