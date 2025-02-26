import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReactP5Wrapper = dynamic(
  () => import("react-p5-wrapper").then((mod) => mod.ReactP5Wrapper),
  { ssr: false }
);

const Sketch = (p5) => {
  let angle;

  p5.setup = () => {
    p5.createCanvas(360, 360);
    angle = p5.PI / 4;
    p5.stroke(225);
  };

  p5.draw = () => {
    p5.background(10, 26, 60);
    p5.translate(200, p5.height);
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16);
    drawBranch(100);
  };

  function drawBranch(len) {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      drawBranch(len * 0.67);
      p5.pop();

      p5.push();
      p5.rotate(-angle);
      drawBranch(len * 0.67);
      p5.pop();
    }
  }
};

const FractalTree = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="inset-0 z-0 w-full mx-auto ">
      <ReactP5Wrapper sketch={Sketch} />
    </div>
  );
};

export default FractalTree;
