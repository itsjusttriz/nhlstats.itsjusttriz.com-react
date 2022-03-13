import { Card, CardContent, CardHeader, Headline2, Subtitle1 } from '@theturkeydev/gobble-lib-react';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
    margin: 32px 64px;
    display: grid;
    grid-template-columns: 1fr;
`;

export const CenterContent = styled.div`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

export const App = () => (
    <>
        <ContentWrapper>
            <CenterContent>
                <Card>
                    <CardHeader>
                        <span style={{color: 'red'}}>UNDER CONSTRUCTION!</span>
                    </CardHeader>
                    <CardContent>
                        <Subtitle1>Welcome to</Subtitle1>
                        <Headline2>EA-NHL Stats</Headline2>
                        If you find any bugs, or would like to request a feature, visit the <a href='https://github.com/itsjusttriz/nhlstats.itsjusttriz.com-react/issues'>Issue Tracker</a>
                    </CardContent>
                </Card>
            </CenterContent>
        </ContentWrapper>
    </>
);