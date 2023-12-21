import React, { createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import getYoutubeVideos from "../utils/youtubeApi";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const isExtraSmallScreen = useMediaQuery("(max-width:599px)"); // xs, extra-small: 0px
  const isSmallScreen = useMediaQuery("(max-width:899px)"); // sm, small: 600px
  const isMediumScreen = useMediaQuery("(max-width:1199px)"); // md, medium: 900px
  const isLargeScreen = useMediaQuery("(max-width:1535px)"); // lg, large: 1200px
  const isExtraLargeScreen = useMediaQuery("(min-width:1536px)"); // xl, extra-large: 1536px

  const [youtubeData, setYoutubeData] = useState(() => {
    const cachedData = localStorage.getItem("cachedData");
    return cachedData ? JSON.parse(cachedData) : [];
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem("cachedData");
        if (cachedData) {
          setYoutubeData(JSON.parse(cachedData));
        } else {
          const data = await getYoutubeVideos(10);
          setYoutubeData(data);
          localStorage.setItem("cachedData", JSON.stringify(data));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const values = {
    isExtraSmallScreen,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    isExtraLargeScreen,
    youtubeData,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMainValues = () => {
  return useContext(MainContext);
};
