import styled from 'styled-components';
import { Card as CommonCard } from '@app/components/common/Card/Card';
import { Collapse } from '@app/components/common/Collapse/Collapse';
import {BORDER_RADIUS, media} from "@app/styles/themes/constants";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  border-radius: ${BORDER_RADIUS};

  background-color: var(--background-color);


`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled(CommonCard)`
  width: 100%;
  margin-bottom: 1.25rem;
 
  .ant-card-head-title {
    font-size: 1rem;
  }
  .ant-card-body {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    align-items: center;
  }
  .ant-card-body:before {
    display: none;
  }
  .ant-card-body:after {
    display: none;
  }
  &.ant-card-bordered {
    border: 1px solid var(--border-color);
  }
`;

export const InputsWrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CollapseWrapper = styled(Collapse)`
  width: 40rem;
`;
