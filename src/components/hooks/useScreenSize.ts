import { useState, useEffect } from "react";

const useScreenSize = (breakpoint: number) => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth < breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isSmallScreen;
};

export default useScreenSize;
