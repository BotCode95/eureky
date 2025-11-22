import React from "react";
import { HomeMobile } from "./HomeMobile";
import { HomeDesktop } from "./HomeDesktop";

export const Home: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <HomeMobile /> : <HomeDesktop />;
};
