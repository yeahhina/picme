import { useState, useEffect, useRef } from "react";
import { Stage, Layer, Image } from "react-konva";
import Konva from "konva";

export function FilteredImage({ imageUrl, filter }) {
  const [image, setImage] = useState(null);
  const imageRef = useRef(null);
  const switchFilter = () => {
    const node = imageRef.current;
    switch (filter) {
      case "greyscale":
        node.filters([Konva.Filters.Grayscale]);
        break;
      case "vintage":
        node.filters([
          Konva.Filters.Blur,
          Konva.Filters.HSL,
          Konva.Filters.Contrast,
          Konva.Filters.Brighten,
        ]);
        node.blurRadius(0.4);
        node.hue(5);
        node.saturation(-0.5);
        node.contrast(25);
        node.brightness(0.05);
        break;
      default:
        node.filters([]);
        break;
    }
  };
  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;
    img.onload = () => setImage(img);
  }, [imageUrl]);
  useEffect(() => {
    if (image) {
      switchFilter();
      imageRef.current.cache();
      imageRef.current.getLayer().batchDraw();
    }
  }, [image, filter]);
  return (
    <Stage width={257} height={175}>
      <Layer>
        <Image image={image} ref={imageRef} width={257} height={175} />
      </Layer>
    </Stage>
  );
}
