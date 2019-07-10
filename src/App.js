import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import GiphyList from './GiphyList';
import { ReactComponent as Giftify } from './imgs/gif.svg';

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
const Header = styled.h1`
  margin-top: 2em;
  margin-bottom: 2em;
  display: flex;
  align-items: center;
`;
const Footer = styled.footer`
  margin-top: 8em;
  margin-bottom: 1em;
  text-align: center;
  opacity: 0.8;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header><Giftify height="50" width="50" />tifymm</Header>
      </Container>

      <Container>
        <GiphyList/>
      </Container>
      
      <Footer>
        <Container>
          &copy; giftifymm
        </Container>
      </Footer>
    </>
  );
}

export default App;
