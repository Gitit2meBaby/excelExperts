import React from "react";

import Contact from "../../components/Contact";
import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain2 from "./(components)/PageSegmentMain2";
import PageSegmentCenter from "./(components)/PageSegmentCenter";
import SegmentMainCopy from "./(components)/SegmentMainCopy";
import ExpertsAwait from "../../components/ExpertsAwait";
import Promo from "../../components/Promo";
import ContentsCopy from "./(components)/ContentsCopy";
import Contents from "./(components)/Contents";

import graphic from "../../public/pageHeros/graphic.webp";
import codeMob from "../../public/pageHeros/mob/codeMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.excelexperts.com.au/custom-design-and-development/",
      url: "https://www.excelexperts.com.au/custom-design-and-development/",
      name: "Custom Design and Development | Excel Experts",
      isPartOf: {
        "@id": "https://www.excelexperts.com.au/#website",
      },
      about: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      datePublished: "2018-01-02T13:09:44+00:00",
      dateModified: "2022-11-09T00:30:41+00:00",
      description:
        "We can build What You Need! We have extensive experience in all aspects of Excel custom design and development including. Call us 1300102810",
      breadcrumb: {
        "@id":
          "https://www.excelexperts.com.au/custom-design-and-development/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.excelexperts.com.au/custom-design-and-development/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.excelexperts.com.au/custom-design-and-development/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.excelexperts.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Custom Design and Development",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.excelexperts.com.au/#website",
      url: "https://www.excelexperts.com.au/",
      name: "Excel Experts - Microsoft Excel Design, Development and Consulting, Office Experts Group",
      description:
        "Your Microsoft Technology Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.excelexperts.com.au/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.excelexperts.com.au/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-AU",
    },
  ],
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Contents />
      <ContentsCopy />
      <ServiceHero
        title="Custom Design and Development"
        desktopImage={graphic}
        mobileImage={codeMob}
        altDesk={"graphic of a computer"}
        altMob={"code on a computer"}
      />
      <PageSegmentMain2 />
      <PageSegmentCenter />
      <SegmentMainCopy />
      <ExpertsAwait />
      <Promo
        h2="Custom Excel Solutions"
        p="Looking for bespoke Excel solutions? Our experts can automate, integrate, and transform your data processes for greater efficiency and performance."
      />
      <Contact />
    </>
  );
};

export default Page;
