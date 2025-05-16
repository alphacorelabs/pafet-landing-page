export interface FooterLink {
    display: string;
    url: string;
};
  
export interface FooterSectionProps {
    title: string;
    links: FooterLink[];
};