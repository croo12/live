import React, { useState, useEffect } from "react";

const ResponsiveText = ({ text, textLength }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let displayText;
  if (screenWidth <= 360) {
    displayText = text.substring(0, textLength[0]) + "...";
  } else if (screenWidth <= 480) {
    displayText = text.substring(0, textLength[1]) + "...";
  } else if (screenWidth <= 768) {
    displayText = text.substring(0, textLength[2]) + "...";
  } else if (screenWidth <= 1024) {
    displayText = text.substring(0, textLength[3]) + "...";
  } else {
    displayText = text.substring(0, textLength[4]) + "...";
  }

  return <p>{displayText}</p>;
};

export default ResponsiveText;
