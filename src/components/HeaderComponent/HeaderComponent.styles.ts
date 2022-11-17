import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import styled from 'styled-components';


export const HeaderComponent = styled.div`
  display: flex;
  padding:3%;

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
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  color: #000000;

  @media only screen and ${media.md} {
    font-size: 38px;
    line-height: 60px;
  }
`;

export const TitleCategorie = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  text-transform: uppercase;
  color: #000000;
  display:block;

  @media only screen and ${media.md} {
    font-size: 28px;
    line-height: 50px;
  }
`;

export const TitleSelection = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 35px;
  text-transform: uppercase;
  color: #000000;

  @media only screen and ${media.md} {
    font-size: 28px;
    line-height: 50px;
  }
`;



export const Separator = styled.div`
  display: block;
  margin-bottom: 1rem;

  @media only screen and ${media.md} {
    margin-bottom: 3rem;
  }
`;

export const SliderItem = styled.div`
 display: flex;
 overflow: overlay;
 margin-top:1rem;
 margin-bottom:3rem;

 @media only screen and ${media.md} {
  margin-top:2.5rem;
  margin-bottom: 6rem;
}
`;
export const NotreSelection = styled.div`
 display:block;
 background:#E8F2F3;
 overflow: overlay;
 height:10rem;

 @media only screen and ${media.md} {
  margin-top:2.5rem;
  margin-bottom: 6rem;
}
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
margin-block-end:2rem;
`;