import React from 'react';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
import {
    Content,
    LogoImg,
    TMDBLogoImg,
    Wrapper
} from './Header.styles';

interface Props {
    name?: string;
    age: number;
};

function Header(): JSX.Element {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={RMDBLogo} alt='rmdb-Logo' />
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    );
}

export default Header;
