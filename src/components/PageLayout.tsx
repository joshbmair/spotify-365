import Head from "next/head";
import { ReactNode } from "react";

import { SITE_TITLE } from "@/lib/constants";

interface Props {
  children: ReactNode;
  siteSubtitle: string;
}

export default function PageLayout(props: Props): JSX.Element {
  const { children, siteSubtitle } = props;

  return (
    <>
      <Head>
        <title>
          {SITE_TITLE} - {siteSubtitle}
        </title>
      </Head>
      {children}
    </>
  );
}
