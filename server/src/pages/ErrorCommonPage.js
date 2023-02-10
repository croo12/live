import { useNavigate, useRouteError } from "react-router-dom";

const ErrorCommonPage = (props) => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <>
      <h1> Error Page ! </h1>
      {props.errorMsg ? (
        <p>{props.errorMsg}</p>
      ) : (
        <p> {error.error?.message ? error.error.message : error.message} </p>
      )}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        고 홈
      </button>
    </>
  );
};

export default ErrorCommonPage;
