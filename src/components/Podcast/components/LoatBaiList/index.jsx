import React, { useEffect } from "react";
import { LIST_LOAT_BAI } from "../../../../constants/appConstants";
import LoatBaiItem from "../LoatBaiItem";
import courseAPI from "../../../../api/CourseAPI";

export default function LoatBaiList(props) {
  const [dataLoatBai, setDataLoatBai] = React.useState([]);

  useEffect(() => {
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

    fetchDataLoatBai();
  }, []);

  return (
    <React.Fragment>
      {dataLoatBai.map((item, index) => {
        return <LoatBaiItem key={index} item={item} />;
      })}
    </React.Fragment>
  );
}
