import React from "react";

const Detail = ({ title }) => {
  return (
    <div>
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
