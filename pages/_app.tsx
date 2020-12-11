import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
