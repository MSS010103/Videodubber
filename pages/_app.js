// pages/_app.js
import { MantineProvider } from "@mantine/core";
import "../src/app/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
