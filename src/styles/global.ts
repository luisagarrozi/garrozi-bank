import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #f0f2f5;
    --blue: #5429cc;
    --bluelight: #6933FF;
    --green: #33CC95;
    --yellow: #E4E849;
    --shape: #ffffff;
    --titulo: #363F5F;
    --textos: #969CB2;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    @media (max-width: 1080px) {
        // Boas práticas: % funciona melhor do que px para acessibilidade
        font-size: 93.75%; // a fonte padrão é 16px, 93.75% é exatamente 15px
    }
    @media (max-width: 720px) {
        font-size: 87.5%; // exatamente 14px
    }

}

body {
background: var(--background);
//Deixar as fontas mais nítidas:
-webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
// Input, textarea e button por padrão não importam a fonte do body
// então precisa manualmente colocar a fonte para todos
font-family: 'Poppins', sans-serif;
font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
`