import Seo from "@/components/Seo";
// import { useRouter } from "next/router";
import React from "react";

const Detail = ({ params }) => {
  /*
   * 빈 배열을 추가한 이유
   * 페이지 로드 시, html이 먼저 로드 되고 js파일이 로드 되는데,
   * js파일이 로드되기 전 오류를 방지하기 위해 빈 배열을 추가하였음
   */
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
  return {
    props: {
      params,
    },
  };
};
