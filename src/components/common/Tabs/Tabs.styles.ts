import styled from 'styled-components';
import { Tabs as AntdTabs } from 'antd';
import {media} from "@app/styles/themes/constants";

export const Tabs = styled(AntdTabs)`
  .ant-tabs-tab.ant-tabs-tab-disabled {
    color: var(--disabled-color);
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #4ABC96;
    font-weight : 600;
    text-shadow: 0 0 .25px;
  }
  .ant-tabs-tab, .ant-tabs-tab-remove {
    background: 0 0;
    color: #464646; 
    cursor: pointer;
    font-weight : 400;
    outline: 0;
  }
  .ant-tabs-ink-bar {
    position: absolute;
    background: #4ABC96;
    pointer-events: none;
  }
  .ant-tabs-tab {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 5px 0;
    font-size: 13px;
    border: 0;
  }
  @media only screen and ${media.md} {
    .ant-tabs-tab {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 5px 60px;
    font-size: 17px;
    border: 0;
   }
  }
`;
