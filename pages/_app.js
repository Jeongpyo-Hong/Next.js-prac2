import NavBar from "@/components/NavBar";
import React from "react";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <h1>hello</h1>
      <style jsx global>
        {`
          span {
            color: blue;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default App;
