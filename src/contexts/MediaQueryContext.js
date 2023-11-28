import React, { createContext, useContext } from "react";
import { useMediaQuery } from "@mui/material";

const MediaQueryContext = createContext();

export const MediaQueryProvider = ({ children }) => {
  const isExtraSmallScreen = useMediaQuery("(max-width:599px)"); // xs, extra-small: 0px
  const isSmallScreen = useMediaQuery("(max-width:899px)"); // sm, small: 600px
  const isMediumScreen = useMediaQuery("(max-width:1199px)"); // md, medium: 900px
  const isLargeScreen = useMediaQuery("(max-width:1535px)"); // lg, large: 1200px
  const isExtraLargeScreen = useMediaQuery("(min-width:1536px)"); // xl, extra-large: 1536px

  const mediaQueryValues = {
    isExtraSmallScreen,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    isExtraLargeScreen,
  };

  return (
    <MediaQueryContext.Provider value={mediaQueryValues}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export const useMediaQueryValues = () => {
  return useContext(MediaQueryContext);
};
