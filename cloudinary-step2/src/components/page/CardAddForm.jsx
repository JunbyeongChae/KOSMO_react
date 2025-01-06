import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Button from '../common/Button'
import styles from './addform.module.css'

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
const CardAddForm = ({FileInput, onAdd}) => {
  //값들을 읽어와서 Card에 추가하기
  const formRef = useRef();//폼전체 Ref
  const nameRef = useRef();//이름
  const companyRef = useRef();//회사명
  const themeRef = useRef();//테마구분값
  const titleRef = useRef();//엔지니어
  const emailRef = useRef();//이메일
  const messageRef = useRef();//
  const [file, setFile] = useState({ fileName: null, fileURL: null});	
  const onFileChange = (file) => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  }	
  const onSubmit = (event) => {
		//이벤트 전이 막기 - button태그는 디폴트가 submit속성을 가짐. - 그래서 화면이 새로고침일어남 -이것을 막아줌
		event.preventDefault();
		//사용자가 입력한 값을 받아서 카드를 만듦 -> 이제 카드를 추가해주면 된다
		const card = {
			id: Date.now(),//uuid
      name: nameRef.current.value || '', /* 입력된 값이 있으면 쓰고 없으면 빈문자열 치환 */
      company:companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
			fileName: file.fileName || '', /* 나중에 제대로 해보자 null이라면 빈문자열*/
			fileURL: file.fileURL || '',  /* 나중에 제대로 해보자 */
		};
		formRef.current.reset();// 즉 사용자가 입력해서 제출하고 나면 폼이다 리셋되도록 이렇게 해줌
		console.log(card);//새로 추가되는 카드정보 담김 - Maker.jsx에서 63번라인에 출력됨
		// card에 추가한 뒤 즉 Add버튼 누른다음 파일정보 초기화 해줌
		setFile({ fileName: null, fileURL: null });
		onAdd(card);
};	
  return (
		<Form ref={formRef} className={styles.form}>
      <Input ref={nameRef} name='name' placeholder='Name' />
      <Input ref={companyRef} name='company' placeholder='Company' />
      <Select ref={themeRef} name="theme" placeholder="Theme">
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </Select>
      <Input ref={titleRef} name="title" placeholder='Title'  />
      <Input ref={emailRef} name="email" placeholder='Email' />
      <TextArea ref={messageRef} name='message' placeholder='Message' />
			<FileInputDiv>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </FileInputDiv>
      <Button name="Add" onClick={onSubmit}/>
		</Form>
  )
}

export default CardAddForm