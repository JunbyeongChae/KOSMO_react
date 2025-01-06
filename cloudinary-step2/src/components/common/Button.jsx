import React from 'react'
import styled from 'styled-components'

const MyButton = styled.button`
  background-color: #DBA39A;//#DBA39A
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5em;
  flex: 1 1 50%;
  font-size: 0.8rem;
  outline: 0;
  border: 1px solid #DBA39A;
  &:hover {
    opacity: 0.8;
  }  
`
const Button = ({name, onClick}) => {
  return (
    <MyButton onClick={onClick}>
      {name}
    </MyButton>  
  )
}

export default Button