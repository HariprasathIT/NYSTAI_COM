import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../../node_modules/react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ src, alt, className }) => {
  // Replace .jpg/.png with .webp automatically
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <LazyLoadImage
        alt={alt}
        effect="blur"
        src={src} // fallback (jpg/png)
        className={className}
      />
    </picture>
  );
};

export default LazyImage;
