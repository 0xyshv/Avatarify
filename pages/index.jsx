import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center mt-48">
      <div className="font-semibold text-2xl text-violet-100">
        Avatarify is a platform that allows users to upload their images, and
        the AI would generate avatars.
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
