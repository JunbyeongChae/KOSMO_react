import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const PreviewDiv = styled.div`
  flex-basis: 50%;
  overflow-y: auto; /*스크롤*/
`

const TitleH1 = styled.h1`
  width: 100%;
  text-align: center;
  color: salmon;
`

const CardsUl = styled.ul`
  width: 100%;
  height: 100%;
  padding: 0.5em 2em;
  color: salmon;
  align-items: center;
  display: flex;
  flex-direction: column;
`
  const Preview = ({cards}) => {
  return (
    <PreviewDiv>
      <TitleH1>Card Preview</TitleH1>
      <CardsUl>
        {Object.keys(cards).map(key => (
          <Card key={key} card={cards[key]}/>
        ))}
      </CardsUl>
    </PreviewDiv>
    
  )
}

export default Preview