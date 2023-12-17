import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Enter App
      </button>
    </div>
  );
}
