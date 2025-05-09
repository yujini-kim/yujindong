import MainIcon from "../Icon/MainIcon";

export default function MyPageNoDataIcon() {
  return (
    <div className="flex flex-col items-center gap-4">
      <MainIcon />
      <p>데이터가 없습니다</p>
    </div>
  );
}
