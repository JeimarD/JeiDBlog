import Head from "next/head";
import React from "react";
import { Header } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>JeiDBlog || The Blog of Webdev</title>
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
