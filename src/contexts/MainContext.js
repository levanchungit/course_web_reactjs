import React, { createContext, useContext } from "react";
import { useMediaQuery } from "@mui/material";
import courseAPI from "../api/CourseAPI";
import podcastAPI from "../api/PodcastAPI";

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const isExtraSmallScreen = useMediaQuery("(max-width:599px)"); // xs, extra-small: 0px
  const isSmallScreen = useMediaQuery("(max-width:899px)"); // sm, small: 600px
  const isMediumScreen = useMediaQuery("(max-width:1199px)"); // md, medium: 900px
  const isLargeScreen = useMediaQuery("(max-width:1535px)"); // lg, large: 1200px
  const isExtraLargeScreen = useMediaQuery("(min-width:1536px)"); // xl, extra-large: 1536px

  const [dataLoatBai, setDataLoatBai] = React.useState([]);
  const [dataVideos, setDataVideos] = React.useState([]);

  React.useEffect(() => {
    const fetchDataLoatBai = async () => {
      try {
        const response = await courseAPI.getCourses();
        if (response.status === 200) {
          setDataLoatBai(response.data.results);
        }
      } catch (e) {
        console.log("error: ", e);
      }
    };

    const fetchDataVideos = async () => {
      try {
        const response = await podcastAPI.getVideos(1, 10, "desc");
        if (response.status === 200) {
          setDataVideos(response.data.results);
        }
      } catch (e) {
        console.log("error: ", e);
      }
    };

    fetchDataLoatBai();
    fetchDataVideos();
  }, []);

  const values = {
    dataLoatBai,
    dataVideos,
    isExtraSmallScreen,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    isExtraLargeScreen,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMainValues = () => {
  return useContext(MainContext);
};
