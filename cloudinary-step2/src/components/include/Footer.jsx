import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled.div`
    width: 100%;
    background-color: #DBA39A;
    text-align: center;    
    border-radius: 0 0 30px 30px;
`
const TitleP = styled.p`
    color: white;
`
const Footer = () => {
  return (
    <FooterDiv>
        <TitleP>No pain, No gain</TitleP>
    </FooterDiv>
  )
}
export default Footer