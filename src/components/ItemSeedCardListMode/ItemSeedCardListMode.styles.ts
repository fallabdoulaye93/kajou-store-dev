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
  border-radius: ${BORDER_RADIUS};

  & > div {
    display: block;
  }
`;

export const Image = styled.img`
  position: relative;
  height: 80px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  object-fit: center;
`;

export const ImageThumbnail = styled.img`
  position: relative;
  height: 160px;
`;

export const Card = styled(AntCard)`
  overflow: hidden;
  background: #F3F3F3;
  margin-top: 10px;
`;

export const CardThumbnail = styled(AntCard)`
  overflow: hidden;
  background: #FFFFFF;
  border: 1px solid #F3F3F3;
  margin-bottom: 10px;
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

