import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { TagSpan } from 'react-trello/dist/styles/Base';
import {BORDER_RADIUS, FONT_SIZE, media} from '@app/styles/themes/constants';
import {Card as AntCard} from "antd";
import {
    BidCrypto,
    InfoText,
    ItemImage
} from "@app/components/ItemKajouThematique/item-thematique-card/ItemThematiqueCard.styles";

export const RemoveTagWrapper = styled.span`
  padding-left: 0.125rem;
  display: flex;
  align-items: center;
  padding-top: 1px;
`;

export const RemoveTagIcon = styled(CloseOutlined)`
  color: #ffffff;
  font-size: ${FONT_SIZE.xxs};
  cursor: pointer;
`;

export const TagWrapper = styled(TagSpan)`
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1125rem 0.325rem;
  margin: 0;
  font-size: 9px;
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
  background: #F3F3F3;
  & {
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      margin-bottom:5px;
      width: 170px;
      @media only screen and ${media.md} {
        width: 273px;
      }
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

export const InfoWrapper = styled.div`
  padding-left: 0px;
  padding-top: 10px;
`;

export const InfoHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Title = styled.div`
  font-size: 12px;
  @media only screen and ${media.md} {
      font-size: 22px;
      line-height: 28px;
  }
  font-weight: 600;
  width: 100%;
  line-height: 16px;
`;


export const Description = styled.div`
   font-size: 10px;
   color: #FC6854;
   margin-bottom: 15px;
   @media only screen and ${media.md} {
      font-size: 20px;
   }
   font-weight: 600;
   width: 100%;
   line-height: 14px;
`;

