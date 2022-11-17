import styled from 'styled-components';
import {media} from '@app/styles/themes/constants';

export const MostViewItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom:12%;
  padding-right:3%;

  @media only screen and ${media.md} {
   
  }
`;

export const RankItem = styled.div`
  display: block;
  width:10%;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 25px;
  color: #464646;
  padding-left:3%;
    
  @media only screen and ${media.md} {
    font-size: 24px;
    line-height: 35px;
  }
`;
export const Image = styled.div`
   width:40%;
   height:7rem;
   
  @media only screen and ${media.md} {
    height:14rem;
  }
`;

export const MostItemView = styled.div`
  display: block;
  align-items: center;
  padding-left:2%;
  width:50%;

  @media only screen and ${media.md} {
  
  }
`;
export const Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #464646;

  @media only screen and ${media.md} {
    font-size: 28px;
    line-height: 35px;
  }
`;
export const Subtitle = styled.div`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 20px;
color: #4ABC96;

  @media only screen and ${media.md} {
    font-size: 20px;
    line-height: 35px;
  }
`;
export const Like = styled.div`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 20px;
display: flex;

  @media only screen and ${media.md} {
    font-size: 12px;
line-height: 25px;
  }
`;