import React, { useEffect, useState } from "react";

const GlowBox = ({ right, left, top, bottom, opacity }) => {
  const [isNonMediumDevice, setIsNonMediumDevice] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 900) {
      setIsNonMediumDevice(true);
    }
  }, []);
  return (
    <div
      className={`
         absolute rounded-full
         ${isNonMediumDevice ? "5svh" : "10svh"}
        ${isNonMediumDevice ? "5svh" : "10svh"}
         top-[${top}]
         right-[${right}] 
         left-[${left}]
          bottom-[${bottom}]
         opacity-[${opacity}]
         blur(5px) `}
    ></div>
  );
};

export default GlowBox;
