import Card from "../UI/Card";
import HouseCardContent from "./HouseCardContent";

const HouseView = () => {
  //매물 페이지의 index
  return (
    <>
      <h1>안녕 나는 매물 - 매물 목록</h1>
      <p>검색창</p>
      <ul>
        <li>
          <Card>
            <HouseCardContent />
          </Card>
        </li>
      </ul>
      <p>페이지네이션</p>
      <p>등록버튼</p>
    </>
  );
};

export default HouseView;
