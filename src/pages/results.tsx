import Head from "next/head";

import { SITE_TITLE } from "@/lib/constants";

export default function Results(): JSX.Element {
  return (
    <>
      <Head>
        <title>{SITE_TITLE} - Results</title>
      </Head>
      <h1>Results</h1>
      <p>Coming soon</p>
    </>
  );
}
