import React, { useMemo } from 'react';
import styled from 'styled-components';
import { hexToHSL } from '@app/utils/utils';

interface SpinnerOriginalProps {
  className?: string;
  color: string;
}

const SpinnerOriginal: React.FC<SpinnerOriginalProps> = ({ className, color }) => {

  return (
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
           width="800.000000pt" height="336.000000pt" viewBox="0 0 800.000000 336.000000"
           preserveAspectRatio="xMidYMid meet">

          <g transform="translate(0.000000,336.000000) scale(0.100000,-0.100000)"
             fill="#000000" stroke="none">
          </g>
      </svg>
  );
};

interface GlobalSpinnerProps {
  size?: string;
}

export const GlobalSpinner = styled(SpinnerOriginal)<GlobalSpinnerProps>`
  width: ${(props) => props.size || '8em'};
  height: ${(props) => props.size || '8em'};
`;
