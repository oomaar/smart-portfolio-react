import { useEffect, useState } from "react";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import UilAlignLeft from "@iconscout/react-unicons/icons/uil-align-left";
import UilMoon from "@iconscout/react-unicons/icons/uil-moon";
import UilSun from "@iconscout/react-unicons/icons/uil-sun";
import { Container } from "../../GlobalStyle";
import {
    HeaderTag,
    Nav,
    Logo,
    NavList,
    NavClose,
    ListItem,
    NavLink,
    NavIcon,
    NavMenu,
    NavBtns,
    ChangeTheme,
    NavToggle,
} from "./styledHeader";

const Header = ({ toggleTheme, setToggleTheme, data, mainData }) => {
    const [toggleShow, setToggleShow] = useState(false);
    const [shadow, setShadow] = useState(false);

    const toggleHeaderOpen = () => setToggleShow(true);
    const toggleHeaderClose = () => setToggleShow(false);
    const showShadow = () => window.scrollY > 100 ? setShadow(true) : setShadow(false);
    const activeLink = () => toggleHeaderClose();

    const checkTheme = () => {
        switch (toggleTheme) {
            case "light":
                setToggleTheme("dark");
                localStorage.setItem("toggleTheme", "dark")
                return document.documentElement.setAttribute("data-theme", "dark");

            case "dark":
                setToggleTheme("light");
                localStorage.setItem("toggleTheme", "light")
                return document.documentElement.setAttribute("data-theme", "light");

            default:
                setToggleTheme("light");
                localStorage.setItem("toggleTheme", "light")
                return document.documentElement.setAttribute("data-theme", "light");
        };
    };

    useEffect(() => {
        if (localStorage.getItem("toggleTheme")) {
            setToggleTheme(localStorage.getItem("toggleTheme"));
            document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
        } else {
            checkTheme(null);
        };
    });


    useEffect(() => {
        window.addEventListener("scroll", showShadow);
    }, []);

    const navLinks = data.map(link => {
        return (
            <ListItem key={link.id}>
                <NavLink
                    href={link.href} onClick={() => activeLink(link.href)}
                    to={link.section}
                    smooth={true}
                    duration={50}
                    spy={true}
                    exact="true"
                    offset={-50}
                    activeClass="active-link"
                >
                    <NavIcon>
                        <i className={link.icon}></i>
                    </NavIcon>
                    {link.name}
                </NavLink>
            </ListItem>
        );
    });

    return (
        <HeaderTag
            shadow={shadow}
            id="header"
        >
            <Container>
                <Nav>
                    <Logo>{mainData.name}</Logo>

                    <NavMenu toggleShow={toggleShow}>
                        <NavList>
                            {navLinks}
                        </NavList>
                        <NavClose>
                            <UilTimes onClick={toggleHeaderClose} />
                        </NavClose>
                    </NavMenu>

                    <NavBtns>
                        <ChangeTheme>
                            {toggleTheme === 'light' ? (
                                <UilMoon onClick={checkTheme} />
                            ) : (
                                <UilSun onClick={checkTheme} />
                            )}
                        </ChangeTheme>
                        <NavToggle>
                            <UilAlignLeft onClick={toggleHeaderOpen} />
                        </NavToggle>
                    </NavBtns>
                </Nav>
            </Container>
        </HeaderTag>
    );
};

export default Header;
