import UilFacebookF from "@iconscout/react-unicons/icons/uil-facebook-f";
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram";
import UilTwitterAlt from "@iconscout/react-unicons/icons/uil-twitter-alt";
import {
    FooterContainer,
    FooterBackground,
    FooterSubContainer,
    FooterTitle,
    FooterSubTitle,
    FooterList,
    FooterLink,
    FooterCopy,
    FooterSocials,
    FooterSocial,
} from "./styledFooter";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterBackground>
                <FooterSubContainer className="container grid">
                    <div>
                        <FooterTitle>Omar</FooterTitle>
                        <FooterSubTitle>Frontend Developer</FooterSubTitle>
                    </div>

                    <FooterList>
                        <li>
                            <FooterLink href="#services">Services</FooterLink>
                        </li>
                        <li>
                            <FooterLink href="#portfolio">Portfolio</FooterLink>
                        </li>
                        <li>
                            <FooterLink href="#contact">Contact</FooterLink>
                        </li>
                    </FooterList>

                    <FooterSocials>
                        <FooterSocial href="#">
                            <UilFacebookF />
                        </FooterSocial>
                        <FooterSocial href="#">
                            <UilInstagram />
                        </FooterSocial>
                        <FooterSocial href="#">
                            <UilTwitterAlt />
                        </FooterSocial>
                    </FooterSocials>
                </FooterSubContainer>
                <FooterCopy>&#169; All rights reserved</FooterCopy>
            </FooterBackground>
        </FooterContainer>
    );
};

export default Footer;
