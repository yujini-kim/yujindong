import Link from "next/link";
import styled from "styled-components";

const Login = styled.div`
  width: 50px;
  background-color: white;
  border: 2px solid ${(props) => props.theme.shadowColor};
  border-radius: 5px;
  box-shadow: 2px 2px ${(props) => props.theme.shadowColor};
  padding: 3px;
  font-size: 10px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.circleColor};
  }
`;

const Logout = styled.div`
  width: 50px;
  background-color: white;
  border: 2px solid ${(props) => props.theme.shadowColor};
  border-radius: 5px;
  box-shadow: 2px 2px ${(props) => props.theme.shadowColor};
  padding: 3px;
  font-size: 10px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.circleColor};
  }
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
    <Logout>
      <button onClick={onClick}>로그아웃</button>
    </Logout>
  );
}
