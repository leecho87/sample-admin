import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled'

import { TextField, Button, FormHelperText as Label } from '@mui/material';

const LoginBox = styled.div`
  position:relative;
  width:100%;
  max-width:400px;
  h1 {
    font-size:22px;
    text-align:center;
    span {
      font-size:16px;
      font-weight:100;
      display:block;
    }
  }
  .inputBox {
    padding:20px 0;
  }
  .MuiFormControl-root {
    margin-top:4px;
  }
  .MuiButtonBase-root {
    margin-top:40px;
  }
`

const LoginPage = () => {
  const [login, setLogin] = useState({
    name: "",
    password: ""
  });
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("jwt", JSON.stringify(login));
    navigate("/")
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLogin({
      ...login,
      [name]: value
    });
  }

  return (
    <LoginBox>
      <h1>
        본사 관리자 <span>(G-Field / 경기관제 / 연단체 운영)</span>
      </h1>
      <div className="inputBox">
          <form onSubmit={handleSubmit}>
            <Label sx={{ marginTop: "20px" }}>이메일</Label>
            <TextField
              fullWidth
              size="small"
              name="name"
              value={login.name}
              onChange={handleChange}
              placeholder="이메일주소를 입력해주세요"
            />
            <Label sx={{ marginTop: "20px" }}>비밀번호</Label>
            <TextField
              fullWidth
              size="small"
              type="password"
              name="password"
              value={login.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력해주세요"
            />
            <Button
              fullWidth
              color="primary"
              variant="contained"
              type="submit"
              disabled={!login.name.length && !login.password.length}
            >
              로그인
            </Button>
          </form>
        </div>
    </LoginBox>
  )
}

export default LoginPage;