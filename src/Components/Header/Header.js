import UilEstate from "@iconscout/react-unicons/icons/uil-estate";
import UilUser from "@iconscout/react-unicons/icons/uil-user";
import UilFileAlt from "@iconscout/react-unicons/icons/uil-file-alt";
import UilBriefcaseAlt from "@iconscout/react-unicons/icons/uil-briefcase-alt";
import UilScenery from "@iconscout/react-unicons/icons/uil-scenery";
import UilMessage from "@iconscout/react-unicons/icons/uil-message";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import UilApps from "@iconscout/react-unicons/icons/uil-apps";
import UilMoon from "@iconscout/react-unicons/icons/uil-moon";
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

const Header = () => {
    const [toggleShow, setToggleShow] = useState(false);
    const [shadow, setShadow] = useState(false);

    const toggleHeaderOpen = () => setToggleShow(true);

    const toggleHeaderClose = () => setToggleShow(false);

    const showShadow = () => window.scrollY > 100 ? setShadow(true) : setShadow(false);

    useEffect(() => {
        window.addEventListener("scroll", showShadow);
    }, []);

    return (
        <HeaderTag
            className={`${shadow && 'scroll-header'}`}
            id="header"
        >
            <Nav className="container">
                <Logo href="#">Omar</Logo>

                <NavMenu toggleShow={toggleShow}>
                    <NavList className="grid">
                        <ListItem>
                            <NavLink href="#home" className="active-link" onClick={toggleHeaderClose}>
                                <UilEstate className="nav__icon" />
                                Home
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink href="#about" onClick={toggleHeaderClose}>
                                <UilUser className="nav__icon" />
                                About
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink href="#skills" onClick={toggleHeaderClose}>
                                <UilFileAlt className="nav__icon" />
                                Skills
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink href="#services" onClick={toggleHeaderClose}>
                                <UilBriefcaseAlt className="nav__icon" />
                                Services
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink href="#portfolio" onClick={toggleHeaderClose}>
                                <UilScenery className="nav__icon" />
                                Portfolio
                            </NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink href="#contact" onClick={toggleHeaderClose}>
                                <UilMessage className="nav__icon" />
                                Contact ME
                            </NavLink>
                        </ListItem>
                    </NavList>
                    <UilTimes className="nav__close" onClick={toggleHeaderClose} />
                </NavMenu>

                <NavBtns>
                    <UilMoon className="change-theme" />
                    <NavToggle id="nav-toggle">
                        <UilApps className="nav__icon" onClick={toggleHeaderOpen} />
                    </NavToggle>
                </NavBtns>
            </Nav>
        </HeaderTag>
    );
};

export default Header;
