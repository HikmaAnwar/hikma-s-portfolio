"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactP5Wrapper = dynamic(() => import("react-p5-wrapper"), {
  ssr: false,
});

const Sketch = (p5) => {
  let angle;

  p5.setup = () => {
    p5.createCanvas(400, 360, "transparent");
    angle = p5.PI / 4;
    p5.stroke(255);
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(200, p5.height);
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16);
    branch(100);
  };

  function branch(len) {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      branch(len * 0.67);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * 0.67);
      p5.pop();
    }
  }
};

const FractalTree = () => (
  <div className="inset-0 w-full z-0">
    {ReactP5Wrapper && <ReactP5Wrapper sketch={Sketch} />}
  </div>
);

export default FractalTree;
