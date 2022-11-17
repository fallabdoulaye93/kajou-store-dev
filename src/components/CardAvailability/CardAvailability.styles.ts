import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { TagSpan } from 'react-trello/dist/styles/Base';
import {FONT_SIZE, FONT_WEIGHT, media} from '@app/styles/themes/constants';
import {Collapse} from "@app/components/common/Collapse/Collapse";
import {Image as AntImage, Typography} from "antd";

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

export const CollapseWrapper = styled(Collapse)`
  margin-top: 15px;
  width: 100%;
  color: 'black',
  font-size: 11px,
  font-weight: '400',
  border-radius: 10px,
  overflow: hidden,
  .ant-col ant-col-8{
    text-align: 'center'
  }
  .ant-row {
     -webkit-column-gap: 0%; 
     column-gap: 0%; 
  }
  .ant-collapse {
    margin: 0;
    padding: 0;
    line-height: 1.5715;
    background-color: rgba(1,80,154,.05);
    border: 1px solid var(--border-base-color);
    border-bottom: 1;
    border-radius: 30px;
  }
  ant-collapse-content {
    background-color: white;
    border: 1px solid;
  }
  .ant-collapse-header {
      align-items: center;
      border-radius: 10px;
  }
  .ant-collapse-header-text
  { 
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 16px;
      color: #FFFFFF;
      @media only screen and ${media.md} {
        font-size: 20px;
      }
  }
 
`;

export const Espace = styled(Collapse)`
  margin-right: 10px;
  color: transparent;
  display: inline-block;
`;

export const Image = styled(AntImage)`
  margin-top: 55%;
  width: 10px;
  @media only screen and ${media.md} {
    margin-top: 75%;
    width: 15px;
  }
`;

export const ImageCarteSD = styled(AntImage)`
  width: 20px;
  margin-right: 10px;
  display: "inline-block";
  @media only screen and ${media.md} {
   
  }
`;
export const Description = styled(Typography.Text)`
   font-weight: 400;
   font-size: 11px;
   line-height: 17px;
   @media only screen and ${media.md} {
     font-size: 20px;
   }
`;

export const Tarif = styled(Typography.Text)`
   font-weight: 600;
   font-size: 15px;
   line-height: 23px;
   @media only screen and ${media.md} {
     font-size: 23px;
   }
`;


