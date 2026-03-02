// components/cards/AboutInfoCard.jsx
import "./AboutInfoCard.scss";

export default function AboutInfoCard({
  title,
  children,
  className = "",
  align = "center",       // "left" | "center"
  size = "md",            // "sm" | "md" | "lg"
  shadow = "md",          // "none" | "sm" | "md" | "lg"
  radius = "lg",          // "sm" | "md" | "lg"
}) {
  return (
    <section
      className={[
        "about-info",
        `about-info--align-${align}`,
        `about-info--size-${size}`,
        `about-info--shadow-${shadow}`,
        `about-info--radius-${radius}`,
        className,
      ].join(" ")}
    >
      {title ? <h2 className="about-info__title">{title}</h2> : null}
      <div className="about-info__body">{children}</div>
    </section>
  );
}