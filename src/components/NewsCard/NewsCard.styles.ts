import styled, { css } from "styled-components";

export const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  row-gap: 1rem;
  column-gap: 1rem;
  padding-top: 2rem;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div`
width:40%;
display:flex;
justify-content:center;
align-items:center;
`
export const InfoContainer = styled.div`
width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const StyledNewsCardContainer = styled.div`
display:flex;
  width: 20rem;
  height: 8rem;
  overflow: ellipsis;
  border: 2px solid #5741d9;
  padding-top: 0;
  padding-right: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
`;

export const TitleText = styled.h5`
max-height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const NewsButton = styled.a`
  width: 100%;
  min-height: 2rem;
  border-radius:15px;
  background: #5741d9;
  text-decoration: none;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
`;

interface Props{
  imgUrl:string
}
export const NewsImg = styled.img<Props>`
background-image: url(${props => props.imgUrl});
background-repeat: no-repeat;
  background-size: cover;
  width:7rem;
  height:5rem;

`
