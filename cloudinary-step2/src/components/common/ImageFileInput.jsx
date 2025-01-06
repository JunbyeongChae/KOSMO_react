import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import styles from './imageFileInput.module.css';
const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* 아이템을 가운데 오게함 */
  align-items: center; /* 아이템을 중간 middle에 오게함 */  
`
const HiddenInput = styled.input`
  display: none;
`
const ImageFileInput = ({ imageUploader, name, onFileChange}) => {
  console.log(name);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();  
  const onButtonClick = (event) => {
    event.preventDefault();
    // No file이 클릭되었을 때 버튼 클릭하기
    inputRef.current.click();
  }  
 const onChange = async event => {
  setLoading(true);
  console.log(event.target.files[0]);
  const uploaded = await imageUploader.upload(event.target.files[0]);
  console.log(uploaded);
  setLoading(false);
  onFileChange({
    name: uploaded.original_filename,
    url: uploaded.url,
  });
};  
  return (
    <ContainerDiv>
      <HiddenInput
        ref={inputRef}
        type="file" accept="image/*" name="file"
        onChange={onChange}
      />
      {/* 로딩중이 아니면 아래 코드가 처리 */}
      { !loading && (
        <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}>
          {name || 'No file'}
        </button>
      )}
      {/* 로딩 중이면 아래 코드 처리 */}
      { loading && <div className={styles.loading}></div> }
    </ContainerDiv>
  )
}

export default ImageFileInput