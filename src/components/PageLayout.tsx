import Head from "next/head";
import { ReactNode } from "react";

import styles from "./page-layout.module.css";
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
      <div className={styles.page}>{children}</div>
    </>
  );
}
