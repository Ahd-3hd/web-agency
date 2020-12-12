import { Wrapper, Details, Title, List, ListItem } from "./index.style";

const data = [
  "Employ The latest technologies",
  "Be Up to date on each process",
  "Make use of years of Hands-On experience",
];
const PromoOne = () => {
  return (
    <Wrapper>
      <Details>
        <Title>
          Shifting from <span>Chaotic</span>
          <br />
          Complexity to Elegant <span>Simplicity</span>
        </Title>
        <List>
          {data.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
      </Details>
    </Wrapper>
  );
};

export default PromoOne;
