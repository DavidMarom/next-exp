import Image from "next/image";
import PropTypes from "prop-types";

const Img = ({
  url = "",
  alt = "",
  width = 500,
  height = 500,
  quality = 100,
  className,
}) => {
  return (
    <Image
      className={className}
      src={url}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
    />
  );
};

Img.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  quality: PropTypes.number,
};

export default Img;
