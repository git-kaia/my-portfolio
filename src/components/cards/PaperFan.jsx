// components/cards/PaperFan.jsx
import { useInView } from "react-intersection-observer";
import "./PaperFan.css";

export default function PaperFan({
  className = "",
  layers = [],
    width = "20rem",
  height = "28rem",
  children, // content for layers
}) {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: false, // animate again if scrolling back
  });

  return (
    <div
      ref={ref}
      className={`paperfan ${inView ? "is-visible" : ""} ${className}`}
      style={{
        "--fan-width": width,
        "--fan-height": height,
      }}

    >
      {layers.map((layer, i) => (
        <div
          key={i}
          className="paper"
          style={{
            "--x": `${layer.x}px`,
            "--y": `${layer.y}px`,
            "--rot": `${layer.rot}deg`,
            "--paperColor": layer.color,
            "--width": `${layer.width || width}`,
            "--height": `${layer.height || height}`,
            zIndex: i + 1,
          }}
        >
          {layer.content}
          {i === layers.length - 1 ? children : null}
        </div>
      ))}
    </div>
  );
}