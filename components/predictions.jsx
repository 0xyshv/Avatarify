import { Fragment, useRef } from "react";
import Loader from "components/loader";
import { saveAs } from "file-saver";

export default function Predictions({ predictions, submissionCount }) {
  const scrollRef = useRef(null);
  if (submissionCount === 0)
    return (
      <div className="text-center p-8 border border-violet-100 rounded mt-10">
        <img
          src="logo.png"
          alt="Default Avatar"
          className="mx-auto mb-4"
          style={{ height: "300px", width: "300px" }}
        />
        <p className="text-violet-100 ">Your avatar will display here.</p>
      </div>
    );

  return (
    <section className="w-full my-10">
      {submissionCount > Object.keys(predictions).length && (
        <div className="pb-10 mx-auto w-full text-center">
          <div className="pt-10" ref={scrollRef} />
          <Loader />
        </div>
      )}

      {Object.values(predictions)
        .slice()
        .reverse()
        .map((prediction, index) => (
          <Fragment key={prediction.id}>
            {index === 0 &&
              submissionCount == Object.keys(predictions).length && (
                <div ref={scrollRef} />
              )}
            <Prediction prediction={prediction} />
          </Fragment>
        ))}
    </section>
  );
}

export function Prediction({ prediction }) {
  if (!prediction) return null;

  const downloadAvatar = async () => {
    saveAs(prediction.output[prediction.output.length - 1], "AI_Avatar.jpg"); // Put your image URL here
  };

  return (
    <div className="  text-violet-700 text-center border border-violet-100 rounded">
      <div className="aspect-circle flex flex-col justify-center items-center mx-auto">
        {prediction.output?.length ? (
          <>
            <img
              src={prediction.output[prediction.output.length - 1]}
              alt="output image"
              className="h-80 pointer-events-none mt-2"
            />
            <div className="text-center text-violet-100 px-4 py-2 opacity-60 text-xl">
              Your Avatar is now ready.
            </div>
            <div className="flex mt-2 justify-center">
              <button
                className="bg-violet-700 p-4 rounded-lg text-white font-bold mb-2"
                onClick={downloadAvatar}
              >
                Download Avatar
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-80 place-items-center">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}
