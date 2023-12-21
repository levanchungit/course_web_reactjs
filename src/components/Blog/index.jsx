import * as React from "react";
import DanhSachBaiViet from "./DanhSachBaiViet";
import Footer from "./Components/Footer";

function Blog() {
  return (
    <div className="App">
      <DanhSachBaiViet />

      {/* Chừa khoảng cách footer */}
      <div style={{ marginBottom: "50px" }}></div>
      <Footer />
    </div>
  );
}

export default Blog;
