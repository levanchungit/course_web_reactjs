import * as React from "react";
import { LIST_LOAT_BAI } from "../../constants/appConstants";
import ItemLoatBai from "../ItemLoatBai";

function LoatBai(props) {
  return (
    <React.Fragment>
      {LIST_LOAT_BAI.map((item, index) => {
        return (
          item.visible && (
            <ItemLoatBai
              key={item.id}
              title={item.title}
              category={item.category}
              description={item.description}
              btnText={item.btnText}
              img={item.img}
            />
          )
        );
      })}
    </React.Fragment>
  );
}

export default LoatBai;
