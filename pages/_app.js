import "@/styles/globals.css";
import { AuthProvidor } from "@/lib/auth";
import { Global, css } from "@emotion/core";
import { ThemeProvider, CSSReset, useColorMode } from "@chakra-ui/core";

import customtheme from "@/styles/theme";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#171923"};
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customtheme}>
      <AuthProvidor>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </AuthProvidor>
    </ThemeProvider>
  );
}

export default MyApp;
