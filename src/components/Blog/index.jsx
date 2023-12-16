import * as React from "react";
import BaiViet from "./BaiViet";
import Footer from "./Components/Footer";

function Blog() {
  return (
    <div className="App">
      {/* <ChiTietBaiViet /> */}
      <BaiViet />

      {/* Chừa khoảng cách footer */}
      <div style={{ marginBottom: "50px" }}></div>
      <Footer />
    </div>
  );
}

export default Blog;
