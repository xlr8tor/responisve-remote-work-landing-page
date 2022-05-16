import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 :root {

    /* ========== Colors ==========*/
    --body-color: hsl(0, 0%, 98%);
    --text-color:  hsl(0, 0%, 41%);
    --border-color: hsl(0, 0%, 41%);
    --boder-hover-color: hsl(0, 0%, 8%);

    /* ========== Fonts and Typography ==========*/
    --big-font-size: 2.2rem;
    --h1-font-size: 1.5rem;
     /* ========== Fonts Weights ==========*/
    --font-size-medium: 500;
    --font-size-bold: 700;

    /* Margin Bottom */
    --mb-0-25: 0.25rem;
    --mb-0-5: 0.5rem;
    --mb-0-75: 0.75rem;
    --mb-1: 1rem;
    --mb-1-5: 1.5rem;
    --mb-2: 2rem;
    --mb-2-5: 2.5rem;
    --mb-3: 3rem;

    @media (min-width: 728px){
        --big-font-size: 4rem;
    }
 }

 *,
 ::before,
 ::after {
     padding: 0;
     margin: 0;
     box-sizing: border-box;
 }

html {
    height: 100%;
}
 body {
     min-height: 100%;
     background-color: var(--body-color);
    font-family: 'Epilogue', sans-serif;
    line-height: 1.5;
 }

 ul {
      list-style: none;
  }

 img {
     display: block;
     width: 100%;
 }

 button {
     outline: none;
     padding: 1rem 1.5rem;
     border: 1px solid var(--border-color);
     border-radius: .825rem;
     background-color: transparent;
     cursor: pointer;
 }

button:hover {
    border: 1px solid var(--boder-hover-color);
}

a {
    text-decoration: none;
    color: var(--text-color);
}

a:hover {
    color: var(--boder-hover-color);
}

 /* Resuseable classes  */
 .container {
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
 }

 .grid {
     display: grid;
     grid-gap: 1.5rem;
   }

@media (min-width: 728px){
    .container {
        margin-left: auto;
        margin-right: auto;
   }
   }
`;
