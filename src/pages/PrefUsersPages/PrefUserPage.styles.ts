import styled from 'styled-components';
import { Col } from 'antd';
import { Progress as AntProgress } from 'antd';
import {FONT_SIZE, FONT_WEIGHT, LAYOUT, media} from '@app/styles/themes/constants';
import { Button } from '@app/components/common/buttons/Button/Button';
import {Select as sSelect} from "@app/components/common/selects/Select/Select";

export const Select = styled(sSelect)`
    .ant-select-selector
    {
        position: relative;
        background-color: red;
        border: 0px solid;
        border-radius: 7px;
        transition: all .3s cubic-bezier(.645,.045,.355,1);
    }
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
        width: 100%;
        height: 50px;
        padding: 0 11px;
        border: 0;
    }
    .ant-select-selector {
        position: relative;
        background-color: #F3F3F3;
        border-radius: 5px;
        transition: all .3s cubic-bezier(.645,.045,.355,1);
    }
    .ant-select-selection-item {
        color: #000000;
        font-size: 12px;
        line-height: 17px;
        font-weight: bold;
    }
    
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
        width: 100%;
        height: 50px;
        padding: 0 11px;
    }
    .ant-select {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: red;
        font-size: 16px;
        font-variant: tabular-nums;
        line-height: 1.5715;
        list-style: none;
        font-feature-settings: 'tnum';
        position: relative;
        display: inline-block;
        cursor: pointer;
    }
`;

export const ThematiqueDescription = styled.div`
    font-size: ${FONT_SIZE.xs};
    font-weight: ${FONT_WEIGHT.bold};
    font-color: black;
    line-height: 1.2625rem;
`;

export const MerciText = styled.div`
    font-size: 16px;
    opacity: 0.5;
    font-weight: 400;
    font-color: #A59F9F;
    line-height: 24px;
    text-align: center;
    margin-top: 60px;
`;

export const PersoExperience = styled.div`
    font-size: 20px;
    font-weight: 600;
    font-color: black;
    line-height: 30px;
    text-align: center;
    margin-top: 10px;
`;

export const LanguePrincipaleText = styled.div`
    font-size: 14px;
    font-weight: 700;
    font-color: black;
    line-height: 1.2625rem;
`;

export const LanguePrincipaleQuestionText = styled.div`
    font-size: 14px;
    font-weight: 700;
    font-color: black;
    line-height: 17px;
`;
export const SelectTouteLangueText = styled.div`
    font-size: 10px;
    margin-top: 5px;
    font-weight: 400;
    font-color: black;
    line-height: 17px;
`;

export const Progress1 = styled(AntProgress)`
  .ant-progress-line {
    position: relative;
    width: 100% !important;
    font-size: 16px;
  }
  .ant-progress-outer {
    display: inline-block;
    width: 98%;
    margin-right: 0;
    padding-right: 0;
  }
  .ant-progress-inner {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 3px;
    overflow: hidden;
    vertical-align: middle;
    background-color: #D9D9D9;
    border-radius: 100px;
}
`;

export const Progress2 = styled(AntProgress)`
  .ant-progress-line {
    position: relative;
    width: 50% !important;
    font-size: 16px;
  }
  .ant-progress-outer {
    display: inline-block;
    width: 98%;
    margin-right: 0;
    padding-right: 0;
  }
  .ant-progress-inner {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 3px;
    overflow: hidden;
    vertical-align: middle;
    background-color: #FC6854;
    border-radius: 100px;
}
`;

export const Progress3 = styled(AntProgress)`
    .ant-progress-circle-path {
        animation: ant-progress-appear .3s;
        stroke: rgb(252, 104, 84);
        stroke-dasharray: 233.787px, 295.31;
        stroke-dashoffset: 61.4467;
        transform: rotate(127.5deg);
        transform-origin: 50% 50%;
        transition: stroke-dashoffset 0s ease 0s, stroke-dasharray 0s ease 0s, stroke ease 0s, stroke-width ease 0.3s, opacity ease 0s;
        fill-opacity: 0;
        background-color: transparent;
        width: 120px;
        height: 120px;
        text-align: center;
    }
`;

export const ScrollWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 250px;

  .ant-card-body {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 15px;

  background: black;

  min-height: 300px;
  overflow-y: auto;
`;

export const Item = styled.div`
  background: red;
  height: 150px;
  flex-shrink: 0;
`;

export const ProgressText1 = styled.div`
    font-size: 11px;
    opacity: 0.3;
    font-weight: 300;
    font-style: italic;
    font-color: '#D1D1D1';
    line-height: 17px;
    text-align: center;
    margin-top: 5px;
`;
export const ProgressText2 = styled.div`
    font-size: 13px;
    font-weight: 300;
    font-style: italic;
    font-color: '#827E7E';
    line-height: 20px;
    text-align: center;
    margin-top: 5px;
    display: inline-block;
`;
export const ProgressText3 = styled.div`
    font-size: 11px;
    opacity: 0.3;
    font-weight: 300;
    font-style: italic;
    font-color: '#D1D1D1';
    line-height: 17px;
    text-align: center;
    margin-top: 5px;
`;
