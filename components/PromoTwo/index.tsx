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
  return (
    <Wrapper>
      <Details>
        <Title>
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
