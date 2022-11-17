import styled from 'styled-components';
import {Card as AntCard, Typography} from 'antd';
import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import {ThematiqueSelectionCard} from "@app/components/ThematiqueSelectionCard/ThematiqueSelectionCard";
import {
    BidCrypto,
    InfoText,
    ItemImage
} from "@app/components/ItemKajouThematique/item-thematique-card/ItemThematiqueCard.styles";

export const Header = styled.div`
  height: 5.5rem;
  margin-left: 1.5625rem;
  display: flex;
  align-items: center;
`;


export const ImgWrapper = styled.div`
  overflow: hidden;
  margin: -1.3rem -1.3rem 0;
  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};

  & > div {
    display: block;
  }
`;


export const Card = styled(AntCard)`
  overflow: hidden;
  & {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      margin-bottom:5px;
      margin-left:13px;
      width: 43%;
      border: 0;
      position: relative;
    }

    ${ItemImage} {
      animation: imgIn 0.5s;
      animation-fill-mode: forwards;
    }

    ${InfoText} {
      color: var(--text-secondary-color);
    }

    ${BidCrypto} {
      color: var(--text-secondary-color);
    }

  @keyframes imgIn {
    99% {
      transform: scale(2);
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes imgOut {
    0% {
      transform: scale(2);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes titleIn {
    0% {
      left: 0;
    }

    100% {
      left: 50%;
      transform: translate(-50%, -50%) scale(1.5);
    }
  }

  @keyframes titleOut {
    0% {
      left: 50%;
      transform: translate(-50%, -50%) scale(1.5);
    }

    100% {
      left: 0;
    }
  }
`;


export const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.625rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 40%;
  box-shadow: var(--box-shadow);
  border-radius: ${BORDER_RADIUS};
  transition: 0.3s;

  [data-theme='dark'] & {
    background: var(--secondary-background-color);
  }

  &:hover {
    box-shadow: var(--box-shadow-hover);
  }
`;

export const Author = styled.div`
  font-size: ${FONT_SIZE.lg};
  @media only screen and ${media.md} {
      font-size: ${FONT_SIZE.md};
  }
  font-weight: ${FONT_WEIGHT.bold};
  color: var(--text-main-color);
  line-height: 1.5625rem;
`;

export const InfoWrapper = styled.div`
  margin-left: -18px;
  margin-top: 10px;
`;

export const InfoHeader = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const Title = styled.div`
  font-size: 11px;
  @media only screen and ${media.md} {
      font-size: ${FONT_SIZE.md};
      line-height: 18px;
  }
  font-weight: 700;
  width: 90%;
  line-height: 14px;
`;


export const Description = styled.div`
   font-size: 10px;
   @media only screen and ${media.md} {
      font-size: ${FONT_SIZE.xs};
      line-height: 18px;
   }
   font-weight: normal;
   width: 100%;
   line-height: 14px;
`;

export const CardAvailability = styled.div`
   font-size: 8px;
   @media only screen and ${media.md} {
      font-size: 12px;
      margin-top: 20px;
   }
   
   font-weight: 400;
   width: 100%;
   font-style: 'italic'
   line-height: 14px;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.425rem;
  height: 13px;
  margin-left: -20px;
  margin-top: 7px;
`;
