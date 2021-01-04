import {
  Wrapper,
  HeaderImg,
  IntroContainer,
  Title,
  TitleParagraph,
  IntroParagraph,
  AnchorButton,
} from "./index.style";
import ArrowRight from "../../svg/ArrowRight.svg";
const Header = () => {
  return (
    <Wrapper>
      <HeaderImg src="/img/headerimg.png" alt="mobile" />
      <IntroContainer>
        <Title>
          <TitleParagraph>At</TitleParagraph>
          <TitleParagraph>Web Agency</TitleParagraph>
          <TitleParagraph>We Engineer Smart</TitleParagraph>
          <TitleParagraph>Solutions</TitleParagraph>
        </Title>
        <IntroParagraph>
          Overly enthustiastic, technical & corporate jargon here. with a subtle
          touch of interpersonality to make customers feel like at home.
        </IntroParagraph>
        <AnchorButton>
          CONTACT
          <ArrowRight />
        </AnchorButton>
      </IntroContainer>
    </Wrapper>
  );
};

export default Header;
