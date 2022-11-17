import { media } from '@app/styles/themes/constants';
import styled from 'styled-components';
import {Card} from "@app/components/common/Card/Card";

export const ItemSeedCardWrapper = styled.div`
   margin-inline-end:5%;

  @media only screen and ${media.md} {
   }

`;
export const ImgWrapper = styled.div`
  //overflow: hidden;
`;

export const ImageAbsolute = styled.div`
position: relative;
bottom: 8.2rem;
left:1rem;
width:90%;

   @media only screen and ${media.md} {
    bottom:17rem;
    left:3rem;
   }

   @media only screen and ${media.sm} {
    bottom: 17rem;
    left:3rem;
   }
`;

export const SliderItem = styled.div`
 display: flex;
 overflow: overlay;
`;

export const Seedtitle = styled.div`

  margin-top:35%;

@media only screen and ${media.md} {
  margin-top: 25%;
}

@media only screen and ${media.sm} {
  margin-top: 27%;
}
`;
export const Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 1px;
align-items: center;
color: #FFFFFF;
display:block;
@media only screen and ${media.md} {
  font-size: 28px;
  line-height:20px;
}
@media only screen and ${media.sm} {
  font-size: 32px;
  line-height:30px;
}
`;

export const Line = styled.div`
// background-color:'#FFFFFF'
`;



