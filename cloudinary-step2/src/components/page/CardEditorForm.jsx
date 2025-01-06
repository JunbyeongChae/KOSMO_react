import React from 'react'
import styled from 'styled-components';
import Button from '../common/Button';

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap; /* 한 줄에 하나씩 떨어질 수 있도록 랩을 주고 */
  border-top: 1px solid black;
  border-left: 1px solid black;
  margin-bottom: 1em;    
`
const Input = styled.input`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.5em;
  border-bottom: 1px solid black;
  border-radius: 1px solid black;
  background: #F5EBE0;
  flex: 1 1 30%;
  &:focus {
    outline: none;
  }
`
const Select = styled.select`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.5em;
  border-bottom: 1px solid black;
  border-radius: 1px solid black;
  background: white;
  flex: 1 1 30%;
  &:focus {
    outline: 0;
  }
`
const TextArea = styled.textarea`
  font-size: 0.8rem;
  flex-basis: 100%;
  width: 100%;
  border: 0;
  padding: 0.5em;
  border-bottom: 1px solid black;
  border-radius: 1px solid black;
  background: #F5EBE0;
  &:focus {
    outline: 0;
  }
`
const FileInputDiv = styled.div`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.5em;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background: #F5EBE0;     
`
const CardEditorForm = ({ FileInput, card, updateCard, deleteCard }) => {
    const {name, company, theme, title, email, message, fileName, fileURL} = card;

    const onFileChange = (file) => {
      console.log(file);
      // useState에 초기화된 배열에 사용자가 선택한 fileName과 fileURL을 추가해서 배열을 수정해준다
      updateCard({
        ...card,
        fileName: file.name,
        fileURL: file.url,
      })
    }
  
    const onChange = (event) => {
      console.log(`${event.currentTarget.name}  ${event.currentTarget.value}`);
      if(event.currentTarget == null) {
        return;
      }
      //브라우저에서 기본적인 이벤트 처리를 하지 않도록 처리한다
      event.preventDefault();
      updateCard( {
        ...card,
        [event.currentTarget.name]: event.currentTarget.value,
      });
    };
    //maker.jsx에서 deleteCard호출할때 실제 기능 처리할 코드임- 이걸 해야 삭제됨
    const onSubmit = () => {
      deleteCard(card);
    };    
  return (
    <Form>
      <Input name="name" value={name} onChange={onChange} />
      <Input name="company" value={company} onChange={onChange} />
      <Select name="theme" value={theme} onChange={onChange}>
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </Select>        
      <Input name="title" value={title} onChange={onChange} />
      <Input name="email" value={email} onChange={onChange} />
      <TextArea  name='message' value={message} onChange={onChange}/>
      <FileInputDiv>
        <FileInput name={fileName}  onChange={onChange}  onFileChange={onFileChange} />
      </FileInputDiv>
      <Button name="Delete" onClick={onSubmit}/>
    </Form>
  )
}

export default CardEditorForm