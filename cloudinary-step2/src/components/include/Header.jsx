import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const HeaderDiv = styled.div`
    width: 100%;
    text-align: center;
    background-color: #F0DBDB;//#F0DBDB, #DBA39A
    position: relative;    
    border-radius: 30px 30px 0 0;
`
const Img = styled.img`
    width: 3em;
`
const BtnLogout = styled.button`
    position: absolute;
    right: 3em;
    top: 1em;
    padding: 0.8em;
    border-radius: 20%;
    background-color: black;
    color: white;
    outline: 0;
    border: 0;
    cursor: pointer;
`
const H1Title = styled.h1`
    margin: auto;
    color: #DBA39A; 
`

const Header = ({ onLogout }) => {
        return (
            <HeaderDiv>
                {onLogout && <BtnLogout onClick={onLogout}>로그아웃</BtnLogout>}
                <Img  src="/images/logo.png" alt="logo" />
                <div className={{margin:'auto'}}>
                    <H1Title>Name Card</H1Title>
                </div>
            </HeaderDiv>
        );
}
export default Header;
//<script type="module"/>
//<script type="commonjs"/>
//<script type="text/javascript"/>