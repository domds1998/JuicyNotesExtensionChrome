import React from 'react';
import { RegistrationWrapper, Wrapper } from '../styles/RegistrationStyles';
import { Input } from '../styles/GlobalStyles';

export default function Registration() {
    return (
        <Wrapper>
            <RegistrationWrapper>
                <Input width="250px" height="30px" type="text" placeholder="Login"></Input>
                <Input width="250px" height="30px" type="text" placeholder="Hasło"></Input>
                <Input width="200px" height="35px" bgColor="#22635e" type="submit" value="Zarejestruj"></Input>
                <Input width="200px" height="35px" bgColor="#f48473" type="submit" value="Zarejestruj"></Input>
            </RegistrationWrapper>
        </Wrapper>
    );
}