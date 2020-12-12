import Head from "next/head";
import { Wrapper } from "../styles/index.style";
import Header from "../components/Header";
import PromoOne from "../components/PromoOne";
import PromoTwo from "../components/PromoTwo";
import Features from "../components/Features";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header />
        <PromoOne />
        <PromoTwo />
        <Features />
        <Contact />
      </Wrapper>
    </div>
  );
}
