import styled from "styled-components";

const Top = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 3px;
  height: 8%;
  font-weight: 700;
  cursor: pointer;
`;

export function XIcon() {
  return (
    <svg
      className="size-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  );
}

export function ChevronDown() {
  return (
    <svg
      className="size-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
      />
    </svg>
  );
}

export function Minus() {
  return (
    <svg
      className="size-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
      />
    </svg>
  );
}
interface TopIconProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
export function TopIcon({ onClick }: TopIconProps) {
  return (
    <Top onClick={onClick}>
      <ChevronDown />
      <Minus />
      <XIcon />
    </Top>
  );
}
