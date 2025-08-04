import React from 'react';
import { Link } from "react-router-dom";
import { Button, HStack, Icon } from "@chakra-ui/react"
import { CtaButtonProps } from '../types/interfaces/CtaButtonProps';
import { navbarIcons } from '../data/NavbarData';



function CtaButton({ isLink, btnUrl, isSmall, isGradient, isDownload, btnText, isLoading, isDisabled, handleClick  }: CtaButtonProps) {
  return (
    <>
      {isLink ?
        <Link to={btnUrl || ""} onClick={handleClick}>
            <Button
                bg={isGradient 
                    ? "radial-gradient(132.69% 122.41% at 52.23% 0%, #9153FF 0%, #7238F2 54.74%)" 
                    : "brand.300"
                }
                color="white"
                rounded="full"
                fontSize={16}
                fontWeight={500}
                lineHeight="160%"
                letterSpacing="0%"
                h="initial"
                py={isSmall ? "10px" : "16px"}
                px="24px"
                textAlign="center"
                boxShadow="0px 0px 15px 0px #00000059"
                transition="transform 0.2s ease-in-out"
                _hover={{
                    color: "white",
                    transform: "scale(1.05)"
                }}
                position="relative"
                _before={{
                    content: '" "',
                    w: "196px", 
                    h: isSmall ? "40px": "52px",
                    position: "absolute",
                    top: "2px",
                    left: "4px",
                    borderLeft: "0.5px solid",
                    borderTop: "0.5px solid",
                    borderLeftColor: "rgba(255, 255, 255, 0.2)",
                    borderTopColor: "rgba(255, 255, 255, 0.2)",
                    bgGradient: "radial-gradient(59.18% 87.84% at 6.12% 14.42%, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0) 61.98%)",
                    roundedLeft: "full",
                }}
            >
                {isDownload && (

                    <HStack
                        w="fit-content"
                        justify="center"
                        align="center"
                        gap="6px"
                        mx="6px"
                    >
                        {navbarIcons.map((item: any, i: number) => (
                                <Icon
                                    key={i} 
                                    as={item.icon}
                                    fontSize="16px"
                                
                                />
                        ))}
                    </HStack>
                )}
                {btnText}
            </Button>
        </Link>

        :

        
        

        <Button
            bg={isGradient 
                ? "radial-gradient(132.69% 122.41% at 52.23% 0%, #9153FF 0%, #7238F2 54.74%)" 
                : "brand.300"
            }
            color="white"
            rounded="full"
            fontSize={16}
            fontWeight={500}
            lineHeight="160%"
            letterSpacing="0%"
            h="initial"
            py={isSmall ? "10px" : "16px"}
            px="24px"
            textAlign="center"
            boxShadow="0px 0px 15px 0px #00000059"
            transition="transform 0.2s ease-in-out"
            _hover={{
                color: "white",
                transform: "scale(1.05)"
            }}
            isDisabled={isDisabled}
            isLoading={isLoading}
            onClick={handleClick}
            position="relative"
            _before={{
                content: '" "',
                w: "196px", 
                h: isSmall ? "40px": "52px",
                position: "absolute",
                top: "2px",
                left: "4px",
                borderLeft: "0.5px solid",
                borderTop: "0.5px solid",
                borderLeftColor: "rgba(255, 255, 255, 0.2)",
                borderTopColor: "rgba(255, 255, 255, 0.2)",
                bgGradient: "radial-gradient(59.18% 87.84% at 6.12% 14.42%, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0) 61.98%)",
                roundedLeft: "full",
            }}
        >
            {isDownload && (
                <HStack
                    w="fit-content"
                    justify="center"
                    align="center"
                    gap="8px"
                    mx="2px"
                >
                    {navbarIcons.map((item: any, i: number) => (
                            <Icon
                                key={i} 
                                as={item.icon}
                                fontSize="16px"
                            />
                    ))}
                </HStack>
            )}
            {btnText}
        </Button>
                              
      }
    </>
  )
}

export default CtaButton
