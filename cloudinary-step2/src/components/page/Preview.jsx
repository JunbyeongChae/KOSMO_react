import React from 'react'
import styled from 'styled-components';
import Card from './Card';

const PreviewDiv = styled.div`
    flex-basis: 50%;
    overflow-y: auto;/* 스크롤링 되게 만들고 */
`
const TitleH1 = styled.h1`
    width: 100%;
    text-align: center;
    margin-bottom: 1em;
    color; #815b5b;
`
const CardsUl = styled.ul`
    width: 100%;
    height: 100%;
    padding: 0.5em 2em;
    display: flex;
    flex-direction: column;/* 카드가 너무 왼쪽에 있어서 조정하기 */
    align-items: center;/* 카드가 너무 작아졌다면 card.module.css로 가서 .card에 width: 100%로 준다  */
`
const Preview = ({cards}) => {
  return (
    <PreviewDiv>
    <TitleH1>Card Preview</TitleH1>
    <CardsUl>
      {Object.keys(cards).map(key => (
        <Card key={key} card={cards[key]} />
      ))}     
    </CardsUl> 
  </PreviewDiv>      
  );
}

export default Preview