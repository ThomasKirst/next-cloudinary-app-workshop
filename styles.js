import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  main {
    width: 20rem;
    margin: 0 auto;
  }

  button[type='submit'] {
    font-size: 1.5rem;
    padding: 0.25rem 1rem;
    background-color: rebeccapurple;
    border: none;
    border-radius: 0.25rem;
    margin-top: 1rem;
    color: white;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }
`;
