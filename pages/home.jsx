import React, { useState } from "react";
import ImageUploader from "components/uploadImage";
import PromptForm from "components/promptForm";
import Error from "components/error";
import Predictions from "components/predictions";
import naughtyWords from "naughty-words";
import uploadFile from "lib/upload";
import sleep from "lib/sleep";
import Script from "next/script";

const Main = () => {
  const [image, setImage] = useState(null);
  const [imageExists, setImageExists] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [predictions, setPredictions] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // track submissions so we can show a spinner while waiting for the next prediction to be created
    setSubmissionCount(submissionCount + 1);

    const prompt = e.target.prompt.value
      .split(/\s+/)
      .map((word) => (naughtyWords.en.includes(word) ? "something" : word))
      .join(" ");

    setError(null);
    setIsProcessing(true);

    const fileUrl = await uploadFile(image);

    const body = {
      prompt: "In the style of TOK, " + prompt,
      image: fileUrl,
    };

    const response = await fetch(
      "https://pixels-umber-eta.vercel.app/api/predictions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    let prediction = await response.json();

    setPredictions((predictions) => ({
      ...predictions,
      [prediction.id]: prediction,
    }));

    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(500);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      setPredictions((predictions) => ({
        ...predictions,
        [prediction.id]: prediction,
      }));
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
    }

    setIsProcessing(false);
  };

  return (
    <>
      <main className="container max-w-[1024px] mx-auto p-5 mt-6">
        <div className="flex flex-row gap-8 ">
          <div className="container max-w-[512px] mx-auto flex-1 mt-8 border border-violet-100 p-2 rounded-lg">
            <ImageUploader
              setImage={setImage}
              imageExists={imageExists}
              setImageExists={setImageExists}
            />
            <PromptForm
              onSubmit={handleSubmit}
              isProcessing={isProcessing}
              scribbleExists={imageExists}
            />
            <Error error={error} />
          </div>
          <div className="container max-w-[512px] mx-auto flex-1">
            <Predictions
              predictions={predictions}
              isProcessing={isProcessing}
              submissionCount={submissionCount}
            />
          </div>
        </div>
        <Script src="https://js.bytescale.com/upload-js-full/v1" />
      </main>
    </>
  );
};

export default Main;
