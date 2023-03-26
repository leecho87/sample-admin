import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'

const AuthWrapper = styled.section`
  position:relative;
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  .headline {
    position:fixed;
    left:0;
    right:0;
    top:0;
    height:56px;
    background:#36383f;
    box-shadow:0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)
  }
`;

const AuthLayout = () => {
  return (
    <AuthWrapper>
      <div className="headline"></div>
      <Outlet />
    </AuthWrapper>
  )
}

export default AuthLayout