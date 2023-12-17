import Navbar from "components/navbar";
import "../styles/globals.css";
import "react-tooltip/dist/react-tooltip.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
