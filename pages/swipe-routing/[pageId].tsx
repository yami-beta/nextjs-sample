/** @jsx jsx */
import { NextPage } from "next";
import { useRouter } from "next/router";
import SwipeableViews from "react-swipeable-views";
import Layout from "../../components/Layout";
import { jsx, css } from "@emotion/core";

const SwipeRoutingPage: NextPage = () => {
  const router = useRouter();
  const { pageId } = router.query;
  const pages = [
    {
      name: "Page 0",
      bg: "#00bcd4"
    },
    {
      name: "Page 1",
      bg: "#4caf50"
    },
    {
      name: "Page 2",
      bg: "#ff9800"
    },
    {
      name: "Page 3",
      bg: "#e91e63"
    }
  ];

  return (
    <Layout title="Swipe Routing Sample">
      {pageId && (
        <SwipeableViews
          enableMouseEvents={true}
          resistance={true}
          onChangeIndex={(index, _) => {
            router.replace(router.pathname, `/swipe-routing/${index}`, {
              shallow: false
            });
          }}
          index={parseInt(pageId as string, 10)}
        >
          {pages.map(page => {
            return (
              <div
                key={page.name}
                css={css`
                  min-height: 400px;
                  background-color: ${page.bg};
                `}
              >
                {page.name}
              </div>
            );
          })}
        </SwipeableViews>
      )}
    </Layout>
  );
};

export default SwipeRoutingPage;
