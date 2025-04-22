import { LeftArrow, RightArrow } from "@/components/icons/Arrows";
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

interface IPageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  totalPages: number;
}

function PageSession({ setCurrentPage, currentPage, totalPages }: IPageProps) {
  return (
    <PageTabs>
      <PageBtn
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={currentPage === 0}
      >
        <LeftArrow />
      </PageBtn>
      <PageNumber>
        {(currentPage ?? 1) + 1}/ {totalPages}
      </PageNumber>
      <PageBtn
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={currentPage === (totalPages ?? 1) - 1}
      >
        <RightArrow />
      </PageBtn>
    </PageTabs>
  );
}

export default PageSession;
