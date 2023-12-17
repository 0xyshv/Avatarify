import { useState } from "react";

export default function PromptForm({ onSubmit, scribbleExists }) {
  const [prompt, setPrompt] = useState();

  const disabled = !(scribbleExists && prompt?.length > 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="animate-in fade-in duration-700">
      <div className="flex mt-4">
        <input
          id="prompt-input"
          type="text"
          name="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the avatar you want to create..."
          className="block w-full flex-grow rounded-l-md text-violet-950"
        />

        <button
          className={`bg-violet-500 text-bold text-violet-50 rounded-r-md inline-block px-5 py-3 flex-none ${
            disabled ? "opacity-20 cursor-not-allowed	" : ""
          }`}
          type="submit"
          disabled={disabled}
        >
          Generate Avatar
        </button>
      </div>
    </form>
  );
}
