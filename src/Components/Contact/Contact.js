import { Button, Section } from "../../GlobalStyle";
import UilPhone from "@iconscout/react-unicons/icons/uil-phone";
import UilEnvelope from "@iconscout/react-unicons/icons/uil-envelope";
import UilMapMarker from "@iconscout/react-unicons/icons/uil-map-marker";
import UilMessage from "@iconscout/react-unicons/icons/uil-message";
import {
    ContactContainer,
    ContactInformarion,
    ContactTitle,
    ContactSubtitle,
    ContactForm,
    ContactInputs,
    ContactInputBox,
    ContactLabel,
    ContactInput,
    ContactTextArea,
    SubmitForm,
} from "./styledContact";

const Contact = () => {

    const sendMessage = e => {
        e.preventDefault();
    };

    return (
        <Section>
            <ContactContainer className="container grid">
                <div>
                    <ContactInformarion>
                        <UilPhone className="contact__icon" />
                        <div>
                            <ContactTitle>Call ME</ContactTitle>
                            <ContactSubtitle>002-0111-777-2222</ContactSubtitle>
                        </div>
                    </ContactInformarion>
                    <ContactInformarion>
                        <UilEnvelope className="contact__icon" />

                        <div>
                            <ContactTitle>Email</ContactTitle>
                            <ContactSubtitle>email@email.com</ContactSubtitle>
                        </div>
                    </ContactInformarion>
                    <ContactInformarion>
                        <UilMapMarker className="contact__icon" />

                        <div>
                            <ContactTitle>Location</ContactTitle>
                            <ContactSubtitle>
                                Egypt - Cairo, Helipolis Ram #166
                            </ContactSubtitle>
                        </div>
                    </ContactInformarion>
                </div>

                <ContactForm action="" onSubmit={sendMessage}>
                    <ContactInputs className="grid">
                        <ContactInputBox>
                            <ContactLabel for="">Name</ContactLabel>
                            <ContactInput type="text" />
                        </ContactInputBox>
                        <ContactInputBox>
                            <ContactLabel for="">Email</ContactLabel>
                            <ContactInput type="email" />
                        </ContactInputBox>
                        <ContactInputBox>
                            <ContactLabel for="">Project</ContactLabel>
                            <ContactInput type="text" />
                        </ContactInputBox>
                        <ContactInputBox>
                            <ContactLabel for="">Message</ContactLabel>
                            <ContactTextArea
                                cols="0"
                                rows="7"
                            ></ContactTextArea>
                        </ContactInputBox>
                    </ContactInputs>
                    <div>
                        <SubmitForm type="submit" className="button--flex">
                            Send Message
                            <UilMessage className="button__icon" />
                        </SubmitForm>
                    </div>
                </ContactForm>
            </ContactContainer>
        </Section >
    );
};

export default Contact;
