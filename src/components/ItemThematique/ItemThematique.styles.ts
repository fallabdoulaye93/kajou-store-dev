import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import styled from 'styled-components';


export const ItemThematiqueWrapper = styled.div`
    background:#0263B5;
    margin-inline-end: 0.4rem;
    border-radius: 0.3rem;

  @media only screen and ${media.sm} {
    margin-inline-end: 1rem;
    border-radius: 0.6rem;
}
  @media only screen and ${media.md} {
    margin-inline-end: 1rem;
    border-radius: 0.6rem;
}
  @media only screen and ${media.lg} {
    m margin-inline-end: 1.2rem;
    border-radius: 0.6rem;
}
`;

export const ItemThematiqueTitle = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 7px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    text-transform: uppercase;
    margin-inline-end: 0.2rem;
    margin-inline-start: 0.2rem;

    @media only screen and ${media.sm} {
      font-size: 8px;
      line-height: 18px;
      margin-inline-end: 0.3rem;
      margin-inline-start: 0.3rem;
}
    @media only screen and ${media.md} {
      font-size: 18px;
      line-height: 28px;
      margin-inline-end: 0.6rem;
      margin-inline-start: 0.6rem;
}
    @media only screen and ${media.lg} {
      font-size: 8px;
      line-height: 18px;
      margin-inline-end: 0.3rem;
      margin-inline-start: 0.3rem;
}
`;


