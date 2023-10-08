import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle `
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    *,
    *::before,
    *::after {
    box-sizing: inherit;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    ul {
        list-style: none;
        list-style: none;
        line-height: 1.25;
        padding-top: 20px;
    }

    p {
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    input {
        margin: 10px;
    }

    h1 {
        text-align: center;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    span {
        font-weight: bold;
    }
`
