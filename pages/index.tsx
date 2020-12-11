import Head from "next/head";
import { Wrapper } from "../styles/index.style";
import Header from "../components/Header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header />
      </Wrapper>
    </div>
  );
}
