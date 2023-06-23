import Head from "next/head";

import WelcomeCard from "@/components/index/WelcomeCard";
import { SITE_TITLE } from "@/lib/constants";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>{SITE_TITLE} - Home</title>
      </Head>
      <WelcomeCard />
    </>
  );
}
