import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <ToastContainer theme="dark" />
      <Head>
        <title>Pets Clinic</title>
      </Head>
      <style jsx global>
        {"body {background: #f5f5f5"}
      </style>
    </>
  );
}

export default MyApp;
