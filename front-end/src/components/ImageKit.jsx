import React from "react";
import { IKImage } from "imagekitio-react";

export const ImageKit = ({ src, className, width, height, alt }) => {
  const validSrc = src ? src : null;
  console.log("ImageKit src:", validSrc);

  return validSrc ? (
    <IKImage
      alt={alt}
      path={validSrc}
      className={className}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      width={width}
      height={height}
    />
  ) : null;
};
