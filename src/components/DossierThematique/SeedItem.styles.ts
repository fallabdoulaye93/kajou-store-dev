import styled from 'styled-components';
import { Typography, Image as AntImage } from 'antd';
import {BORDER_RADIUS, BREAKPOINTS, media} from '@app/styles/themes/constants';

export const ScrollWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 250px;
  margin-bottom:10rem;
  .ant-card-body {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
`;

export const DossierThematiqueHeader = styled.div`
 display:flex;
 align-items:center;
`;

export const TitleHeader = styled.div`
  width:80%;
  text-align:center;
  font-size: 1rem;
  font-weight: 600;
`;
export const Title = styled.div`
font-style: normal;
font-weight: 800;
font-size: 30px;
line-height: 35px;
align-items: center;
text-transform: uppercase;
color: #000000;
`;
export const Description = styled.div`
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 25px;
align-items: center;
color: #000000;
`;
export const DossierThematiqueImage = styled.div`
  margin-top:1rem;
`;

