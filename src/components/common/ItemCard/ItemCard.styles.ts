import { media } from '@app/styles/themes/constants';
import styled from 'styled-components';
import {Card} from "@app/components/common/Card/Card";

export const ImgWrapper = styled.div`
display:flex;
width:20rem;
overflow: hidden;

@media only screen and ${media.md} {
  width:45rem;
}
`;

export const ImageAbsolute = styled.div`
position: relative;
bottom: 7.8rem;
left:1rem;
width:90%;

   @media only screen and ${media.md} {
    bottom: 18rem;
    left:3rem;
   }
   @media only screen and ${media.sm} {
     bottom: 19rem;
    left:3rem;
   }
`;
export const Titre = styled.div`
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 12px;
color: #FFFFFF;
align-text:center;
`;
export const Seedtitle = styled.div`
position:relative;
top: 3.2rem;
@media only screen and ${media.md} {
  top: 6rem;
}
@media only screen and ${media.sm} {
  top: 8rem;
}
`;
export const SeedTitleText = styled.div`
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 5px;
display: flex;
align-items: center;
color: #FFFFFF;
@media only screen and ${media.md} {
  font-size: 20px;
  line-height:17px;
}
@media only screen and ${media.sm} {
  font-size: 40px;
  line-height: 55px;
}
`;
export const SeedTitleLine = styled.div`
// background-color:'#FFFFFF'
`;
export const SeedCardTitle = styled.div`
  //margin-bottom:4rem
  @media only screen and ${media.md} {
    //margin-bottom:6rem
  }
  @media only screen and ${media.sm} {
    //margin-bottom:6rem
  }
`;

export const SliderItem = styled.div`
 display: flex;
 overflow: overlay;
`;
