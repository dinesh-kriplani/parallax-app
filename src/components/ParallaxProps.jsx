import React from "react";

export default function ParallaxProps({
  bgImg,
  bgColor,
  title,
  subtitle,
  height,
  paraColor,
  titleColor,
  titleBG,
  paragraph,
  paraBG,
}) {
  return (
    <>
      <div
        style={{
          backgroundColor: paraBG,
          color: paraColor,
          textAlign: "left",
          padding: "10px",
        }}
      >
        <p>{paragraph}</p>
      </div>

      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundColor: bgColor,
          backgroundAttachment: "fixed",
          height: height,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4 style={{ color: titleColor, bgColor: titleBG }}>{title}</h4>
        <h6>{subtitle}</h6>
      </div>
    </>
  );
}
