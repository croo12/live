import { useEffect } from "react";
import { unstable_useBlocker as useBlocker } from "react-router-dom";

//뒤로가기랑 이동은 막음
//새로고침은 안막음
export const usePrompt = ({ when, message }) => {
  let blocker = useBlocker(when);
  console.log(blocker);

  useEffect(() => {
    if (blocker.state === "blocked" && !when) {
      blocker.reset();
    }
  }, [blocker, when]);

  useEffect(() => {
    if (blocker.state === "blocked") {
      let proceed = window.confirm(message);

      if (proceed) {
        setTimeout(blocker.proceed, 0);
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);
};
