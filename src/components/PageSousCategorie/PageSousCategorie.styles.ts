import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import { Rate, Typography } from 'antd';
import styled from 'styled-components';
import {Card} from "@app/components/common/Card/Card";
import image from '@app/assets/images/image.png'

export const PageSousCategorieWrapper = styled.div`
    overflow-y: hidden!important;
    overflow-x: hidden!important;
    width:100%;
    padding-left:3%;
    padding-bottom:20%;
`;
export const ButtonSeeMore = styled.div`
padding-left:3%;
padding-top:3%;
text-decoration: underline;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 22px;

@media only screen and ${media.sm} {
  font-size: 28px;
  line-height: 40px;
}
`;

export const TitleDossier = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 40px;
    color: #4ABC96;
    padding-left:3%;

    @media only screen and ${media.sm} {
      font-size: 23px;
      line-height: 60px;
    }
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #000000;
  padding-left:2%;

  @media only screen and ${media.sm} {
    font-size: 60px;
  line-height: 60px;
  }
`;
export const Separator = styled.div`
  display: block;
  padding-left:3%;
  padding-top:1%;
  padding-bottom:3%;
`;

export const TitleCategorie = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  text-transform: uppercase;
  color: #000000;
  padding-left:2%;
  padding-right:3%;

  @media only screen and ${media.sm} {
    font-size: 26px;
    line-height: 40px;
  }
`;
export const SeedHeader = styled.div`
  display: flex;
  padding-left:3%;
  padding-top:10%;
  @media only screen and ${media.md} {
   
  }
`;

export const SeedTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  line-height: 36px;
  color: #000000;
  width: 100%;

  @media only screen and ${media.md} {
    font-size: 32px;
    font-weight: 700;
    width: 90%;
    line-height: 36px;
  }
`;

export const SeedIcon = styled.div`
  width: 10%;
  align-self: center;

  @media only screen and ${media.md} {
    line-height: 36px;
  }
`;

export const PageategorieHeader = styled.div`
  display: flex;
  //align-items: center;
`;
export const SliderItem = styled.div`
 display: flex;
 overflow: overlay;
 padding-left:3%;
 padding-top:3%;
 padding-bottom:10%;
`;
export const NotreSelection = styled.div`
 background:#E8F2F3;
 overflow: overlay;
 margin-block-end:2rem;
 margin-bottom:2rem;
`;

export const CarouselWrapper = styled.div`
  margin-left: -4.5rem;
  margin-right: -1.25rem;
  overflow-y: hidden!important;
  overflow-x: hidden!important;
`;
export const Slider = styled.div`
  display: flex;
  overflow: overlay;
  margin-bottom:3rem
`;

export const SliderWrapper = styled.div`
width:100%;
display: flex;
overflow: overlay;
`;