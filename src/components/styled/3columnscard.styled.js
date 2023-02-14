import styled from "styled-components";

export const Styled3columnscard = styled.article`
    display: flex;
    flex-direction: row;
    width: 840px;
    height: 450px;
    @media screen and (max-width:960px){
        width: 95%;
        height: 90%;
    }
    @media screen and (max-width:600px){
        flex-direction: column;
        width: auto;
        height: auto;
    }
`
export const Previewcard = styled(Styled3columnscard)`
    flex-direction: column;
    width: 280px;
    background-color: ${(bg) => bg.$bgcolor};
    border-top-left-radius: ${(bordrads)=> bordrads.$desktoptopleft};
    border-top-right-radius: ${(bordrads)=> bordrads.$desktoptopright};
    border-bottom-right-radius: ${(bordrads)=> bordrads.$desktopbottomright};
    border-bottom-left-radius: ${(bordrads)=> bordrads.$desktopbottomleft};
    @media screen and (max-width:600px){
        width: auto;
        height: auto;
        margin:0 20px;
        border-top-left-radius: ${(bordrads)=> bordrads.$mobiletopleft};
        border-top-right-radius: ${(bordrads)=> bordrads.$mobiletopright};
        border-bottom-right-radius: ${(bordrads)=> bordrads.$mobilebottomright};
        border-bottom-left-radius: ${(bordrads)=> bordrads.$mobilebottomleft};
    }
`
export const CarIcon = styled.img`
    width: 60px;
    margin:40px 40px 30px;
`
export const Buttoncard = styled.button`
    margin:50px 40px 40px;
    width: 132px;
    height: 43px;
    border-radius: 40px;
    border-style:none;
    background-color: var(--Very-light-gray-background-headings-buttons);
    font-size: .9rem;
    font-family: var(--button);
    color: ${(prop)=> prop.$color};
    &:hover{
        cursor: pointer;
        color: var(--Transparent-white-paragraphs);
        background-color: ${(prop)=> prop.$color};
        border-style:solid;
        border-color:var(--Transparent-white-paragraphs);
    }
`
export const Attribution = styled.div`
    display: flex;
    margin: 10px auto 10px;
    font-size: 10px;
    text-align: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px 20px 0;
    }
`
export const AttributionA = styled(Attribution)`
    color: hsl(228, 45%, 44%);
`