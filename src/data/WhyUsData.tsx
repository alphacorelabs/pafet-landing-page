import { WhyUsProps } from "../types/interfaces/WhyUsProps";
import { CreditCardIcon, LaptopIcon, SaveMoneyIcon, SettingDoneIcon } from "../ui/icons";

export const whyUsData: WhyUsProps[] = [
    {
        title: "Africa's go-to platform for freelancers.",
        content: "Pafet is more than just a payment platform. It’s a complete financial solution that puts you in control of your money, wherever you are.",
        icon: LaptopIcon,
    },

    {
        title: "Payment Management",
        content: "We’re here to help you simplify your financial life. From invoicing clients to managing your USD account and virtual card, Pafet takes the stress out.",
        icon: SaveMoneyIcon,
    },

    {
        title: "Easy Setup",
        content: "Start using Pafet in minutes. Sign up, verify your identity, and gain access to your USD account, card, and invoicing tools. No long processes or unnecessary delays.",
        icon: SettingDoneIcon,
    },


    {
        title: "Spend Anywhere",
        content: "Your Pafet virtual card works globally. Pay for software, subscriptions, and services, or use it for everyday purchases.",
        icon: CreditCardIcon,
    },
]