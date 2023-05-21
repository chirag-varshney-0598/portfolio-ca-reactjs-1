import React from "react";
import Loader from "react-js-loader";
export default function DataLoader() {
  return (
    <div>
      <Loader
        type="bubble-spin"
        bgColor={"#E73725"}
        title={"Loading..."}
        color={"#E73725"}
        size={60}
      />
    </div>
  );
}
