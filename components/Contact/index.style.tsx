import styled from "styled-components";

export const Wrapper = styled.footer`
  margin-top: 10rem;
  background: ${({ theme: { colors } }) => colors.ghost};
  padding-top: 2rem;
`;

export const Title = styled.p`
  text-align: center;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
  > span {
    color: ${({ theme: { colors } }) => colors.secondary};
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  color: ${({ theme: { colors } }) => colors.darkPurple};
  @media (min-width: 768px) {
    max-width: 40ch;
    margin: auto;
  }
`;

export const Form = styled.form`
  padding: ${({ theme: { spaces } }) => spaces.md};
  background: ${({ theme: { colors } }) => colors.white};
  box-shadow: 0px 0px 5px ${({ theme: { colors } }) => colors.ghost};
  display: flex;
  flex-direction: column;
  margin: ${({ theme: { spaces } }) => spaces.sm};
  border-radius: 5px;
  @media (min-width: 768px) {
    max-width: 500px;
    margin: auto;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme: { spaces } }) => spaces.md} 0;
`;
export const InputField = styled.input`
  height: ${({ theme: { spaces } }) => spaces.lg};
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 2px ${({ theme: { colors } }) => colors.darkPurple};
  :focus {
    outline: 1px ${({ theme: { colors } }) => colors.darkPurple};
  }
`;
export const TextField = styled.textarea`
  height: ${({ theme: { spaces } }) => spaces.lg};
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 2px ${({ theme: { colors } }) => colors.darkPurple};
  :focus {
    outline: 1px ${({ theme: { colors } }) => colors.darkPurple};
  }
  resize: none;
  height: 5em;
`;
export const InputLabel = styled.label`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.pr};
  color: ${({ theme: { colors } }) => colors.primary};
`;
export const Button = styled.button`
  height: ${({ theme: { spaces } }) => spaces.lg};
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  letter-spacing: 1px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 15px rgba(157, 152, 236, 0.21);
  cursor: pointer;
`;

export const Rights = styled.p`
  text-align: center;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.pr};
`;
