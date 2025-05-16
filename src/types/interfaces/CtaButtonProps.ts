export interface CtaButtonProps {
    isLink: boolean; 
    isGradient: boolean; 
    isSmall: boolean; 
    btnText: string; 
    btnUrl?: string; 
    isDownload?: boolean;
    isLoading?: boolean;
    isDisabled?: boolean;
    handleClick?: () => void
}