import React from "react";
import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

const SwipeRoutingPage: NextPage = () => {
  return (
    <Layout title="Swipe Routing Sample">
      <ul>
        {[0, 1, 2, 3].map(i => {
          return (
            <li key={i}>
              <Link href="/swipe-routing/[pageId]" as={`/swipe-routing/${i}`}>
                <a>{`/swipe-routing/${i}`}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default SwipeRoutingPage;
