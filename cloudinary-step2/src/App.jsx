import { Route, Routes } from 'react-router-dom';
import Login from './components/page/Login';
import Marker from './components/page/Marker';
import styled from 'styled-components';
const AppDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e8e7e6;
`
//여기서 인증 체크
//여기서 세션, 권한, 인증
//메뉴가 여기서 결정된다
const App = ({authLogic, FileInput, cardLogic}) => {
  return (
    <>
      <AppDiv>
        <Routes>
          <Route path="/" element={<Login authLogic={authLogic} />} />
          <Route path="/marker" element={<Marker FileInput={FileInput} authLogic={authLogic} cardLogic={cardLogic} />} />
        </Routes>
      </AppDiv>
    </>
  );
}

export default App;
