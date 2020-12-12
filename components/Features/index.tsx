import { useState, useEffect, useRef } from "react";

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
  const wrapperRef = useRef<HTMLDivElement>();
  const [isVisible, setIsVisible] = useState(false);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => setIsVisible(entry.isIntersecting));
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.4,
    });
    if (wrapperRef && wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }
  }, []);
  return (
    <Wrapper ref={wrapperRef} isVisible={isVisible}>
      <Title>
        Included in all of our <span>plans</span>
      </Title>
      <FeaturesContainer>
        <Feature fill="darkPurple" className="feature">
          <PieChart />
          <FeatureTitle>Analytics & Monitoring</FeatureTitle>
          <FeatureParagraph>
            Access to a wide range of data about your software to help you in
            your decisions and monitor usage
          </FeatureParagraph>
        </Feature>
        <Feature fill="secondary" className="feature">
          <ControlPanel />
          <FeatureTitle>Control Panel</FeatureTitle>
          <FeatureParagraph>
            Take control of your software and tweak it to suit your needs with
            solid attention to details
          </FeatureParagraph>
        </Feature>
        <Feature fill="primary" className="feature">
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
