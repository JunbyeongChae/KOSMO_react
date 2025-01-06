import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const TypeForm = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  height: 60vh;
  justify-content: center;
  align-items: center;
  border: 2px solid lightgray;
  border-radius: 60px;
  margin: 150px 0px 150px 0px;
`;

const TypeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  cursor: pointer;
  border-radius: 55px;
  &:hover {
    background-color: lightgray;
  }
`;

const Signuptype = () => {
  const navigate = useNavigate();
  const handleMember = () => {
    navigate("/login/signup?type=member");
  };
  const handleTeacher = () => {
    navigate("/login/signup?type=teacher");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TypeForm>
        <TypeDiv onClick={handleMember}>
          <i
            className="fas fa-person-running"
            style={{ width: "40%", height: "80%" }}
          ></i>
          <span
            style={{
              width: "50%",
              height: "20%",
              textAlign: "center",
              fontSize: "200%",
            }}
          >
            회원
          </span>
        </TypeDiv>
        <hr style={{ height: "80%", width: "2px" }} />
        <TypeDiv onClick={handleTeacher}>
          <i
            className="fas fa-person-chalkboard"
            style={{ width: "50%", height: "80%" }}
          ></i>
          <span
            style={{
              width: "50%",
              height: "20%",
              textAlign: "center",
              fontSize: "200%",
            }}
          >
            강사
          </span>
        </TypeDiv>
      </TypeForm>
    </div>
  );
};

export default Signuptype;
