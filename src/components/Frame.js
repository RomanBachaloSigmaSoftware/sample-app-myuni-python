import React from "react";

export const Frame = ({ src }) => (
  <iframe
    src={src}
    style={{
      position: "fixed",
      height: "100%",
      width: "100%",
      top: "0"
    }}
  ></iframe>
);
