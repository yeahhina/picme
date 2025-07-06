import Jimp from "jimp";
import { useEffect, useState } from "react";
import "./FilteredImage.css";

export function FilteredImage({ imageUrl, filter }) {
  const [jimpImage, setJimpImage] = useState(null);
  const [image, setImage] = useState(null);
  const [transformedImage, setTransformedImage] = useState(null);
  useEffect(() => {
    const loadImage = async () => {
      const jimpImage = await Jimp.read(imageUrl);
      setJimpImage(jimpImage);
      const image = await jimpImage.getBase64Async(Jimp.MIME_PNG);
      setImage(image);
    };
    loadImage();
  }, [imageUrl, filter]);
  useEffect(() => {
    if (jimpImage) {
      const transformImage = async () => {
        switch (filter) {
          case "greyscale":
            await jimpImage.greyscale();
            break;
          case "sepia":
            await jimpImage.sepia();
            break;
          case "natural":
            await jimpImage.normalize();
            break;
          default:
        }
        const transformedImage = await jimpImage.getBase64Async(Jimp.MIME_JPEG);
        setTransformedImage(transformedImage);
      };
      transformImage();
    }
  }, [jimpImage, filter]);

  return (
    <>
      <img className="capturedImage" src={transformedImage} />
    </>
  );
}
