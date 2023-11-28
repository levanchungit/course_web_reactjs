import React from "react";

import LoatBaiList from "../Podcast/components/LoatBaiList";
import GioiThieu from "./components/GioiThieu";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <React.Fragment>
      <Welcome />
      <LoatBaiList />
      <GioiThieu />
    </React.Fragment>
  );
}
