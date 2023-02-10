import { useNavigate, useRouteError } from "react-router-dom";

const ErrorCommonPage = () => {
  const error = useRouteError();
  const navi = useNavigate();
  console.log(error);
  return (
    <>
      <h1> 너의 에러 </h1>
      <p> {error.error?.message ? error.error.message : error.message} </p>
      <button
        onClick={() => {
          navi("/");
        }}
      >
        고 홈
      </button>
    </>
  );
};

export default ErrorCommonPage;
