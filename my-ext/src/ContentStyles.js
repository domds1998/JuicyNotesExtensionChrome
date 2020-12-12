import styled from 'styled-components';

export const HighlighterWrapper = styled.div`
    width: 300px;
    height: 100px;
    background-color: #fffcd5;
    position: fixed;
    ${props => console.log(props.top)}
    top: ${props => props.top};
    left: ${props => props.left};
    border-radius: 10px;
`;