import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import UilAlignLeft from "@iconscout/react-unicons/icons/uil-align-left";
import UilMoon from "@iconscout/react-unicons/icons/uil-moon";
import UilSun from "@iconscout/react-unicons/icons/uil-sun";
import { useEffect, useState } from "react";
import {
    HeaderTag,
    Nav,
    Logo,
    NavList,
    ListItem,
    NavLink,
    NavMenu,
    NavBtns,
    NavToggle,
} from "./styledHeader";

const Header = ({ toggleTheme, setToggleTheme, data, mainData }) => {
    const [toggleShow, setToggleShow] = useState(false);
    const [shadow, setShadow] = useState(false);
    // const [active, setActive] = useState("");

    const toggleHeaderOpen = () => setToggleShow(true);
    const toggleHeaderClose = () => setToggleShow(false);
    const showShadow = () => window.scrollY > 100 ? setShadow(true) : setShadow(false);
    const activeLink = name => {
        toggleHeaderClose();
        // setActive(name);
    };

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
        }
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
                    // className={`${active === link.href && 'active-link'}`}
                    href={link.href} onClick={() => activeLink(link.href)}
                    to={link.section}
                    smooth={true}
                    duration={50}
                    spy={true}
                    exact="true"
                    offset={-50}
                    activeClass="active-link"
                >
                    <i className={link.icon}></i>
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
            <Nav className="container">
                <Logo>{mainData.name}</Logo>

                <NavMenu toggleShow={toggleShow}>
                    <NavList className="grid">
                        {navLinks}
                    </NavList>
                    <UilTimes className="nav__close" onClick={toggleHeaderClose} />
                </NavMenu>

                <NavBtns>
                    {toggleTheme === 'light' ? (
                        <UilMoon className="change-theme" onClick={checkTheme} />
                    ) : (
                        <UilSun className="change-theme" onClick={checkTheme} />
                    )}
                    <NavToggle>
                        <UilAlignLeft className="nav__icon" onClick={toggleHeaderOpen} />
                    </NavToggle>
                </NavBtns>
            </Nav>
        </HeaderTag>
    );
};

export default Header;
