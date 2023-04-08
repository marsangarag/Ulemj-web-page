import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Page from "components/layout/page";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Toki Call Service</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=0"
                />
            </Head>
            <AnimatePresence initial={false} mode="wait">
                <Page>
                    <Component {...pageProps} />
                </Page>
            </AnimatePresence>
        </>
    );
}
