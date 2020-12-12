import { useState, useEffect, useRef } from "react";

import {
  Wrapper,
  Details,
  Title,
  List,
  ListItem,
  GraphContainer,
  GraphImg,
  GraphCardsImg,
  RandomQuote,
} from "./index.style";

const data = [
  "Employ The latest technologies",
  "Be Up to date on each process",
  "Make use of years of Hands-On experience",
];
const PromoOne = () => {
  return (
    <Wrapper>
      <Details>
        <Title className="title">
          Shifting from <span>Chaotic</span>
          <br />
          Complexity to Elegant <span>Simplicity</span>
        </Title>
        <List>
          {data.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </List>
        <RandomQuote>
          With BruhWTF we humanize technology and make it like a likable person
          who you would enjoy spending time with.
        </RandomQuote>
      </Details>
      <GraphContainer>
        <GraphImg src="/img/graph.png" alt="graph" />
        <GraphCardsImg src="img/graph_cards.png" alt="cards" />
      </GraphContainer>
    </Wrapper>
  );
};

export default PromoOne;
