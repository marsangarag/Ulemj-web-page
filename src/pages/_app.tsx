import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Page from "components/layout/page";
import AppProvider from "lib/context/app";
import WithPath from "lib/path";

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
                    <WithPath>
                        <Page>
                            <Component {...pageProps} />
                        </Page>
                    </WithPath>
                </AnimatePresence>
            </AppProvider>
        </>
    );
}
