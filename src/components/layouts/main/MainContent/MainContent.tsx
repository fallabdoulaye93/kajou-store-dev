import styled, { css } from 'styled-components';
import { Layout } from 'antd';
import { LAYOUT, media } from '@app/styles/themes/constants';

const { Content } = Layout;

interface HeaderProps {
}

export default styled(Content)<HeaderProps>`
  padding: ${LAYOUT.mobile.paddingVertical} ${LAYOUT.mobile.paddingHorizontal};
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and ${media.md} {
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
  }
`;
