import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Companies and Organisations | Excel-Integrated Word Solutions",
  description:
    "Leverage our Excel expertise to create integrated Word templates that seamlessly connect with your spreadsheet data. Our solutions combine Excel automation with Word document generation for streamlined corporate reporting.",

  openGraph: {
    title: "Companies and Organisations | Excel-Integrated Word Solutions",
    description:
      "Expert team delivering Excel-integrated Word templates for companies. Automate document generation from Excel data while maintaining corporate identity standards.",
    url: "https://www.excelexperts.com.au/services/microsoft-word/companies-and-organisations/",
  },

  keywords: [
    // "excel word integration",
    // "excel data automation",
    // "spreadsheet document generation",
    // "excel reporting templates",
    // "automated financial reports",
    // "excel word template design",
    // "data-driven documents",
    "corporate reporting automation",
    // "excel document formatting",
    // "spreadsheet integration",
    // "excel template consulting",
    // "financial document automation",
    // "excel reporting solutions",
    // "spreadsheet document control",
    // "excel data management",
  ],
  canonical:
    "https://www.excelexperts.com.au/services/microsoft-word/companies-and-organisations/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
