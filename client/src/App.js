import React from "react";
import {Helmet} from 'react-helmet'
import Layout from "./layout/Layout";
import Router from "./Router";


const App = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Layout>
        <Router />
      </Layout>
    </>
  );
};

export default App;
