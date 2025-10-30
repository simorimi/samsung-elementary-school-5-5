import { useState } from "react";
import Letter from "./Letter";
import * as S from "./styled";

const myPassword = import.meta.env.VITE_PASSWORD;

function App() {
  const [password, setPassword] = useState("");

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  if (password !== myPassword)
    return (
      <S.InputContainer>
        <p>삼성초등학교 5학년 5반 친구들!</p>
        <input
          value={password}
          onChange={handleChangePassword}
          placeholder="비밀번호를 입력해 주세요."
        />
      </S.InputContainer>
    );

  return <Letter />;
}

export default App;
