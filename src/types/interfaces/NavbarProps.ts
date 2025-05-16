export interface NavIconProps {
    icon: any;
    title: string;
    url: string;
}

export interface SubMenuProps {
    icon: any;
    title: string;
    description: string;
    url: string;
    iconBgColor?: string;
}



export interface NavbarDataProps {
    id: string;
    display: string;
    path: string;
    hasChildren?: boolean;
    submenu?: SubMenuProps[]
}
