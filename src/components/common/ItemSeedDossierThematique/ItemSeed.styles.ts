import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import { Rate, Typography } from 'antd';
import styled from 'styled-components';
import {Card} from "@app/components/common/Card/Card";
import image from '@app/assets/images/image.png'

export const ItemSeedWrapper = styled.div`
   margin-inline-end: 1rem;
   overflow-y: hidden!important;
   width:9rem;
   height:14rem;
   display: block;
   background:#F3F3F3;

//     @media only screen and ${media.md} {
//       width:15rem;
//   }
`;

export const DetailsWrapper = styled.div`

width:100%;
`;

export const DetailsContent = styled.div`
margin-left:1rem;
margin-right:0.1rem
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
`;

export const DescriptionContent = styled.div`
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 18px;
display:block;
color: #000000;
display: block;

@media only screen and ${media.md} {
  font-size: 16px;
  line-height: 20px;
  
  }
`;

export const Duree = styled.div`
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 25px;
color:#FC6854;
display: block;
// margin-left:0.3rem;

@media only screen and ${media.md} {
  font-size: 16px;
  line-height: 25px;
  // margin-left:0.6rem;
  }
`;


