import React from "react";

const IframeComponent = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="relative overflow-hidden" style={{ paddingTop: "56.25%" }}>
        <iframe
          src="https://www.youtube.com/embed/IZLp-TZyDkQ"
          title="Embedded Video"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allowFullScreen
          style={{ borderRadius: "5px" }}
        />
      </div>
    </div>
  );
};

export default IframeComponent;
