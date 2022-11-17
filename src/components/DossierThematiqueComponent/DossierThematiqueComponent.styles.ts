import styled from 'styled-components';
import { media } from '@app/styles/themes/constants';

export const ScrollWrapper = styled.div`
  // overflow-y: auto;
  // overflow-x: hidden;
  //min-height: 250px;
  //margin-bottom: 10rem;

  // .ant-card-body {
  //   overflow-y: auto;
  //   overflow-x: hidden;
  //   height: 100%;
  // }
`;

export const DossierThematiqueContent = styled.div`
padding-left:3%;
  // overflow-y: auto;
  // overflow-x: hidden;
  //min-height: 250px;
  //margin-bottom: 10rem;

  // .ant-card-body {
  //   overflow-y: auto;
  //   overflow-x: hidden;
  //   height: 100%;
  // }
`;
export const DossierThematiqueHeader = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderLeft = styled.div`
  width: 50%;
  text-align: left;

`;

export const HeaderRight = styled.div`
  width: 50%;
  text-align: right;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
`;
export const Description = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  color: #000000;
`;
export const DescriptionSeed = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;
export const Separator = styled.div`
  display: block;
  margin-bottom: 1rem;
`;
export const DossierThematiqueImage = styled.div`
  margin-top: 1rem;
`;

export const SeedHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;
  margin-top: -1rem;
  @media only screen and ${media.md} {
    margin-top: -3rem;
    margin-bottom: 2rem;
  }
  @media only screen and ${media.sm} {
    margin-top: -3rem;
    margin-bottom: 2rem;
  }
`;
export const SeedTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  line-height: 36px;
  color: #000000;
  width: 90%;

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

export const SliderItem = styled.div`
  display: flex;
  overflow: overlay;
`;
export const Slider = styled.div`
  display: flex;
  overflow: overlay;
  margin-bottom:3rem
`;

export const ImageHeader = styled.div`
  text-align: center;
`;
export const TitleThematique = styled.div`
  text-align: center;
`;
