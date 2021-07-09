import UilArrowUp from "@iconscout/react-unicons/icons/uil-arrow-up";
import {
    ScrollUpLink,
    ScrollupIcon,
} from "./styledScrollUp";

const ScrollUp = ({ show }) => {
    return (
        <ScrollUpLink href="#" show={show}>
            <ScrollupIcon>
                <UilArrowUp />
            </ScrollupIcon>
        </ScrollUpLink>
    );
};

export default ScrollUp;
