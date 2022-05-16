import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 :root {

    /* ========== Colors ==========*/
    --text-color:  hsl(0, 0%, 41%);
    /* ========== Fonts and Typography ==========*/
    --big-font-size: 2rem;
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
 }

 *,
 ::before,
 ::after {
     padding: 0;
     margin: 0;
     box-sizing: border-box;
 }

 body {
    font-family: 'Epilogue', sans-serif;
    line-height: 1.5;
 }

 img {
     display: block;
     width: 100%;
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
`;
