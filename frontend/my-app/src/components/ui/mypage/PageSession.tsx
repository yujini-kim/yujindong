import { LeftArrow, RightArrow } from "@/components/icons/Arrows";
import { useMypageStore } from "@/store/mypageStore";
import styled from "styled-components";

const PageBtn = styled.button`
  border: 2px solid #0a0a0a;
  border-radius: 7px;
  box-shadow: 3px 3px #0a0a0a;
`;

const PageTabs = styled.div`
  display: flex;

  gap: 15px;
`;

const PageNumber = styled.div`
  font-size: 18px;
`;

function PageSession({ totalPages }: { totalPages: number }) {
  const { currentPage, setCurrentPage } = useMypageStore();
  return (
    <PageTabs>
      <PageBtn
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 0}
      >
        <LeftArrow />
      </PageBtn>
      <PageNumber>
        {(currentPage ?? 1) + 1}/ {totalPages}
      </PageNumber>
      <PageBtn
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === (totalPages ?? 1) - 1}
      >
        <RightArrow />
      </PageBtn>
    </PageTabs>
  );
}

export default PageSession;
