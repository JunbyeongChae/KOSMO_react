import React from "react";
import styled from "styled-components";

const CardLi = styled.li`
  display: flex; /*문자열이 이미지 옆으로*/
  align-items: center;
  width: 100%;
  background-color: lightblue;
  border-radius: 1em;
  padding: 0.2em 0em;
  margin-bottom: 0.5em;
`;
const AvatarImg = styled.img`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  padding: 1em;
  margin-right: 1em;
  margin-left: 0.5em;
`;
const Card = ({ card }) => {
  const { fileName, fileURL } = card;
  const DEFAULT_IMAGE = "/images/default_logo.png";
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <CardLi>
      <AvatarImg src={url} />
      <div style={{ width: "100%" }}>{fileName}</div>
    </CardLi>
  );
};

export default Card;
