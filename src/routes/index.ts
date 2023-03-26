// 로그인 및 토큰체크
import Guard from "components/common/Guard";
// 회원 레이아웃
import LoginPage from "pages/login/LoginPage";
// 관리자 레이아웃
import MainPage from "pages/main/MainPage";

const AuthRoutes = {
    path: "/login",
    name: "로그인",
    component: LoginPage,
}

const AdminRoutes = {
  path: "/",
  name: "메인",
  component: MainPage,
  guard: Guard,
}

export const AuthLayoutRoutes = [AuthRoutes];
export const AdminLayoutRoutes = [AdminRoutes];