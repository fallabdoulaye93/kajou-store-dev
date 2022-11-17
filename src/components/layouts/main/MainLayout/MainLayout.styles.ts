import styled from 'styled-components';
import { Layout } from 'antd';
import { media } from '@app/styles/themes/constants';

export const LayoutMaster = styled(Layout)`
  height: 100vh;
  //overflow-y: hidden!important;
`;

export const LayoutMain = styled(Layout)`
  @media only screen and ${media.md} {
    margin:0;
     //margin-left: 80px;
    // overflow-y: hidden!important;
  }

  @media only screen and ${media.xl} {
    margin-left: unset;
  }
 
`;
