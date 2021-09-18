import { LayoutProps } from "../../types";

import Head from "next/head";

export default function AccountLayout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title} | RoomBuds</title>
        <link rel="icon" href="./handshake.svg" />
      </Head>
      {children}
    </>
  );
}
