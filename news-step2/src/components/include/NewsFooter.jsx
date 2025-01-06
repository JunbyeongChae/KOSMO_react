import React from 'react'
import { Navbar } from 'react-bootstrap'

const NewsFooter = () => {
  return (
    <>
      <Navbar className="navbar navbar-expand-sm bg-light justify-content-center" fixed="bottom" bg="dark" style={{ color: "white" }}>
        리액트캠프 Copyright &copy;2024
      </Navbar>
    </>
  );
};

export default NewsFooter
//rafce:화살표함수로 객체 선언하고 export 는 default로 처리해줌.