import styled from "styled-components";

export const Container = styled.div`
    --Bright-orange: hsl(31, 77%, 52%);
    --Dark-cyan: hsl(184, 100%, 22%);
    --Very-dark-cyan: hsl(179, 100%, 13%);
    --Transparent-white-paragraphs: hsla(0, 0%, 100%, 0.75);
    --Very-light-gray-background-headings-buttons: hsl(0, 0%, 95%);
    --headings:'Big Shoulders Display';
    --description:'Lexend Deca';
    --button:'Lexend Deca';
    --heading-weight:700;
    --desc-button-weight:400;
    display:flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100wh;
    margin: auto;
    font-size: 15px;
    align-items: center;
    justify-content: center;
    background-color: var(--Very-light-gray-background-headings-buttons);
    @media screen and (max-width:960px) {
        margin: 20px auto;
    }
    @media screen and (max-width:600px) {
        margin: 20px auto;
    }
    h1{
        font-size: 2.25rem;
        font-family: var(--headings);
        font-weight: var(--heading-weight);
        text-transform: uppercase;
        color: var(--Very-light-gray-background-headings-buttons);
        margin:0 40px;
    }
    p{
        font-size: .9em;
        font-family: var(--description);
        font-weight: var(---desc-button-weight);
        color: var(--Transparent-white-paragraphs);
        margin: 20px 40px;
        line-height: 1.4rem;
    }
`