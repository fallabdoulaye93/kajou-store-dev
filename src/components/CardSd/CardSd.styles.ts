import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import { Rate, Typography } from 'antd';
import styled from 'styled-components';
import {Card} from "@app/components/common/Card/Card";

// export const Thematique = styled(Card)`
//   margin: 0rem;
// `;

// export const Title = styled(Typography.Text)`
// color: #FFFFFF;
// font-size:10px;
//   // font-size: ${FONT_SIZE.xxs};
//   // font-weight: ${FONT_WEIGHT.medium};

//   // @media only screen and ${media.md} {
//   //   font-size: ${FONT_SIZE.xs};
//   // }

//   // @media only screen and ${media.xxl} {
//   //   font-size: ${FONT_SIZE.md};
//   // }
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
//   overflow: hidden;
//   border-top-left-radius: ${BORDER_RADIUS};
//   border-top-right-radius: ${BORDER_RADIUS};

//   & > div {
//     display: block;
//   }
// `;


export const CardSdWrapper = styled.div`
  overflow: hidden;
  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};
  & > div {
    display: block;
  }
  width:10rem;
  
  @media only screen and ${media.md} {
    width:18rem;
}
`;

export const ImageAbsolute = styled.div`
position: relative;
bottom: 5.5rem;
margin:0.5rem;

  @media only screen and ${media.md} {
    bottom: 13rem;
    margin:1.5rem; 
  }
`;

export const Titre = styled.div`
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 12px;
color: #FFFFFF;
align-text:center;
margin-left: 3%;

@media only screen and ${media.md} {
  font-size: 20px;
  line-height: 22px;
}
`;

export const Langue = styled.div`
display:flex;
margin-top:0.5rem;
margin-left: 3%;
`;

export const LanguePrincipal = styled.div`
text-transform : uppercase;
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 14px;
color: #FFFFFF;
text-align:center;
background: #F4AE0C;
border-radius: 5px;
margin-right:0.2rem;
width:2.8rem;
@media only screen and ${media.md} {
  font-size: 14px;
  line-height: 20px;
  border-radius: 5px;
  margin-right:0.6rem;
  width:5rem;
}
`;

export const LangueSecondaire = styled.div`
text-transform : uppercase;
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 14px;
color: #FFFFFF;
text-align:center;
background: #1047A5;
border-radius: 5px;
width:3rem;

@media only screen and ${media.md} {
  font-size: 14px;
  line-height: 20px;
  border-radius: 10px;
  margin-right:0.6rem;
  width:6rem;
}
`;



