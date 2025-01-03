import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title:
    "Excel-Word Integration Tools | Custom Ribbon Design | Data Automation Tools",
  description:
    "Expert customization of integrated Excel-Word toolbars and ribbons to streamline data transfer and automate report generation. Our team delivers efficient solutions for seamless spreadsheet-to-document workflow.",

  openGraph: {
    title: "Excel-Integrated Custom Toolbars & Ribbons Development",
    description:
      "Expert customization of integrated Excel-Word toolbars and ribbons to streamline data transfer and automate report generation. Our team delivers efficient solutions for seamless spreadsheet-to-document workflow.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons/",
  },

  keywords: [
    // Core services
    // "excel word integration tools",
    // "excel data automation ribbons",
    // "spreadsheet integration toolbars",
    // "excel reporting automation",
    // "custom excel word tools",

    // // Specific features
    // "excel data transfer buttons",
    // "automated report generation",
    // "spreadsheet integration tools",
    // "excel ribbon programming",
    "data automation interfaces",

    // Business benefits
    // "financial report automation",
    // "spreadsheet workflow optimization",
    // "data transfer efficiency",
    // "excel productivity tools",
    // "automated data extraction",

    // // Location-specific
    // "excel integration australia",
    // "spreadsheet automation sydney",
    // "data automation melbourne",
    // "excel integration brisbane",
    // "custom excel solutions perth",
  ],
  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/custom-toolbars-and-ribbons/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
