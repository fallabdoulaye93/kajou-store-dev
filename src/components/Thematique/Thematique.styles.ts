import { BORDER_RADIUS, media } from '@app/styles/themes/constants';
import styled from 'styled-components';

export const ThematiqueWrapper = styled.div`
  // border-top-left-radius: ${BORDER_RADIUS};
  // border-top-right-radius: ${BORDER_RADIUS};
  // & > div {
  //   display: block;
  // }
  overflow-y: hidden!important;
  width:7rem;
    @media only screen and ${media.md} {
      width:15rem;
  }
`;
export const Titre = styled.div`
font-style: normal;
font-weight: 800;
font-size: 8px;
line-height: 14px;
color: #464646;
display: block;
margin-left:0.4rem;

@media only screen and ${media.md} {
font-size: 16px;
line-height: 22px;
margin-left:0.8rem;
}
@media only screen and ${media.sm} {
  font-size: 16px;
  line-height: 22px;
  margin-left:0.8rem;
  }
`;

export const Contenus = styled.div`
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 16px;
color: #4ABC96;
display: block;
margin-left:0.4rem;

@media only screen and ${media.sm} {
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  margin-left:0.8rem;
  }
@media only screen and ${media.md} {
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  margin-left:0.8rem;
  }

`;

export const DetailsWrapper = styled.div`
  width:95%;
  padding-left:3%;
  padding-right:2%;

`;