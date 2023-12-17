import GridLoader from "react-spinners/PulseLoader";

export default function Loader() {
  return (
    <div>
      <GridLoader size={12} margin={4} className="opacity-40" />
    </div>
  );
}
