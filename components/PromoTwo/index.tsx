import { useState, useEffect, useRef } from "react";
import {
  Wrapper,
  Details,
  Title,
  List,
  ListItem,
  GraphContainer,
  GraphImg,
} from "./index.style";
const data = [
  "Fluid and smooth user experience",
  "Intuitive layouts & navigation",
  "Pleasing visuals & enjoyable to look at",
];
const PromoTwo = () => {
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
      <Details>
        <Title className="title">
          Every <span>Design</span> Begins
          <br />
          with an even <span>better</span> story
        </Title>
        <List>
          {data.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </Details>
      <GraphContainer>
        <GraphImg src="/img/promo_two_mobile.png" alt="graph" />
      </GraphContainer>
    </Wrapper>
  );
};

export default PromoTwo;
