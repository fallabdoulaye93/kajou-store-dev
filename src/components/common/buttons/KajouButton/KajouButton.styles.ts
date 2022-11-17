import styled, { css } from 'styled-components';
import { Button as AntButton } from 'antd';
import { Severity } from '@app/interfaces/interfaces';
import { defineColorBySeverity } from '@app/utils/utils';

interface BtnProps {
  $severity?: Severity;
  $noStyle?: boolean;
}

export const Button = styled(AntButton)<BtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FC6854;
  color: white;
  height: 40px;
  
  ${(props) =>
    props.$noStyle &&
    css`
      width: unset;
      padding: 0;
      height: unset;
    `}

  &[disabled],
  &[disabled]:active,
  &[disabled]:focus,
  &[disabled]:hover {
    color: var(--disabled-color);
  }
  ${(props) =>
    !props.danger &&
    css`
      ${props.$severity &&
      css`
        box-shadow: none;
        text-shadow: none;
        background: red, 0.2);

        border-color: green;

        color: red;

        &:focus {
          background: var(--background-color);

          border-color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9);

          color: rgba(${defineColorBySeverity(props.$severity, true)}, 0.9);
        }
      `}

      ${props.type === 'text' &&
      css`
      `}

      ${props.type === 'ghost' &&
      css`
      
      `}

      ${props.type === 'primary' &&
      css`
        background: var(--primary-gradient-color);

        &:hover {
         
        }
      `}

      ${props.type === 'link' &&
      css`
        & span,
        a {
          text-decoration: underline;
        }
      `};
    `}
`;
