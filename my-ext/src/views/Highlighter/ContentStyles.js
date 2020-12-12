import styled, { css, createGlobalStyle } from 'styled-components';

export const HighlighterWrapper = styled.div`
    width: 500px;
    background-color: #fffcd5;
    position: fixed;
    ${props => console.log(props.top)}
    top: ${props => props.top};
    left: ${props => props.left};
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Comfortaa', cursive;

    & > *, *::before, *::after {
    box-sizing: border-box;
  }

`;

export const Title = styled.div`
    font-size: 30px;
    color: #22635e;
`;

export const Form = styled.form`
    width: 100%;
`;

export const TitleFormWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const TitleNoteLabel = styled.div`
    height: 40px;
    border-radius: 20px 5px 5px 20px;
    background-color: #22635e;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    color: white;
`;

export const Input = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};

${props => props.type === 'text' && css`
        border: none;
        border-radius: ${props => props.isRightBordered === true ? "5px 20px 20px 5px" : "30px"};
        color: grey;
        outline: 0;
        background-color: #ffec9d;
        display: flex;
        padding: 10px;
    `}
`;


export const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;
`;

export const Button = styled.div`
    background-color: #22635e;
    height: 40px;
    min-width: 40px;
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    color: white;

    &:last-of-type{
        margin-left: auto;
    }
`;
