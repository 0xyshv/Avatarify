import React, { useState } from "react";
import ImageUploader from "components/uploadImage";

const Main = () => {
  const [image, setImage] = useState(null);
  const [imageExists, setImageExists] = useState(false);

  return (
    <ImageUploader
      setImage={setImage}
      imageExists={imageExists}
      setImageExists={setImageExists}
    />
  );
};

export default Main;
