import { FooterSectionProps } from "../types/interfaces/FooterProps";

export const footerLinks: FooterSectionProps[] = [
    {
      title: "Products",
      links: [
        { display: "USD Account", url: "/usd-account" },
        { display: "Invoice Generator", url: "/invoice-generator" },
        { display: "Virtual USD Card", url: "/virtual-usd-card" },
        { display: "Currency Exchanger", url: "/currency-exchanger" },
      ],
    },
    {
      title: "Company",
      links: [
        { display: "About us", url: "/about" },
        { display: "Careers", url: "/careers" },
        { display: "Blog", url: "/blog" },
      ],
    },
    {
      title: "Legal",
      links: [
        { display: "Terms of Service", url: "/terms" },
        { display: "Privacy Policy", url: "/privacy" },
        { display: "Cookies Policy", url: "/cookies" },
      ],
    },
    {
      title: "Support",
      links: [
        { display: "Help", url: "/help" },
        { display: "Tutorials", url: "/tutorials" },
        { display: "Contact us", url: "/contact" },
        { display: "FAQs", url: "/faqs" },
      ],
    },
  ];
  