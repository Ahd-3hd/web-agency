import {
  Wrapper,
  Title,
  Paragraph,
  Form,
  InputGroup,
  InputField,
  InputLabel,
  Button,
  TextField,
  Rights,
} from "./index.style";

const Contact = () => {
  return (
    <Wrapper>
      <Title>
        Contact <span>Web Agency</span>
      </Title>
      <Paragraph>
        Ready to turn your idea into reality? get in touch and we will help you
        with our expertise & knowledge in the cyber world.
      </Paragraph>
      <Form>
        <InputGroup>
          <InputLabel>Name</InputLabel>
          <InputField type="text" />
        </InputGroup>
        <InputGroup>
          <InputLabel>E-Mail</InputLabel>
          <InputField type="email" />
        </InputGroup>
        <InputGroup>
          <InputLabel>Message</InputLabel>
          <TextField />
        </InputGroup>
        <Button>SEND</Button>
      </Form>
      <Rights>All rights reserved - Ahd Hani</Rights>
    </Wrapper>
  );
};

export default Contact;
