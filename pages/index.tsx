import * as React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import Link from "next/link";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <ul>
        <li>
          <Link href="/swipe-routing">
            <a>Swipe Routing</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;
