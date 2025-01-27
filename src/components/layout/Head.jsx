import React from "react";
import { Helmet } from "react-helmet-async";

const Head = () => {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Landing Page para Q10" />
      <link href="/dist/styles.css" rel="stylesheet"></link>
      <link rel="icon" href="/ico.ico" />
      <title>Prueba Q10 Manuela</title>
    </Helmet>
  );
};

export default Head;
