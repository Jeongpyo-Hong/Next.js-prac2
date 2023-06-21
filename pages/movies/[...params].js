import Seo from "@/components/Seo";
// import { useRouter } from "next/router";
import React from "react";

const Detail = ({ params }) => {
  // const router = useRouter();
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h2>{title}</h2>
    </div>
  );
};

export default Detail;

export const getServerSideProps = ({ params: { params } }) => {
  const [title, id] = params;

  return {
    props: {
      title,
    },
  };
};
