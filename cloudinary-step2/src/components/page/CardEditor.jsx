import React from 'react'
import styled from 'styled-components'
import CardAddForm from './CardAddForm'
import CardEditorForm from './CardEditorForm'

const EditorDiv = styled.div`
	flex-basis: 50%;
	border-right: 1px solid #9E7676;/* editor와 preview사이에 구분선 넣기 */
	padding: 0.5em 2em;
	overflow-y: auto;
`
const TitleH1 = styled.h1`
	width: 100%;
	text-align: center;
	margin-bottom: 1em;
	color: #594545;
`
const CardEditor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => {
	console.log(cards);
  return (
	<EditorDiv>
		<TitleH1>Card Editor</TitleH1>
		{Object.keys(cards).map(key => (
			<CardEditorForm FileInput={FileInput} key={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard}/>
		))}        
		<CardAddForm FileInput={FileInput} onAdd={addCard}/>
	</EditorDiv>
  )
}

export default CardEditor