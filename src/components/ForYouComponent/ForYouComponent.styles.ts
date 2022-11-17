import styled from 'styled-components';
import { Typography, Image as AntImage } from 'antd';
import {BORDER_RADIUS, BREAKPOINTS, media} from '@app/styles/themes/constants';

export const ForYouWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding-left:3%;

  @media only screen and ${media.md} {
    padding-left:3%;
  }

  @media only screen and ${media.sm} {
    padding-left:5%;
  }
`;

export const CarouselWrapper = styled.div`
    padding-top:3%;
    margin-left:-13%;

   @media only screen and ${media.md} {
    padding-top:1%;
    margin-left:-6%;
  }
`;
export const SeedContainer = styled.div`
    padding-top:6%;
    padding-left:3%;

  @media only screen and ${media.md} {
    margin-top:-18%;
  }
  @media only screen and ${media.sm} {
    margin-top:-24%;
  }
`;
export const CarouselEcardWrapper = styled.div`
    padding-top:3%;
    margin-left:-14%;

   @media only screen and ${media.md} {
    padding-top:6%;
    margin-left:-6%;
  }
`;



export const EcardContainer = styled.div`

`;

export const SeedHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;
  margin-top: -7rem;

  @media only screen and ${media.md} {
    margin-bottom: 2rem;
    margin-top: -2rem;
  }
`;


export const SliderItem = styled.div`
 display: flex;
 overflow: overlay;
`;

export const Titre = styled.div`
  font-size: 18px;
  font-weight: 600;
  width: 90%;
  line-height: 36px;
  
  @media only screen and ${media.md} {
    font-size: 30px;
    font-weight: 600;
    width: 90%;
    line-height: 36px;
  }
`;

export const Icon = styled.div`
  width: 10%;
  align-self: center;

  @media only screen and ${media.md} {
    width: 10%;
    line-height: 36px;
  }
`;


export const ThematiqueHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;
  margin-top: 1.5rem;

  @media only screen and ${media.md} {
    margin-top: 4.5rem;
    margin-bottom: 2rem;
  }
  @media only screen and ${media.sm} {
    margin-top: 4.5rem;
    margin-bottom: 2rem;
  }
`;

export const EventHeader = styled.div`
display: flex;
margin-bottom: 1rem;
margin-top: 1.5rem;

@media only screen and ${media.md} {
  margin-top: 4.5rem;
  margin-bottom: 2rem;
}
@media only screen and ${media.sm} {
  margin-top: 4.5rem;
  margin-bottom: 2rem;
}
`;
export const SdCardHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;
  margin-top: 1.5rem;

  @media only screen and ${media.md} {
    margin-top: 4.5rem;
    margin-bottom: 2rem;
  }
  // @media only screen and ${media.sm} {
  //   margin-top: 4.5rem;
  //   margin-bottom: 2rem;
  // }
`;

// export const InfoHeader = styled.div`
//   display: flex;
//   margin-bottom: 1rem;
//   margin-top: -1rem;
//   @media only screen and ${media.md} {
//     margin-top: -3rem;
//     margin-bottom: 2rem;
//   }
//   @media only screen and ${media.sm} {
//     margin-top: -3rem;
//     margin-bottom: 2rem;
//   }

// `;

export const InfoHeader = styled.div`
display: flex;
margin-bottom: 0rem;
margin-top: 1.5rem;
@media only screen and ${media.md} {
  margin-top: 4.5rem;
  margin-bottom: 2rem;
}
@media only screen and ${media.sm} {
  margin-top: 4.5rem;
  margin-bottom: 2rem;
}
`;



export const Line = styled.div`
    width: 5.5rem;

  @media only screen and ${media.md} {
    width: 28rem;
  
  }
  @media only screen and ${media.sm} {
     width: 28rem;
  }
`;


export const SectionSdCard = styled.div`
display:flex;
height:20%;
border: 1px solid #DADADA;
border-radius: 5px;
`;
export const SectionExpert = styled.div`
padding-block-end: 2rem;

`;

export const SectionWrapper = styled.div`
  .slick-slide > div {
    display: flex;
  }

  .slick-list {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
    margin-top: -40px;
    margin-bottom: -40px;
  }

  @media only screen and (max-width: ${BREAKPOINTS.md - 0.02}px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.75rem 1.25rem;
  border-radius: ${BORDER_RADIUS};

  background-color: var(--background-color);

  @media only screen and ${media.md} {
    padding: 2.5rem 6.25rem 6.25rem;
  }

  @media only screen and ${media.xl} {
    flex-direction: row-reverse;
    justify-content: center;
    padding: 12.5rem 3.5rem;
  }
`;

export const Image = styled(AntImage)`
  margin-bottom: 4rem;

  @media only screen and ${media.xxl} {
    margin-bottom: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and ${media.xl} {
    margin-right: 7.5rem;
  }
`;

export const Title = styled(Typography.Text)`
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 1rem;

  color: var(--text-main-color);

  @media only screen and ${media.md} {
    font-size: 3rem;
    margin-bottom: 1.75rem;
  }

  @media only screen and ${media.xl} {
    font-size: 4rem;
    margin-bottom: 2.25rem;
  }
`;

export const Text = styled(Title)`
  font-size: 0.875rem;
  margin-bottom: 1.25rem;

  @media only screen and ${media.md} {
    font-size: 1.12rem;
    margin-bottom: 1.45rem;
  }

  @media only screen and ${media.sm} {
    font-size: 1.12rem;
    margin-bottom: 1.45rem;
  }
`;
export const Description = styled.div`
position:relative;
margin:-3rem 0.5rem 1.5rem 1rem ;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
color: #000000;

@media only screen and ${media.md} {
  font-size: 20px;
  line-height: 22px;
  margin:-7rem 0.5rem 3rem 1rem ;
}
`;

export const SeeAllCatalogue = styled.div`
position:relative;
margin:-1rem 0rem 2rem 1rem ;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 16px;
color: #000000;
text-decoration: underline;

@media only screen and ${media.md} {
  font-size: 20px;
  line-height: 22px;
  margin:-1rem 0rem 4rem 1rem ;
}
`;
export const SliderContainer = styled.div`
width:100%;
border: 1px solid #DADADA;
border-radius: 5px;
`;
export const DateEvent = styled.div`
position:relative;
margin:-1rem 0.5rem 1rem 1rem ;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 16px;
color: #FC6854;

@media only screen and ${media.md} {
  font-size: 20px;
  line-height: 32px;
}
`;

export const TitreEvent = styled.div`
position:relative;
margin:-1rem 0.5rem 1rem 1rem ;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 16px;
color: #000000;

@media only screen and ${media.md} {
  font-size: 32px;
  line-height: 42px;
}
`;
export const ContenusEvent = styled.div`
position:relative;
margin:-1rem 0.5rem 2rem 1rem ;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #000000;

@media only screen and ${media.md} {
  font-size: 24px;
  line-height: 22px;
  margin:-1rem 0.5rem 4rem 1rem ;
}
`;

