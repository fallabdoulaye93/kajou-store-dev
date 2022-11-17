import { media } from '@app/styles/themes/constants';
import styled from 'styled-components';

export const PageCategorieWrapper = styled.div`
    overflow-y: hidden!important;
    overflow-x: hidden!important;
    width:100%;
    padding-bottom:15%;
`;
export const PageCategorieHeader = styled.div`
  display: flex;
  margin-bottom:1rem;

  @media only screen and ${media.md} {
    margin-bottom:3rem;
  }

`;
export const PageCategorieContent = styled.div`
  display: block;

  @media only screen and ${media.md} {
  
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  color: #000000;
  padding-left:3%;
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
  padding:3%;

  @media only screen and ${media.md} {
    font-size: 28px;
    line-height: 50px;
  }
`;

export const TitleSelection = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  text-transform: uppercase;
  color: #000000; 
  padding-left:0.5rem;
  // padding-top:1rem;

  @media only screen and ${media.md} {
    font-size: 28px;
    line-height: 50px;
    padding-left:1rem;
    // padding-top:2rem;
  }
`;



export const Separator = styled.div`
  display: block;
  padding-bottom:2%;
  padding-left:3%;
  @media only screen and ${media.md} {
   
  }
`;

export const SliderItem = styled.div`
 display: flex;
 overflow: overlay;
 padding-top:1%;
 padding-bottom:3%;
 padding-left:3%;   
 @media only screen and ${media.md} {
  
}
`;
export const Selection = styled.div`
 display:block;
 background:#E8F2F3;
 height:15rem; 
 margin-top:8%;
 margin-bottom:6%;

 @media only screen and ${media.md} {
  height:32rem; 
}
`;
export const SelectionContent = styled.div`
  padding-left:1rem;
  padding-top:1rem;
 
 @media only screen and ${media.md} {
  padding-left:2rem;
  padding-top:2rem;
}
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
  padding:3%;
  width:100%
`;

export const SliderWrapper = styled.div`
width:100%;
display: flex;
overflow: overlay;
//margin-block-end:2rem;
`;