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

const Footer = ({ data, mainData }) => {
    const network = data.social.map((network) => {
        return (
            <FooterSocial key={network.name} href={network.url} target="_blank">
                <i className={network.class}></i>
            </FooterSocial>
        )
    });

    return (
        <FooterContainer>
            <FooterBackground>
                <FooterSubContainer className="container grid">
                    <div>
                        <FooterTitle>{mainData.name}</FooterTitle>
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
                        {network}
                    </FooterSocials>
                </FooterSubContainer>
                <FooterCopy>&#169; All rights reserved</FooterCopy>
            </FooterBackground>
        </FooterContainer>
    );
};

export default Footer;
