import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --white: #f5f5f5;
    --black: #000000;
    --lightGrey: #666360;
    --green: #219653;
    --lightgreen: #eaf7f0;
    --logored: #eb5757;
    --red: #E60000;
    --grey: #E0E0E0
}

body {
    max-width: 100vw;
    overflow-x: hidden;
    display: flex;
    align-self: center;
}
`;
