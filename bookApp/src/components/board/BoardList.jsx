import React from "react";
import Header from "../include/Header";
import Footer from "../include/Footer";
import BoardItem from "./BoardItem";

const BoardList = () => {
  return (
    <>
      <Header />
      <div>
        <BoardItem/>
        <BoardItem/>
        <BoardItem/>
        <BoardItem/>
        <BoardItem/>
      </div>
      <Footer />
    </>
  );
};

export default BoardList;
