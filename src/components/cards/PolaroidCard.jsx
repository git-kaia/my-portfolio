// components/cards/PolaroidCard.jsx
import "./PolaroidCard.scss";

export default function PolaroidCard({
  src,
  alt = "",
  caption = "",
  className = "",
}) {
  return (
    <figure className={`polaroid ${className}`}>
        <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="polaroid__photo"
          />

        {caption ? (
          <figcaption className="polaroid__caption">{caption}</figcaption>
        ) : null}
    </figure>
  );
}
