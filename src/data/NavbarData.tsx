import { NavbarDataProps, NavIconProps } from "../types/interfaces/NavbarProps";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { ImAppleinc } from "react-icons/im";
import { CurrencyExchangeIcon, DocumentIcon, DollarPriceIcon, InvoiceIcon, VirtualCardIcon } from "../ui/icons";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


export const NavbarData: NavbarDataProps[] = [

    {
        id: "",
        display: "Home",
        path: "",
    },

    {
        id: "products",
        display: "Products",
        path: "/products",
        hasChildren: true,
        submenu: [
            {
                title: "USD Accounts",
                description: "Create a free USD account in minutes.",
                icon: DollarPriceIcon,
                url: "/products/usd-accounts",
                iconBgColor: "brand.400",
              },
              {
                title: "Virtual USD Card",
                description: "Pay for anything, anywhere. Instantly.",
                icon: VirtualCardIcon,
                url: "/products/virtual-usd-cards",
                iconBgColor: "brand.100",
              },
              {
                title: "Invoice Generator",
                description: "Create professional invoices. Get paid faster.",
                icon: InvoiceIcon,
                url: "/products/invoice-generator",
                iconBgColor: "brand.600",
              },
              {
                title: "Currency Exchange",
                description: "Convert only when you want — at rates you trust.",
                icon: CurrencyExchangeIcon,
                url: "/products/currency-exchange",
                iconBgColor: "brand.700",
              },
        ]
    },

    {
        id: "about-us",
        display: "About",
        path: "/about-us",
    },

    {
        id: "faqs",
        display: "FAQs",
        path: "/faqs",
    },

    {
        id: "support",
        display: "Support",
        path: "/support",
    },

]


export const navbarIcons: NavIconProps[] = [
    {
        icon: IoLogoGooglePlaystore,
        title: "Playstore",
        url: "",
    },

    {
        icon: ImAppleinc,
        title: "Applestore",
        url: "",
    },
]


export const socialIcons = [
    {
        title: "Instagram",
        url: "https://instagram.com/usepafet",
        icon: RiInstagramFill 
    },

    {
        title: "Twitter",
        url: "https://x.com/usepafet",
        icon: FaXTwitter 
    },


    {
        title: "LinkedIn",
        url: "https://linkedin.com/company/usepafet",
        icon: FaLinkedinIn 
    },
]