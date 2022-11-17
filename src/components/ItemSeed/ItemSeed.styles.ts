import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import { Rate, Typography } from 'antd';
import styled from 'styled-components';
import {Card} from "@app/components/common/Card/Card";
import image from '@app/assets/images/image.png'

export const ItemSeedWrapper = styled.div`
    overflow-y: hidden!important;
    overflow-x: hidden!important;
    //background:#F3F3F3;
    margin-inline-end:1rem;
    width:9rem;

    @media only screen and ${media.md} {
      width:18rem;
      margin-inline-end:2rem;
  }
`;
export const Image = styled.div`
height:7rem;

@media only screen and ${media.md} {
 height:14rem;
}
`;

export const DetailsWrapper = styled.div`
  padding-bottom:10%;
  width:95%;
`;


export const Title = styled.div`
font-style: normal;
font-size: 10px;
line-height: 16px;
color: #464646;
display: block;
margin-left:0.3rem;

@media only screen and ${media.md} {
font-size: 16px;
line-height: 32px;
margin-left:0.6rem;
}
@media only screen and ${media.sm} {
  font-size: 16px;
  line-height: 32px;
  margin-left:0.6rem;
  }
`;
export const Description = styled.div`
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 17px;
display:block;
color: #000000;
display: block;
margin-left:0.3rem;

@media only screen and ${media.md} {
  font-size: 16px;
  line-height: 20px;
  margin-left:0.6rem;
  }
  @media only screen and ${media.sm} {
    font-size: 16px;
    line-height: 20px;
    margin-left:0.6rem;
    }
`;
export const Contenus = styled.div`
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 20px;
color: #4ABC96;
display: block;
margin-left:0.3rem;

@media only screen and ${media.md} {
  font-size: 16px;
  line-height: 25px;
  margin-left:0.6rem;
  }
  @media only screen and ${media.sm} {
    font-size: 16px;
    line-height: 25px;
    margin-left:0.6rem;
    }
`;
// export const Like = styled.div`
// font-style: normal;
// font-weight: 400;
// font-size: 10px;
// line-height: 14px;
// color: #464646;
// display: block;
// margin-left:0.3rem;

// @media only screen and ${media.md} {
//   font-size: 14px;
//   line-height: 25px;
//   margin-left:0.6rem;
//   }
//   @media only screen and ${media.sm} {
//     font-size: 14px;
//     line-height: 25px;
//     margin-left:0.6rem;
//     }
// `;

