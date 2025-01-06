import React, { useState } from "react";
import CardEditor from "./CardEditor";
import Preview from "./Preview";
import styled from "styled-components";

const MarkerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ContainerDiv = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
`;
const Marker = () => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      fileName: "lee",
      fileURL:
        "https://res.cloudinary.com/dabcqtmbm/image/upload/v1707156245/lmbxljzqmcylnyngwafk.jpg",
    },
    2: {
      id: "2",
      fileName: "kim",
      fileURL: null,
    },
    3: {
      id: "3",
      fileName: "park",
      fileURL: "http://placehold.co/100",
    },
  });
  return (
    <MarkerDiv>
      <ContainerDiv>
        <CardEditor />
        <Preview cards={cards}/>
      </ContainerDiv>
    </MarkerDiv>
  );
};

export default Marker;
