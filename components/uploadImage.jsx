import * as React from "react";
import { Trash as TrashIcon } from "lucide-react";

export default function ImageUploader({
  setImage,
  imageExists,
  setImageExists,
}) {
  const [imageUrl, setImageUrl] = React.useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = (e) => {
        const base64data = e.target.result;
        console.log(base64data);
        setImageUrl(base64data);
        setImage(base64data);
        setImageExists(true);
      };

      reader.readAsDataURL(file);
    }
  };

  const reset = () => {
    setImage(null);
    setImageUrl(null);
    setImageExists(false);
  };

  return (
    <div className=" text-violet-100 ">
      {!imageUrl ? (
        <div>
          <input
            id="image-input"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="h-80 w-full flex-grow rounded-l-md text-cyan-950 mt-2"
          />
        </div>
      ) : (
        <div className="flex w-full justify-center">
          <img
            src={imageUrl}
            alt="Uploaded"
            className="rounded-l-md text-cyan-950 mt-2 h-80"
          />
        </div>
      )}

      {imageExists && (
        <div className="animate-in fade-in duration-700 text-center">
          <button className="lil-button" onClick={reset}>
            <TrashIcon className="icon" />
          </button>
        </div>
      )}
    </div>
  );
}
