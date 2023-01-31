import { Link } from "react-router-dom";

import Logo from "../../assets/image/liveLogo.png";

const HousePurpose = () => {
  return (
    <div style={{ height: "80vh", padding: "20px 10px", overflow: "scroll" }}>
      <div>
        <div style={{ margin: "0 0 10px 10px" }}>
          <img src={Logo} />
        </div>
        <hr />
        <h1>건물 종류</h1>
        <br />
        <p>
          건물 종류는 2020년 8월 21일 중개사법 개정에 의한 필수 표기 정보입니다.
        </p>
      </div>
      <br />
      <div>
        <blockquote>
          중개대상물의 표시·광고 명시사항 세부기준 “중개대상물 종류”는
          「건축법」 제2조제1항제2호에 따른 건축물과 그 밖의 토지의 정착물로
          구분하여 표시하되, 건축물은 「건축법」 제2조제2항에 따른 건축물의
          용도로 구분하여 표시하여야 한다. 다만, 미등기건물의 경우에는
          “미등기건물”이라고 표시하여야 한다.
        </blockquote>
      </div>
      <br />
      <div>
        <h2>중개대상물 입력 방법</h2>
        <p>
          그 외 중개대상물을 입력해주실 때는 이모티콘을 사용하거나 단독주택,
          다중주택, 다가구주택, 공동주택, 아파트, 연립주택, 다세대주택, 기숙사,
          제1종근린생활시설, 제2종근린생활시설 등 정확한 건물 종류가 작성되지
          않으면 반려될 수 있습니다.
        </p>
        <br />
        <p>
          ☞ 건축법 시행령 [별표1]{" "}
          <a
            href="https://law.go.kr/%EB%B2%95%EB%A0%B9%EB%B3%84%ED%91%9C%EC%84%9C%EC%8B%9D/(%EA%B1%B4%EC%B6%95%EB%B2%95%EC%8B%9C%ED%96%89%EB%A0%B9,%EB%B3%84%ED%91%9C1)"
            target="_blank"
            rel="noreferrer"
          >
            용도별 건축물의 종류
          </a>
        </p>
        <br />
        <p>
          "「건축법」 제2조제2항에 따른 건축물의 상위 용도"를 건축물대장에서
          찾을 수 없을 경우 건축물대장에 쓰여 있는 층별용도 기준으로
          작성해주세요.
        </p>
      </div>
      <br />
      <div>
        <p>이렇게 작성해주세요!</p>
        <figure
          style={{
            display: "flex",
            padding: "20px",
            margin: "10px",
            borderRadius: "5px",
            background: "rgb(235,236,237)",
          }}
        >
          ⭕ 다가구주택
        </figure>
        이렇게 작성하면 안돼요!
        <figure
          style={{
            display: "flex",
            padding: "20px",
            margin: "10px",
            borderRadius: "5px",
            background: "rgb(235,236,237)",
          }}
        >
          ❌
          <div style={{ display: "flex", flexDirection: "column" }}>
            깨끗한 단독주택
            <mark>
              <code>
                <small>→ 건물 종류 외의 문구가 포함되면 안돼요.</small>
              </code>
            </mark>
          </div>
        </figure>
        <figure
          style={{
            display: "flex",
            padding: "20px",
            margin: "10px",
            borderRadius: "5px",
            background: "rgb(235,236,237)",
          }}
        >
          ❌ 💯
          <div style={{ display: "flex", flexDirection: "column" }}>
            단독주택
            <mark>
              <code>
                <small>→ 이모티콘이 들어가면 안돼요.</small>
              </code>
            </mark>
          </div>
        </figure>
        <p>
          단, 미등기건물 중 관계법령에 따라 건축허가나 신고 등을 하였으나 등기가
          완료되지 않은 건축물인 경우에는 신청서에 기재된 용도를 같이 작성할 수
          있습니다.
        </p>
        <p>이렇게 작성해주세요!</p>
        <figure
          style={{
            display: "flex",
            padding: "20px",
            margin: "10px",
            borderRadius: "5px",
            background: "rgb(235,236,237)",
          }}
        >
          ⭕ 공동주택 (미등기 건물)
        </figure>
        <p>이렇게 작성하면 안돼요!</p>
        <figure
          style={{
            display: "flex",
            padding: "20px",
            margin: "10px",
            borderRadius: "5px",
            background: "rgb(235,236,237)",
          }}
        >
          ❌
          <div style={{ display: "flex", flexDirection: "column" }}>
            공동주택 🚨 미등기 건물
            <mark>
              <code>
                <small>→ 이모티콘이 들어가면 안돼요.</small>
              </code>
            </mark>
          </div>
        </figure>
        <p>
          단독주택, 다가구주택, 공동주택 등 정확한 건물 종류 작성을
          부탁드립니다!
        </p>
      </div>
    </div>
  );
};

export default HousePurpose;
