// components/cards/PaperFan.jsx
import { useInView } from "react-intersection-observer";
import "./PaperFan.css";

export default function PaperFan({
  className = "",
  layers = [
    { x: 70, y: 0, rot: 5, color: "var(--bgSecondary)" },
    { x: 25, y: 10, rot:10, color: "var(--bgCardPrimary)" },
    { x: -25, y: 10, rot: 6, color: "var(--bgCardSecondary)" },
    { x: 0, y: 2, rot: 2, color: "var(--bgSecondary)" },
  ],
  children, // content on the top paper (optional)
}) {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: false, // animate again if scrolling back
  });

  return (
    <div
      ref={ref}
      className={`paperfan ${inView ? "is-visible" : ""} ${className}`}
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
            zIndex: i + 1,
          }}
        >
          {i === layers.length - 1 ? children : null}
        </div>
      ))}
    </div>
  );
}