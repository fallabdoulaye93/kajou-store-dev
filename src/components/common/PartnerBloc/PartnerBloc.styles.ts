import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { TagSpan } from 'react-trello/dist/styles/Base';
import {FONT_SIZE, media} from '@app/styles/themes/constants';
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

export const PartnerWrapper = styled(TagSpan)`
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1125rem 0.325rem;
  margin: 0;
  color: white;
  font-size: 9px;
  @media only screen and ${media.md} {
      font-size: ${FONT_SIZE.md};
  }
`;

export const Image = styled(AntImage)`
  margin-bottom: 1rem;
  margin-right: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39px;
  height: 29px;
  @media only screen and ${media.md} {
    margin-bottom: 0;
    width: 50px;
    height: 49px;
  }
`;

export const Name = styled(Typography.Text)`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;

  @media only screen and ${media.xl} {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;
