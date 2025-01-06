import React from 'react'
import styled from 'styled-components'

const EditorDiv = styled.div`
  flex-basis: 50%;
  border-right: 1px solid gray;
`

const TitleH1 = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
  color: goldenrod;
`
const CardEditor = () => {
  return (
    <EditorDiv>
      <TitleH1>Card Editor</TitleH1>
      <div>명함정보입력화면</div>
    </EditorDiv>
  )
}

export default CardEditor