import {
  Wrapper,
  Title,
  FeaturesContainer,
  Feature,
  FeatureParagraph,
  FeatureTitle,
} from "./index.style";
import PieChart from "../../svg/Piechart.svg";
import ControlPanel from "../../svg/ControlPanel.svg";
import LockIcon from "../../svg/Lock.svg";

const Features = () => {
  return (
    <Wrapper>
      <Title>
        Included in all of our <span>plans</span>
      </Title>
      <FeaturesContainer>
        <Feature fill="darkPurple">
          <PieChart />
          <FeatureTitle>Analytics & Monitoring</FeatureTitle>
          <FeatureParagraph>
            Access to a wide range of data about your software to help you in
            your decisions and monitor usage
          </FeatureParagraph>
        </Feature>
        <Feature fill="secondary">
          <ControlPanel />
          <FeatureTitle>Control Panel</FeatureTitle>
          <FeatureParagraph>
            Take control of your software and tweak it to suit your needs with
            solid attention to details
          </FeatureParagraph>
        </Feature>
        <Feature fill="primary">
          <LockIcon />
          <FeatureTitle>Securtiy & Authentication</FeatureTitle>
          <FeatureParagraph>
            Secure your software with the strongest authentication technologies
            and top grade encryption algorithms
          </FeatureParagraph>
        </Feature>
      </FeaturesContainer>
    </Wrapper>
  );
};

export default Features;
