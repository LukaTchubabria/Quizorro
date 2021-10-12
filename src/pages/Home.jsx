import React from 'react'
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const MainCont = styled.div`
    background-image: url('/images/bg.png');
    height: 100vh;
`

const Home = () => {
    return (
        <MainCont>
            <Navbar />
        </MainCont>
    )
}

export default Home
