// components/cards/PaperFan.jsx
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import "./PaperFan.css";

export default function PaperFan({
  className = "",
  layers = [],
  width = "20rem",
  height = "28rem",
  // Card to front on hover
  hoverRaise = false,
  hoverZIndex = 10_000,
  children, // content for layers
}) {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false, // animate again if scrolling back
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      ref={ref}
      className={`paperfan ${inView ? "is-visible" : ""} ${className}`}
      style={{
        "--fan-width": width,
        "--fan-height": height,
      }}
    >
      {layers.map((layer, i) => {
        // Compute zIndex:
        // - default stack is i+1
        // - if hoverRaise is true and this is hovered, use hoverZIndex (or allow layer.zIndex override)
        const baseZ = layer.zIndex ?? (i + 1);
        const zIndex =
          hoverRaise && hoveredIndex === i
            ? Math.max(baseZ, hoverZIndex)
            : baseZ;

        return (
          <div
            key={i}
            className={`paper ${layer.className ?? ""}`}
            tabIndex={hoverRaise ? 0 : -1}
            onMouseEnter={hoverRaise ? () => setHoveredIndex(i) : undefined}
            onMouseLeave={hoverRaise ? () => setHoveredIndex(null) : undefined}
            onFocus={hoverRaise ? () => setHoveredIndex(i) : undefined}
            onBlur={hoverRaise ? () => setHoveredIndex(null) : undefined}
            style={{
              "--x": `${layer.x}px`,
              "--y": `${layer.y}px`,
              "--rot": `${layer.rot}deg`,
              "--paperColor": layer.color || "transparent",
              "--paperShadow":
                layer.shadow !== undefined ? layer.shadow : undefined,
              "--paperRadius": layer.radius || "0",
              "--paperPadding": layer.padding || "0",
              "--width": `${layer.width || width}`,
              "--height": `${layer.height || height}`,
              ...(layer.style || {}),
              zIndex, // ⬅️ use computed zIndex (not i + 1)
            }}
          >
            {layer.content}
            {i === layers.length - 1 ? children : null}
          </div>
        );
      })}
    </div>
  );
}