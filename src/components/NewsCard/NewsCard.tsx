import React from "react";
import {
  ImgContainer,
  InfoContainer,
  NewsButton,
  NewsContainer,
  NewsImg,
  StyledNewsCardContainer,
  TitleText,
} from "./NewsCard.styles";
interface NewsProps {
  title: string;
  thumnail: string;
  url: string;
}
export default function NewsCard({ title, thumnail, url }: NewsProps) {
  return (
    <StyledNewsCardContainer>
      <ImgContainer>
        <NewsImg imgUrl={thumnail}></NewsImg>
      </ImgContainer>
      <InfoContainer>
        <TitleText>{title}</TitleText>
        <NewsButton href={url}>SEE MORE</NewsButton>
      </InfoContainer>
    </StyledNewsCardContainer>
  );
}
