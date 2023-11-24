import * as React from "react";
import { LIST_LOAT_BAI } from "../../../../constants/appConstants";
import LoatBaiItem from "../LoatBaiItem";

export default function LoatBaiList(props) {
  return (
    <React.Fragment>
      {LIST_LOAT_BAI.map((item, index) => {
        return (
          item.visible && (
            <LoatBaiItem
              key={item.id}
              title={item.title}
              category={item.category}
              description={item.description}
              btnText={item.btnText}
              href={item.href}
              img={item.img}
            />
          )
        );
      })}
    </React.Fragment>
  );
}
