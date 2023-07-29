import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "react-multi-carousel/lib/styles.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });




export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Movie Critical</title>
        <meta name="description" content="Movie Site!" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
        <Component {...pageProps} />

    </>
  );
}
