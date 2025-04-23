import Link from "next/link";
import styled from "styled-components";

const Login = styled.div`
  font-size: 10px;
  text-align: center;
`;

interface ILogOut {
  onClick: () => void;
}

export function LoginBtn() {
  return (
    <Login>
      <Link href="/auth/signin">로그인</Link>
    </Login>
  );
}

export function LogoutBtn({ onClick }: ILogOut) {
  return (
    <Login>
      <Link href="/" onClick={onClick}>
        로그아웃
      </Link>
    </Login>
  );
}
