import React, { useEffect } from "react";
import LoatBaiItem from "../LoatBaiItem";
import blogAPI from "../../../../api/BlogAPI";

export default function LoatBaiList(props) {
  const [dataLoatBai, setDataLoatBai] = React.useState([]);

  useEffect(() => {
    const fetchDataLoatBai = async () => {
      try {
        const response = await blogAPI.getCourses();
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
