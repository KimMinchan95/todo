import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset}
    a {
        text-decoration: none;
        color: inherit;
    };
    * {
        box-sizing: border-box;
    };
    body {
        font-family: 'Jua', sans-serif;
        background-color: #f9f9f9;
    };
    #content {
        padding: 50px 0 25px 200px;
    }
`;

export default globalStyles;
