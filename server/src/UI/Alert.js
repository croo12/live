import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react";
import classes from "./Alert.module.scss";

const useAlert = (isVisible, timeout) => {
  const [visible, setVisible] = useState(isVisible);
  const timeoutId = useRef(null);

  useEffect(() => {
    if (isVisible) {
      timeoutId.current = setTimeout(() => setVisible(false), timeout);
    }
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [isVisible, timeout]);

  return visible;
};

const Alert = ({ title, content, visible, setVisible }) => {
  const viewAlert = useAlert(visible, 4000);

  useEffect(() => {
    return () => {
      setVisible(false);
    };
  }, []);

  return (
    <>
      {ReactDOM.createPortal(
        viewAlert && (
          <div className={classes.alert}>
            <h2> {title} </h2>
            <p> {content} </p>
          </div>
        ),
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Alert;
