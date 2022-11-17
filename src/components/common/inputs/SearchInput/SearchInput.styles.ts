import styled from 'styled-components';
import { Space as AntSpace, Input } from 'antd';
import { FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';

const { Search } = Input;

export const SearchInput = styled(Search)`
  & .ant-input-prefix {
    margin: 0.5rem;
  }

  & .ant-input-search-button {
    height: 3.54875rem;
    box-shadow: none;
  }

  &.ant-input-search-large .ant-input-search-button {
    height: 4.36125rem;
  }

  & input {
    font-weight: 500;
    background-color: #E8F2F3;
    border: none;
    font-size: 13px;
    @media only screen and ${media.md} {
       font-size: 17px;
    }
    &::placeholder {
      font-weight: 500;
    }
  }

  .ant-input-group-addon {
    min-width: 5.5rem;
    color: var(--primary-color);
    font-weight: ${FONT_WEIGHT.semibold};
    font-size: ${FONT_SIZE.lg};
  }

  .ant-input-search-button {
    &.ant-btn .anticon {
      color: var(--primary-color);
    }
    width: 100%;
    background-color: rgba(1, 80, 154, 0.05);
    border: 0px solid var(--border-color);
    color: var(--primary-color);
  }
`;

export const Space = styled(AntSpace)`
  & > .ant-space-item:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
