import { ButtonIcon, Container, Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import UilPhone from "@iconscout/react-unicons/icons/uil-phone";
import UilEnvelope from "@iconscout/react-unicons/icons/uil-envelope";
import UilMapMarker from "@iconscout/react-unicons/icons/uil-map-marker";
import UilMessage from "@iconscout/react-unicons/icons/uil-message";
import { setHeight } from "../../utils/setTextareaHeight";
import {
    ContactContainer,
    ContactInformarion,
    ContactIcon,
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
        // Firebase code goes here
    };

    return (
        <Section id="contact">
            <SectionTitle>Contact Me</SectionTitle>
            <SectionSubtitle>Get in touch</SectionSubtitle>
            <Container>
                <ContactContainer>
                    <div>
                        <ContactInformarion>
                            <ContactIcon>
                                <UilPhone />
                            </ContactIcon>
                            <div>
                                <ContactTitle>Call ME</ContactTitle>
                                <ContactSubtitle>002-0111-777-2222</ContactSubtitle>
                            </div>
                        </ContactInformarion>
                        <ContactInformarion>
                            <ContactIcon>
                                <UilEnvelope />
                            </ContactIcon>

                            <div>
                                <ContactTitle>Email</ContactTitle>
                                <ContactSubtitle>email@email.com</ContactSubtitle>
                            </div>
                        </ContactInformarion>
                        <ContactInformarion>
                            <ContactIcon>
                                <UilMapMarker />
                            </ContactIcon>

                            <div>
                                <ContactTitle>Location</ContactTitle>
                                <ContactSubtitle>
                                    Egypt - Cairo, Helipolis Ram #166
                                </ContactSubtitle>
                            </div>
                        </ContactInformarion>
                    </div>
                    <ContactForm action="" onSubmit={sendMessage}>
                        <ContactInputs>
                            <ContactInputBox>
                                <ContactLabel>Name</ContactLabel>
                                <ContactInput type="text" />
                            </ContactInputBox>
                            <ContactInputBox>
                                <ContactLabel>Email</ContactLabel>
                                <ContactInput type="email" />
                            </ContactInputBox>
                        </ContactInputs>
                        <ContactInputBox>
                            <ContactLabel>Project</ContactLabel>
                            <ContactInput type="text" />
                        </ContactInputBox>
                        <ContactInputBox>
                            <ContactLabel>Message</ContactLabel>
                            <ContactTextArea
                                cols="0"
                                rows="7"
                                onChange={e => setHeight(e, '100px')}
                            ></ContactTextArea>
                        </ContactInputBox>
                        <div>
                            <SubmitForm type="submit" flex>
                                Send Message
                                <ButtonIcon>
                                    <UilMessage />
                                </ButtonIcon>
                            </SubmitForm>
                        </div>
                    </ContactForm>
                </ContactContainer>
            </Container>
        </Section>
    );
};

export default Contact;
