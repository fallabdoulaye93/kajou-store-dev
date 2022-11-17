import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import { Rate, Typography } from 'antd';
import styled from 'styled-components';
import {Card} from "@app/components/common/Card/Card";
import event from '@app/assets/images/event.png'
// export const Thematique = styled(Card)`
//   margin: 0rem;
// `;

// export const Title = styled(Typography.Text)`
//   font-size: ${FONT_SIZE.xxs};
//   font-weight: ${FONT_WEIGHT.medium};

//   @media only screen and ${media.md} {
//     font-size: ${FONT_SIZE.xs};
//   }

//   @media only screen and ${media.xxl} {
//     font-size: ${FONT_SIZE.md};
//   }
// `;

// export const Text = styled(Typography.Text)`
//   font-size: ${FONT_SIZE.xs};

//   font-weight: ${FONT_WEIGHT.semibold};

//   @media only screen and ${media.md} {
//     font-size: ${FONT_SIZE.md};
//   }

//   @media only screen and ${media.xxl} {
//     font-size: ${FONT_SIZE.lg};
//   }
// `;

// export const ImgWrapper = styled.div`

//   position:relative;
  
// `;

export const EventWrapper = styled.div`
  overflow: hidden;
  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};
  & > div {
    display: block;
  }
`;

export const ImageAbsolute = styled.div`
position: relative;
bottom: 2.5rem;
left: 85%; 
  @media only screen and ${media.md} {
    bottom: 4.5rem;
    left: 85%; 
  }
`;

export const Titre = styled.div`
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 14px;
color: #464646;
display: block;
`;
export const Contenus = styled.div`
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 14px;
color: #4ABC96;
display: block;
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
font-weight: 400;
font-size: 8px;
line-height: 16px;
color: #FC6854;

@media only screen and ${media.md} {
  font-size: 18px;
  line-height: 32px;
}
@media only screen and ${media.sm} {
  font-size: 18px;
  line-height: 32px;
}
`;

export const TitreEvent = styled.div`
position:relative;
margin:-1rem 0.5rem 1rem 1rem ;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 20px;
color: #000000;

@media only screen and ${media.md} {
  font-size: 36px;
  line-height: 44px;
}
@media only screen and ${media.sm} {
  font-size: 36px;
  line-height: 44px;
}
`;
export const ContenusEvent = styled.div`
position:relative;
margin:-1rem 0.5rem 2rem 1rem ;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
color: #000000;

@media only screen and ${media.md} {
  font-size: 24px;
  line-height: 29px;
  margin:-1rem 0.5rem 4rem 1rem ;
}
@media only screen and ${media.sm} {
  font-size: 24px;
  line-height: 29px;
  margin:-1rem 0.5rem 4rem 1rem ;
}
`;