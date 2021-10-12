import React, { useState } from 'react'
import styled from 'styled-components'
import { mobile, litDisp, bigDisp } from '../responsive'


const NavBarCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    ${mobile({padding: '30px 40px'})}
    ${litDisp({padding: '30px 80px'})}
    ${bigDisp({padding: '30px 100px'})}
`

const SearchBtn = styled.button`
    background-color: rgba(0, 0, 0, 0);
    ${mobile({display: 'none'})}
`
const SearchLogo = styled.img`
    
`

const Logo = styled.img`
    ${mobile({width: '100px'})}
    ${litDisp({width: '150px'})}
    ${litDisp({width: '262px'})}
`

const SearchInput = styled.input`
    display: none;
    width: calc(100vw - 450px);
    height: 36px;
    padding: 0 10px;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 80px;
    ${mobile({display: 'block'})}
    ${litDisp({width: '51%', height: '42px'})}
    ${bigDisp({height: '65px', fontSize: '23px'})}
`

const Lbtn = styled.button`
    width: 10%;
    max-width: 190px;
    min-width: 100px;
    height: 36px;
    display: none;
    background: #0CFD8E;
    border-radius: 50px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #FFFFFF;
    ${mobile({display: 'block'})}
    ${litDisp({height: '42px'})}
    ${bigDisp({height: '65px', fontSize: '23px'})}
`

const Rbtn = styled.button`
    width: 10%;
    max-width: 190px;
    min-width: 100px;
    height: 36px;
    display: none;
    background: rgba(255, 255, 255, 0.15);
    border: 4px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 50px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #FFFFFF;
    ${mobile({display: 'block'})}
    ${litDisp({height: '42px'})}
    ${bigDisp({height: '65px', fontSize: '23px'})}
`

const ButgerMenuBtn = styled.button`
    background-color: rgba(0, 0, 0, 0);
    ${mobile({display: 'none'})}
`
const BurgerIcon = styled.img``

const Menu = styled.div`
    display: ${props => props.visibility ? 'block': 'none'};
    position: absolute;
    width: 119px;
    height: 80px;
    right: 25px;
    top: 65px;
    padding: 10px 0;
    background: #6400F5;
    box-shadow: inset 0px 0px 14px 8px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px 20px 20px;
    ${mobile({display: 'none'})}
`

const MenuSignUp = styled.button`
    margin: 0 auto;
    width: 100%;
    padding: 10px 0;
    background-color: rgba(0, 0, 0, 0);
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #FAFAFA;
`

const MenuCreateQuiz = styled.button`
    margin: 0 auto;
    width: 100%;
    padding: 10px 0;
    background-color: rgba(0, 0, 0, 0);
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #FAFAFA;
`


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const displayChange = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <NavBarCont>
                <SearchBtn>
                    <SearchLogo
                        src='/icons/search.svg'
                        alt='search'
                    ></SearchLogo>
                </SearchBtn>
                <Logo
                    src='/icons/logo.svg'
                    alt='logo'
                ></Logo>
                <SearchInput
                    placeholder='Search...'
                ></SearchInput>
                <Lbtn>Create a Quiz</Lbtn>
                <Rbtn>Sign Up</Rbtn>
                <ButgerMenuBtn
                    onClick={displayChange}
                > 
                    <BurgerIcon
                        src='/icons/menu.svg'
                        alt='menu'
                    ></BurgerIcon>
                </ButgerMenuBtn>
            </NavBarCont>
            <Menu visibility={toggle}>
                <MenuSignUp>Sign Up</MenuSignUp>
                <MenuCreateQuiz>Create a Quiz</MenuCreateQuiz>
            </Menu>
        </>
    )
}

export default Navbar
