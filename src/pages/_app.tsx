import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Page from "components/layout/page";
import { useEffect } from "react";

import AppProvider from "lib/context/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Ulemj</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=0"
                />
            </Head>
            <AppProvider>
                <AnimatePresence mode="wait">
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </AnimatePresence>
            </AppProvider>
        </>
    );
}
