// src/pages/_app.tsx
import { ChakraProvider } from "@chakra-ui/provider";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import type { AppProps } from "next/app";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
