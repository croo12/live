import { useCallback, useContext, useEffect } from "react";
import { UNSAFE_NavigationContext } from "react-router-dom";

export const useBlocker = (blocker, when) => {
  const context = useContext(UNSAFE_NavigationContext);
  const navigator = context.navigator;

  console.log(context);

  useEffect(() => {
    if (!when) return;

    const PUSH = navigator.push;
    console.log(PUSH);

    navigator.push = (...args) => {
      //여기서 to 체크 가능
      console.log(...args);

      const result = blocker();
      if (result !== false) {
        PUSH(...args);
      }
    };

    return () => (navigator.push = PUSH);
  }, [navigator, blocker, when]);
};

export const usePrompt = (msg, trigger) => {
  useEffect(() => {
    if (trigger) {
      window.onbeforeunload = () => {
        return msg;
      };
    }

    return () => {
      window.onbeforeunload(null);
    };
  }, [msg, trigger]);

  const blocker = useCallback(() => {
    const confirm = window.confirm(msg);
    return confirm;
  }, [msg]);

  useBlocker(blocker, trigger);
};
