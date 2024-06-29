import React from "react";

const IframeComponent = () => {
  return (
    <div>
      <iframe
        src="https://www.youtube.com/embed/IZLp-TZyDkQ"
        title="Embedded Video"
        width="100%"
        height="350"
        frameBorder="0"
        allowFullScreen
        style={{ borderRadius: "5px" }}
      />
    </div>
  );
};

export default IframeComponent;
