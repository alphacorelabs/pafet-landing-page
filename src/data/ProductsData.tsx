import { ProductProps } from "../types/interfaces/ProductProps";
import { CurrencyProductIcon, InvoiceGeneratorIcon, USDAccountsIcon, VirtualUSDIcon } from "../ui/icons";

export const productsData: ProductProps[] = [
    {
        subTitle: "USD Accounts",
        subTitleIcon: USDAccountsIcon,
        heading: "Get Paid Directly.",
        subHeading: "Your clients pay into your personal USD account (in your name) like they would any US-based business. Funds arrive instantly.",
        benefits: [
            "Personal USD account in your name",
            "Receive from clients, platforms, or employers",
            "Hold funds in dollars to protect against currency fluctuation",
            "No monthly fees, no hidden charges",
        ],
        imageUrl: "https://miscfiles.nyc3.cdn.digitaloceanspaces.com/Frame%202147207687.webp",
        slug: "usd-accounts",
        callToAction: "Open Your USD Account Now",
        callToActionUrl: "/",
    },

    {
        subTitle: "Invoice Generator",
        subTitleIcon: InvoiceGeneratorIcon,
        heading: "Create Professional Invoices. Get Paid Faster",
        subHeading: "Create branded invoices in minutes. Add your services, set payment terms, and send. Pafet tracks when clients view your invoice and sends automatic reminders so you never have to chase payments.",
        benefits: [
            "Customizable invoice templates",
            "Real-time tracking and alerts",
            "Auto-reminders for late payments",
            "Instant payouts to your USD wallet",
        ],
        imageUrl: "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/jlpa1ubnwxmaymbobsph",
        slug: "invoice-generator",
        callToAction: "Create Invoice with Pafet",
        callToActionUrl: "/",
    },

    {
        subTitle: "Virtual USD Card",
        subTitleIcon: VirtualUSDIcon,
        heading: "Spend Anywhere with Your Virtual Mastercard",
        subHeading: "Get a virtual card issued instantly to your dashboard. Perfect for software subscriptions, digital advertising, and any online purchase worldwide. Top up from your USD balance instantly. Freeze or unfreeze anytime from your phone.",
        benefits: [
            "Accepted globally",
            "Issued instantly",
            "Real-time alerts and full control (freeze/unfreeze anytime)",
            "Instant top-ups from your USD balance",
        ],
        imageUrl: "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/itsktk9wscbia36rzag9",
        slug: "virtual-usd-cards",
        callToAction: "Create Your Virtual USD Card",
        callToActionUrl: "/",
    },

    {
        subTitle: "Currency Exchange",
        subTitleIcon: CurrencyProductIcon,
        heading: "Convert to Local Currency Only When You Want",
        subHeading: "No forced conversions. No terrible bank rates. You decide when to convert, and you see exactly what you'll get. We show you the real mid-market rate. Our 1.5% fee is clearly stated. Withdraw to any Nigerian bank or mobile wallet. Funds arrive in hours, not days.",
        benefits: [
            "Real-time, competitive rates",
            "Zero hidden charges",
            "Fast local withdrawals to any bank or mobile wallet",
            "Convert as much or as little as you need",
        ],
        imageUrl: "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/vsiikavouxamtaftorav",
        slug: "currency-exchange",
        callToAction: "Convert money with Pafet",
        callToActionUrl: "/",
    },
]