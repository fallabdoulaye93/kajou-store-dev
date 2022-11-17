import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import { Rate, Typography } from 'antd';
import styled from 'styled-components';

export const ItemPlayslistWrapper = styled.div`
    margin-inline-end: 1rem;
    border: 1px solid #DADADA;
    border-radius: 5px;
   overflow-y: hidden!important;
   display:block;
   width:19rem;
   margin-bottom:2rem;

   @media only screen and ${media.md} {
      width:42rem;
    }
`;

export const DetailsWrapper = styled.div`
height:6rem;
width:100%;
  
`;

export const Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 17px;
display:block;
color: #FC6854;
display: block;
margin-left:0.3rem;

@media only screen and ${media.md} {
  font-size: 16px;
  line-height: 20px;
  margin-left:0.6rem;
  }
`;
export const Description = styled.div`
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 20px;
color: #000000;
display: block;
margin-left:0.3rem;

@media only screen and ${media.md} {
  font-size: 16px;
  line-height: 25px;
  margin-left:0.6rem;
  }
`;


