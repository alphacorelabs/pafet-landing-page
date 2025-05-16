import { ProductProps } from "../types/interfaces/ProductProps";
import { CurrencyProductIcon, InvoiceGeneratorIcon, USDAccountsIcon, VirtualUSDIcon } from "../ui/icons";

export const productsData: ProductProps[] = [
    {
        subTitle: "USD Accounts",
        subTitleIcon: USDAccountsIcon,
        heading: "Create a free USD account in minutes.",
        subHeading: "Get a personal USD wallet. Clients pay you locally, and you control your funds.",
        benefits: [
            "Personal USD wallet, in your name",
            "Receive payments from clients, platforms, or employers",
            "Hold funds in dollars to protect against naira devaluation",
            "No monthly fees, no hidden charges",
        ],
        imageUrl: "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/k1rovrjzpz1ajkwsv5us",
        slug: "usd-accounts",
        callToAction: "Create Your USD Account",
        callToActionUrl: "/",
    },

    {
        subTitle: "Invoice Generator",
        subTitleIcon: InvoiceGeneratorIcon,
        heading: "Create professional invoices. Get paid faster 💸 ⚡️",
        subHeading: "Set due dates, add items, and get notified when viewed. We track and send payment reminders for you.",
        benefits: [
            "Customizable templates",
            "Real-time tracking and alerts",
            "Auto-reminders for late payments",
            "Instant payouts to your wallet",
        ],
        imageUrl: "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/jlpa1ubnwxmaymbobsph",
        slug: "invoice-generator",
        callToAction: "Start invoicing with Pafet",
        callToActionUrl: "/",
    },

    {
        subTitle: "Virtual USD Card",
        subTitleIcon: VirtualUSDIcon,
        heading: "Pay for anything, anywhere. Instantly.",
        subHeading: "Works for tools, subscription and other online payments.",
        benefits: [
            "Accepted globally",
            "Instantly issued and ready to use",
            "Real-time alerts and full control (freeze/unfreeze anytime)",
            "Instant top-ups from your balance",
        ],
        imageUrl: "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/itsktk9wscbia36rzag9",
        slug: "virtual-usd-cards",
        callToAction: "Create Your Virtual USD Card",
        callToActionUrl: "/",
    },

    {
        subTitle: "Currency Exchange",
        subTitleIcon: CurrencyProductIcon,
        heading: "Convert only when you want — at rates you trust. ",
        subHeading: "Transparent, low-spread currency exchange to convert between USD and NGN  (or another local currency).",
        benefits: [
            "Real-time, competitive rates",
            "Zero hidden charges",
            "Fast local withdrawals to any local bank or mobile wallet",
            "Convert as much or as little as you need",
        ],
        imageUrl: "https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/Pafet/vsiikavouxamtaftorav",
        slug: "currency-exchange",
        callToAction: "Convert money with Pafet",
        callToActionUrl: "/",
    },
]