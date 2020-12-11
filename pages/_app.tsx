import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import "../styles/app.css";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
