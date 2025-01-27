import React from "react";
import { Helmet } from "react-helmet-async";

const SEOMetadata = ({
  title = "Q10 | Partners",
  description = "Obtén ganancias y beneficios exclusivos con el Software Académico integral #1.",
  keywords = "software académico, plataforma integral, TICS, gestión académica",
  canonicalUrl = "https://www.q10.com/Colombia/Partners",
}) => {
  return (
    <Helmet>
      {/* Metadata básica */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Q10" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="http://www.q10.com/Images/Facebook_Shared_solo.png"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="http://www.q10.com/Images/Facebook_Shared_solo.png"
      />
    </Helmet>
  );
};

export default SEOMetadata;
