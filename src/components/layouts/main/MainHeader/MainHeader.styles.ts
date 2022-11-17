import { LAYOUT } from '@app/styles/themes/constants';
import { media } from '@app/styles/themes/constants';
import { Layout } from 'antd';
import styled, { css } from 'styled-components';

interface Header {
}

export const Header = styled(Layout.Header)<Header>`
  line-height: 1.5;
  @media only screen and ${media.md} {
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
    height: ${'9.625rem'};
  }
`;
