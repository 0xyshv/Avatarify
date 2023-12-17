import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center mt-48">
      <div className="font-semibold text-2xl text-violet-100">
        Pixels lets you generate cool avatars from your profile pictures using
        AI.
        <br />
        Users can upload their images and enter a prompt, and then the AI would
        <br /> generate avatar for it.
      </div>
      <button
        className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Enter App
      </button>
    </div>
  );
}
