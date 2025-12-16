// FractalTree.jsx
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReactP5Wrapper = dynamic(
  () => import("react-p5-wrapper").then((mod) => mod.ReactP5Wrapper),
  { ssr: false }
);

const Sketch = (p5) => {
  let angle;

  p5.setup = () => {
    // Create canvas with responsive size
    const size = Math.min(window.innerWidth * 0.9, 500); // 90% of viewport width, max 500px
    p5.createCanvas(size, size);
    angle = p5.PI / 4;
    p5.stroke(225);
  };

  p5.draw = () => {
    p5.background(9, 18, 47);
    p5.translate(p5.width / 2, p5.height); // Center the tree
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16);
    drawBranch(p5.width / 4); // Scale branch length with canvas size
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

  // Handle window resize
  p5.windowResized = () => {
    const size = Math.min(window.innerWidth * 0.9, 500);
    p5.resizeCanvas(size, size);
  };
};

const FractalTree = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="inset-0 z-0 w-full max-w-[500px] mx-auto -ml-20 sm:ml-0">
      <ReactP5Wrapper sketch={Sketch} />
    </div>
  );
};

export default FractalTree;
