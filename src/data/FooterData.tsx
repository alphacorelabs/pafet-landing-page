import { FooterSectionProps } from "../types/interfaces/FooterProps";

export const footerLinks: FooterSectionProps[] = [
    {
      title: "Products",
      links: [
        { display: "USD Account", url: "/products/usd-accounts" },
        { display: "Invoice Generator", url: "/products/invoice-generator" },
        { display: "Virtual USD Card", url: "/products/virtual-usd-card" },
        { display: "Currency Exchanger", url: "/products/currency-exchange" },
      ],
    },
    {
      title: "Company",
      links: [
        { display: "About us", url: "/about-us" },
        { display: "Careers", url: "#" },
        { display: "Blog", url: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { display: "Terms of Service", url: "/terms-of-service" },
        { display: "Privacy Policy", url: "/privacy-policy" },
        { display: "KYC/AML", url: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { display: "Help", url: "/support" },
        
        { display: "Contact us", url: "/contact" },
        { display: "FAQs", url: "/faqs" },
      ],
    },
  ];
  