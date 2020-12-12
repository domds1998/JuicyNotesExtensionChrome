import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fffcd5;
`;

export const RegistrationWrapper = styled.div`
    width: 350px;
    height: 350px;
    background-color: #ffec9d;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > input[type=text]{
        margin-bottom: 20px;
    }

    & > input[type=submit]:last-child {
        margin-top: 10px;
    }

`;