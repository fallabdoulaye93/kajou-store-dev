import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { TagSpan } from 'react-trello/dist/styles/Base';
import {FONT_SIZE, media} from '@app/styles/themes/constants';

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
  color: white;
  font-size: 9px;
  @media only screen and ${media.md} {
      font-size: ${FONT_SIZE.md};
  }
`;
