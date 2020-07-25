import React from "react";
import ExplainBanner from "../components/ExplainBanner/ExplainBanner";
import HomePageFeed from "../components/HomePageFeed/HomePageFeed";
import { getWorkList } from "../util/serverDb";

function IndexPage(props) {
  return (
    <>
      {/* Explaination Banner */}
      <ExplainBanner />

      {/* News Feed */}
      <HomePageFeed posts={props.posts} />
    </>
  );
}

// export async function getServerSideProps(context) {
//   // Get external data from the file system, API, DB, etc.

//   // The value of the `props` key will be
//   //  passed to the `Home` component
//   return {
//     custom: [],
//   };
// }

export const getServerSideProps = async () => {
  const response = await getWorkList();
  return { props: { posts: JSON.parse(JSON.stringify(response.data)) } };
};

export default IndexPage;
