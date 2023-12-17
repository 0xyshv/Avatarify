import "../styles/globals.css";
import "react-tooltip/dist/react-tooltip.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
